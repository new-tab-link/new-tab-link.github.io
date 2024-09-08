// import {EventDispatcherNew} from "#/libs/fanfanlo/events/EventDispatcherNew";
// import {IEventDispatcher, IEventDispatcherEventMap} from "#/libs/fanfanlo/events/IEventDispatcher";
// import {propertyUpdateEventDecrator} from "#/libs/fanfanlo/events/event-decorate";
// import {DataEvent} from "#/libs/fanfanlo/events/DataEvent";
// import {PropertyChangeEvent} from "#/libs/fanfanlo/events/PropertyChangeEvent";
// import {data} from "dom7";
// import {EventDispatcher} from "#/libs/fanfanlo/events/EventDispatcher";
//
// function addListener(){
//     let tag = "addListener"
//     interface IEventMap extends IEventDispatcherEventMap{
//         "onComplete":()=>void;
//         aliasUpdated:(event:PropertyChangeEvent<string>)=>void;
//         aliasUpdatedArgs:(now:string, old:string|undefined)=>void;
//         dataUpdated:(data:any)=>void;
//         dataUpdatedArgs:(now:any)=>void;
//         onAjaxResult:(resultString:string, err?:Error, requestData?:any)=>void;
//     }
//     const domain1 = {}
//     const domain2 = {}
//     function onComplete(){
//         console.log(tag, "onComplete")
//     }
//     function onAliasUpdate(event:PropertyChangeEvent<string>){
//         console.log(tag, "onAliasUpdate event", event)
//     }
//     function onAliasUpdateArgs(now:string, old:string|undefined){
//         console.log(tag, "onAliasUpdateArgs", now, old);
//     }
//     function onData(event:PropertyChangeEvent<any>){
//         console.log(tag, "dataUpdated new value=", event.newValue);
//     }
//     function onDataOnceArgs(nowData:any){
//         console.log(tag, "onDataOnceArgs", nowData);
//     }
//     function onAjaxResult<T>(resultString:string, err?:Error, requestData?:T){
//         console.log(tag, "onAjaxResult", resultString, err, requestData);
//     }
//     class Dispatcher extends EventDispatcher{
//         @propertyUpdateEventDecrator()
//         alias:string|undefined = "hello"
//         @propertyUpdateEventDecrator()
//         data:any
//         complete(){
//             this.dispatchArgs<IEventMap>("onComplete")
//         }
//         ajaxResult(resultString:string, err?:Error, requestData?:any){
//             this.dispatchArgs<IEventMap>("onAjaxResult", resultString, err, requestData);
//         }
//     }
//     let dispatcher:Dispatcher = new Dispatcher();
//     dispatcher.addEventListener<IEventMap>("onComplete", onComplete);
//     dispatcher.addEventListener<IEventMap>("aliasUpdated", onAliasUpdate);
//     dispatcher.addEventListener<IEventMap>("aliasUpdatedArgs", onAliasUpdateArgs);
//     dispatcher.addDomainEventListener<IEventMap>(domain1, "dataUpdated", onData);
//     dispatcher.addDomainOnceListener<IEventMap>(domain2, "dataUpdatedArgs", onDataOnceArgs);
//     dispatcher.addEventListener<IEventMap>("onAjaxResult", onAjaxResult);
//     // dispatcher.alias = "joy"
//     dispatcher.data = {age:3}
//     // dispatcher.ajaxResult("remote result", undefined, dispatcher.data);
//     dispatcher.data = {name:"an"}
//     dispatcher.removeDomain(domain1);
//     dispatcher.data = {msg:"no listen now"}
//     // dispatcher.complete();
//
// }
//
// export function testEventDispatcher(){
//     addListener();
// }