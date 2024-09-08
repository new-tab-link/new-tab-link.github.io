import _ from "lodash";

type Data = {
    fn:()=>void,
    handle:number,
    cancelled:boolean,
}

const list:Data[] = [];
// in browser,not supports in nodejs
export function callLater(fn:()=>void , delay:number, repeatable:boolean = false, ...args:any):Data{
    if(!repeatable){
        removeCallLater(fn)
    }
    let data = {fn, handle:-1, cancelled:false}
    // if in nodejs need to change window an return type
    data.handle = window.setTimeout(()=>{
        if(data.cancelled)return;
        fn.apply(undefined, args)
        remove(data);
    }, delay);
    list.push(data);
    return data;
}

export function removeCallLater(fn:()=>void){
    for (let i = 0; i < list.length; i++) {
        let data = list[i];
        if(!data)continue;
        if(data.fn == fn){
            stopClear(data, i)
            return;
        }
    }
}

function remove(data:Data){
    let index = list.indexOf(data);
    stopClear(data, index)
}

function stopClear(data:Data, index:number){
    if(!data)return;
    clearTimeout(data.handle);
    data.cancelled = true;
    if(index >-1){
        list.splice(index, 1)
    }
}

class QueueMicroTaskData {
    fn!:()=>void;
    f = ()=> {
        if(this.cancelled)return;
        let fn = this.fn;
        removeQueueMicroTask(this.fn)
        fn()
    }
    cancelled= false
    constructor(fn:()=>void) {
        this.fn = fn
    }

}

let tasks:QueueMicroTaskData[] = []
export function callQueueMicroTask(fn:()=>void, repeatable:boolean = false){
    let data = new QueueMicroTaskData(fn)
    queueMicrotask(data.f);
    if(!repeatable){
        let res = findTaskByFn(fn)
        if(res){
            stopClearTask(res.data, res.i)
        }
    }
    tasks.push(data);
    return data;
}

export function removeQueueMicroTask(fn:()=>void|QueueMicroTaskData){
    if(fn instanceof QueueMicroTaskData){
        let index = tasks.indexOf(fn);
        stopClearTask(fn, index)
    }else if(_.isFunction(fn)){
        let res = findTaskByFn(fn)
        if(res){
            stopClearTask(res.data, res.i)
        }
    }else{
        // warning not found
    }
}

function findTaskByFn(fn:()=>void){
    for (let i = 0; i < tasks.length; i++) {
        let data = tasks[i];
        if(data.fn == fn){
            return {data, i}
        }
    }
    return
}
function stopClearTask(data:QueueMicroTaskData, index:number){
    if(!data)return;
    data.cancelled = true;
    if(index > -1){
        tasks.splice(index, 1)
    }
}

function removeTask(data:QueueMicroTaskData){
    let index = tasks.indexOf(data);
    stopClearTask(data, index);
}

