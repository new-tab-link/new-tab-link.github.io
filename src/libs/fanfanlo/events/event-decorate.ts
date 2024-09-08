import {PropertyChangeEvent} from "./PropertyChangeEvent";
import {watchPerpertyAfterChange} from "../decorator/wrapProperty";
import {EventDispatcher} from "./EventDispatcher";

export class DispatchEventOptions{
    type = "";
    check = false
}
export function createArgsEventType(type:string){
    return `${type}Args`
}


function createOrGetEventType(type:string|undefined, target:any, key:string|symbol, checkHasEventType:boolean){
    const t = type || `${key.toString()}Updated`;
    if(checkHasEventType){
        const eventTypes = target.constructor.prototype.constructor.events;
        if(!eventTypes || !eventTypes[t]){
            const print = target._print || console.log;
            print("dispatchPropertyUpdateEvent error", key, target)
            alert(`no event type ${t}`)
            return []
        }
    }
    return [t, createArgsEventType(t)]
}

function dispatchEvent(type:string|undefined, target:any, key:string|symbol, checkHasEventType:boolean, now:any, old:any){
    let [t1, t2] = createOrGetEventType(type, target, key, checkHasEventType);
    target.dispatchEvent(new PropertyChangeEvent(t1, old, now, PropertyChangeEvent.kindUpdate))
    target.dispatchArgs(t2, now, old);
    // console.log("event-decorate dispatch event", now, old, t1, t2);
}
// for setter
export function setterUpdateEvent(type="", checkHasEventType = true) {
    return function dispatch(target:any, key:string|symbol, descriptor:any) {
        const set = descriptor.set;
        descriptor.set = function (...args:any[]){
            let t = type || `${key.toString()}Updated`;
            if(checkHasEventType){
                let eventTypes = target.constructor.prototype.constructor.eventTypes;
                if(!eventTypes || !eventTypes[t]){
                    let print = this._print || console.log;
                    print("dispatchPropertyUpdateEvent error", key, target, descriptor)
                    alert(`no event type ${t}`)
                    return;
                }
            }
            if(checkHasEventType && target.constructor.prototype.constructor[t] != t){
                let print = this._print || console.log;
                print("dispatchPropertyUpdateEvent error", key, target, descriptor)
                alert(`no event type ${t}`)
                return;
            }
            const now = args[0];
            const old = descriptor.get.call(this)
            const ret = set.call(this, ...args);
            this.dispatchEvent(new PropertyChangeEvent(t, old, now, PropertyChangeEvent.kindUpdate))
            this.dispatchArgs(`${t}Args`, now, old);
            return ret;
        }
        return descriptor;
    };
}

/**
 * 用于类对象的变量身上，例如
 * class Animal{
 *      @propertyUpdateEvent()
 *     name
 * }
 * @param options
 */
// export function propertyUpdateEvent2(options?:DispatchEventOptions){
//     let {type, check} = options || new DispatchEventOptions();
//     return function (target:any, key:string|symbol){
//         if(arguments.length == 0)return;
//         let descriptor = arguments[2];
//         let v = descriptor.initializer();
//         delete descriptor.initializer;
//         delete descriptor.writable;
//         descriptor.get = function (){return v}
//         descriptor.set = function (d:any){
//             let old = v;
//             v = d;
//             console.log("ooooooooooo", old, v, this);
//             dispatchEvent(type, this, key, check, d, old);
//         }
//
//         return descriptor;
//     }
// }

export function propertyUpdateEventDecrator(options?:DispatchEventOptions){
    const {type, check} = options || new DispatchEventOptions();

    function onAfterChange(now:unknown, old:unknown, that:unknown, key:string|symbol){
        dispatchEvent(type, that, key, check, now, old)
    }
    return watchPerpertyAfterChange(onAfterChange)

}

/**
* 似乎需要添加一个webpack之类的配置才能在库里包含装饰器的代码

 export function testPropertyUpdateEvent(){
 class A extends EventDispatcher{
 static events ={
 // 注意 变量名和值是一致的
 nameUpdated  : "nameUpdated"
 }
 @propertyUpdateEventDecrator({check:false, type:"name"})
 @propertyUpdateEventDecrator()
  name = "a"
  }

  const a = new A();
  function onUpdateEvent(e:PropertyChangeEvent<string>){
  console.log(`event type is ${e.type}`, e.newValue, e.oldValue)
  }
  function onUpdateArgs(now:string, old:string){
  console.log("on args event", now, old);
  }
  a.addEventListener("name", onUpdateEvent);
  a.addEventListener(A.events.nameUpdated, onUpdateEvent)
  a.addEventListener(createArgsEventType(A.events.nameUpdated), onUpdateArgs)
  a.addEventListener(createArgsEventType("name"), onUpdateArgs)
  a.name = "b";

  }


 */
