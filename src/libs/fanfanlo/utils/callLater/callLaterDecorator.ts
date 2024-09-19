import _ from "lodash";
import {callLater, callQueueMicroTask} from "./callLater";

type isSame = boolean
export type compareArgumentsFunc = (old: unknown, now: unknown) => isSame;

type Fn = (c:()=>void, repeatable:boolean)=>void

function createDecorator(fn:Fn, compareArguments?: boolean | compareArgumentsFunc | string){
    return function (target: unknown, key: string) {
        const descriptor = arguments[2];
        if (!descriptor) throw new Error("decorator function | no descriptor")
        let that: unknown = target;
        let args: unknown[] = [];
        const value = descriptor.value;

        function call() {
            value.apply(that, args)
        }

        descriptor.value = function () {
            that = this;
            const repeatable = _.isFunction(compareArguments) ? compareArguments(args, arguments) :
                _.isString(compareArguments) ? this[compareArguments].call(this, args, arguments) :
                    _.isBoolean(compareArguments) ? compareArguments : false
            args = Array.from(arguments)
            let c = call;
            if (repeatable) {
                c = (...args) => {
                    value.apply(this, args)
                }
            }
            fn(c, repeatable)
        }
        return descriptor;
    }
}

export function queueMicroTaskDecorator(compareArguments?: boolean | compareArgumentsFunc | string) {
    return createDecorator((c:()=>void, repeatable:boolean)=>{
        callQueueMicroTask(c, repeatable)
    }, compareArguments)
}


export function callLaterDecorator(delay:number, compareArguments?: boolean | compareArgumentsFunc | string){
    return createDecorator((c:()=>void, repeatable:boolean)=>{
        callLater(c, delay, repeatable)
    }, compareArguments)
}