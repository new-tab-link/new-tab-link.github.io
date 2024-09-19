

import { IEventHandler, IEventDispatcherEventMap } from './IEventDispatcher';
import {Event} from './Event'


type Listeners = IEventHandler[]
type ListenMap = Map<unknown, Listeners>;//Record<any, Listeners>
type OnceListener = Map<IEventHandler, IEventHandler>
type OnceListeners = Map<unknown, OnceListener>;//Record<unknown, Record<any, any>>
export class EventDispatcher {

    private listenDomainMap:Map<unknown, ListenMap> = new Map()
    private listenMap:ListenMap = new Map<unknown, Listeners>()
    private onceListeners:OnceListeners = new Map<unknown, OnceListener>()
    addDomainEventListener<T extends IEventDispatcherEventMap>(domain: unknown, type: keyof T, cb: T[keyof T], index?: number): void {
        let _domain = this.listenDomainMap.get(domain);
        if(!_domain){
            _domain = new Map();
            this.listenDomainMap.set(domain, _domain);
        }
        let listeners = _domain.get(type);
        if(!listeners) {
            listeners = [];
            _domain.set(type, listeners)
        }
        if(listeners.indexOf(cb as IEventHandler) == -1) listeners.push(cb as IEventHandler);
        this.addEventListener(type, cb, index);
    }

    addDomainOnceListener<T extends IEventDispatcherEventMap>(domain: unknown, type: keyof T, cb: T[keyof T], index?: number): void {
        this.addOnceListener(type, cb, index, domain);
    }

    addEventListener<T extends IEventDispatcherEventMap>(type: keyof T, cb: T[keyof T], index?: number): void {
        if(type === ""){
            try{
                throw new Error("addDomainEventListener error no type")
            }catch (e){ console.log("EventDispatcher2","addDomainEventListener", "err", type, e) }
        }
        if(typeof cb != "function"){
            try{
                throw new Error("addDomainEventListener error no cb")
            }catch (e){ console.log("EventDispatcher2","addDomainEventListener", "err", cb, e) }
        }
        let listeners = this.listenMap.get(type);
        if(!listeners) {
            listeners = [];
            this.listenMap.set(type, listeners)
        }
        const _index = listeners.indexOf(cb as IEventHandler);
        if(_index > -1)
            listeners.splice(_index, 1);
        if(index == undefined || index < 0)
            index = listeners.length;
        index = Math.max(0, Math.min(index, listeners.length));
        listeners.splice(index, 0, cb as IEventHandler);
    }

    addEventListenerOnce<T extends IEventDispatcherEventMap>(type: keyof T, cb: T[keyof T], index?: number): T[keyof T] {
        return this.addOnceListener(type, cb, index, undefined);
    }

    private onceListenerCb <T extends IEventDispatcherEventMap>(type:keyof T, onEvent:T[keyof T], domain?:unknown) :T[keyof T]{
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const that = this;
        return function(...args:unknown[]){
            // onEvent(event);
            if(typeof onEvent === 'function'){
                onEvent(...args)
            }else{
                console.error(onEvent);
                console.log(...args);
                throw new Error("onEvent not a function")
            }
            // eslint-disable-next-line prefer-spread,@typescript-eslint/ban-types
            // (onEvent as Function).apply(null, args)
            // const listeners = that.onceListeners[type];
            const listeners = that.onceListeners.get(type);
            if(!listeners)return;
            if(domain)
                that.removeDomainEventListener(domain, type, listeners.get(onEvent as IEventHandler) as T[keyof T]);
            else
                that.removeEventListener(type, listeners.get(onEvent as IEventHandler) as T[keyof  T]);
        }.bind(this) as T[keyof T];
    }
    addOnceListener<T extends IEventDispatcherEventMap>(type:keyof T, onEvent:T[keyof T], index?:number, domain?:unknown):T[keyof T]{
        // let listeners = this.onceListeners[type];
        let listeners = this.onceListeners.get(type);
        if(!listeners) {
            listeners = new Map();
            this.onceListeners.set(type, listeners)
        }

        const fn = this.onceListenerCb<T>(type, onEvent, domain);
        listeners.set(onEvent as IEventHandler, fn as IEventHandler);
        domain ? this.addDomainEventListener(domain, type, fn, index) : this.addEventListener(type, fn, index);
        return fn;
    }

    dispatchArgs<T extends IEventDispatcherEventMap>(type: keyof T, ...rest: unknown[]): boolean {
        const listeners = this.listenMap.get(type)
        if(!listeners) return false;
        for(let i = 0, len = listeners.length; i < len; i ++){
            listeners[i].apply(null, rest);
        }
        return true;
    }

    dispatchEvent(event?: Event): boolean {
        if(!event || !event.type)return true;
        const listeners = this.listenMap.get(event.type);
        if(!listeners){
            return false;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        event[event._target] = this;
        for(let i = 0, len = listeners.length; i < len; i ++){
            if(event.canceled) return false;
            try{
                listeners[i](event);
            }catch (e){
                console.log("EventDispatcher2","dispatchEvent", "err", e) ;
                console.log("event is", event)
            }
        }
        return true;
    }

    removeDomain(domain: unknown): boolean {
        const domainMap = this.listenDomainMap.get(domain);
        if(!domainMap) return false;
        for(const type in domainMap){
            domainMap.get(type)?.forEach((cb:IEventHandler)=> {
                try{
                    this.removeEventListener(type as (keyof IEventDispatcherEventMap), cb);
                }catch (e){
                    console.log("eventdispatcher2","removedomain", "err", e)
                }
            }, this);
        }
        this.listenDomainMap.delete(domain);
        return true;
    }

    removeDomainEventListener<T extends IEventDispatcherEventMap>(domain: unknown, type: keyof T, cb: T[keyof T]): boolean {
        const domainMap = this.listenDomainMap.get(domain);
        if(!domainMap) return false;
        const listeners = domainMap.get(type);
        if(!listeners) return false;
        const index = listeners.indexOf(cb as IEventHandler);
        if(index == -1) return false;
        listeners.splice(index, 1);
        return this.removeEventListener(type, cb);
    }

    removeEventListener<T extends IEventDispatcherEventMap>(type: keyof T, cb: T[keyof T]): boolean {
        const listeners = this.listenMap.get(type);
        if(!listeners) return false;
        const index = listeners.indexOf(cb as IEventHandler);
        if(index == -1) {
            return false;
        } else {
            listeners.splice(index, 1);
            return true;
        }
    }

    willTrigger<T extends IEventDispatcherEventMap>(type: keyof T): boolean {
        const l = this.listenMap.get(type);
        return (!l || l.length == 0) ? false : true
        // return this.listenMap.get(type) !== undefined && this.listenMap.get(type)?.length > 0;
    }


}
