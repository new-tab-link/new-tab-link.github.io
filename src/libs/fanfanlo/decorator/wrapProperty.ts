import _ from "lodash";

type isTerminate = boolean
type OnPropertyBeforeChange = (update:any, old:any, that:any, key:string|symbol)=>isTerminate;
type OnPropertyAfterChange = (now:any, old:any, that:any, key:string|symbol)=>void;
export function wrapProperty(descriptor:any):any{
    // let value = ("initializer" in descriptor) ? descriptor.initializer() : descriptor.value;
    let value = descriptor.initializer ? descriptor.initializer() : descriptor.value;
    if(!("get" in descriptor)){
        descriptor.get = function (){
            return value;
        }
    }
    if(!("set" in descriptor)){
        descriptor.set = function (v:any){
            value = v;
        }
    }
    return descriptor;
}

export function wrapPropertyWithOnChange(target:any, key:string|symbol, descriptor:any, before?:OnPropertyBeforeChange, afeter?:OnPropertyAfterChange):any{
    descriptor = wrapProperty(descriptor);
    let obj = {
        get:function (){
            let v = descriptor.get.bind(this)()
            return v;
        },
        set:function (v:any){
            let old = target[key];
            if(before?.(v, old, this, key))return;
            descriptor.set.bind(this)(v)
            afeter?.(target[key], old, this, key)
        },
        configurable:true,
    }
    // 观察一下，如果用不到就删除
    // let res = Object.defineProperty(target, key, obj);
    return obj;
}

export function watchPerpertyBeforeChange(fn: OnPropertyBeforeChange | string) {
    return function (target:any, key:string|symbol){
        fn = _.isFunction(fn) ? fn : target[fn];
        fn = fn as OnPropertyBeforeChange
        if(!fn){
            throw new Error("watch perperty change after | no fn")
        }
        let descriptor = arguments[2];
        if(!descriptor)throw new Error("watch perperty change after | no descriptor")
        return wrapPropertyWithOnChange(target, key, descriptor, fn, undefined)
    }
}

export function watchPerpertyAfterChange(fn: OnPropertyAfterChange | string) {
    return function (target:any, key:string|symbol){
        fn = _.isFunction(fn) ? fn : target[fn];
        fn = fn as OnPropertyAfterChange
        if(!fn){
            throw new Error("watch perperty change after | no fn")
        }
        let descriptor = arguments[2];
        if(!descriptor)throw new Error("watch perperty change after | no descriptor")
        return wrapPropertyWithOnChange(target, key, descriptor, undefined, fn)
    }
}