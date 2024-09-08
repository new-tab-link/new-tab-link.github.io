
export type IEventHandler = ((...args:unknown[])=>void) | (()=>void)
// export interface IEventDispatcherEventMap{}
export type IEventDispatcherEventMap = Map<unknown, IEventHandler>
export interface IEventDispatcher{
    addEventListenerOnce<T extends IEventDispatcherEventMap, U extends keyof T>(type:keyof T, onEvent:T[U], index?:number):T[keyof T];
    addOnceListener<T extends IEventDispatcherEventMap>(type:keyof T, onEvent:T[keyof T], index?:number, domain?:unknown):T[keyof T];
    // onceListenerCb<T extends IEventDispatcherEventMap>(type:keyof T, onEvent:T[keyof T], index?:number):void;
    addEventListener<T extends IEventDispatcherEventMap>(type:keyof T, onEvent:T[keyof T], index?:number):void;
    removeEventListener<T extends IEventDispatcherEventMap>(type:keyof T, onEvent:T[keyof T]):boolean;
    addDomainEventListener<T extends IEventDispatcherEventMap>(domain:unknown, type:keyof T, onEvent:T[keyof T], index?:number):void;
    addDomainOnceListener<T extends IEventDispatcherEventMap>(domain:unknown, type:keyof T, onEvent:T[keyof T], index?:number):void;
    removeDomainEventListener<T extends IEventDispatcherEventMap>(domain:unknown, type:keyof T, onEvent:T[keyof T]):boolean;
    removeDomain(domain:unknown):boolean;
    dispatchEvent(event?:unknown):boolean;
    dispatchArgs<T extends keyof IEventDispatcherEventMap>(type:keyof T, ...rest:unknown[]):boolean;
    willTrigger<T extends keyof IEventDispatcherEventMap>(type:keyof T):boolean;
}
// export interface IEventdispatcher<T extends IEventDispatcherEventMap>{
//     addEventListenerOnce(type:any, cb:Cb, index?:number):void;
//     addOnceListener(type:any, cb:Cb, index?:number, domain?:any):void;
//     onceListenerCb(type:any, cb:Cb, index?:number):void;
//     addEventListener(type:keyof T, cb:Cb, index?:number):void;
//     removeEventListener(type:any, cb:Cb):void;
//     addDomainEventListener(domain:any, type:any, cb:Cb, index?:number):void;
//     addDomainOnceListener(domain:any, type:any, cb:Cb, index?:number):void;
//     removeDomainEventListener(domain:any, type:any, cb:Cb):void;
//     removeDomain(domain:any):void;
//     dispatchEvent(event?:any):void;
//     dispatchArgs(type:string, ...rest:any):void;
//     willTrigger(type:any):void;
// }