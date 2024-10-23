import { autobind } from "core-decorators";
import _ from "lodash";

export interface ISyncExternalStore<T> {
    // tryGetSnapshot(): T | undefined;
    getSnapshot(): T;
    updateSnapshot(data: T): void;
    subscribe(listener: () => void): () => void;
}

@autobind
export class SyncExternalStore<T> implements ISyncExternalStore<T> {
    private _snapshot?: T ;
    constructor(snapshot?: T){
        this._snapshot = snapshot;
        this.getSnapshot.bind(this)
        this.updateSnapshot.bind(this)
        this.subscribe.bind(this)
        this.unsubscribe.bind(this)
        this.notify.bind(this)
    }
    tryGetSnapshot(): T | undefined {
        return this._snapshot;
    }
    getSnapshot(): T {
        return this._snapshot!;
    }
    updateSnapshot(data: T | undefined): void {
        this._snapshot = data;
        this.notify();
    }
    private listeners: (() => void)[] = [];
    subscribe(listener: () => void): () => void {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }
    unsubscribe(listener: () => void): void {
        this.listeners = this.listeners.filter(l => l !== listener);
    }
    private notify(): void {
        console.log('notify2222', this._snapshot, this.listeners)
        this.listeners.forEach(listener => listener());
    }
}
export function createStore<T>(snapshot?:T):ISyncExternalStore<T|undefined>{
    let _snapshot = snapshot;
    const getSnapshot = ()=>_snapshot;
    const updateSnapshot = (data:T)=>{
        _snapshot = data;
        notify();
    }
    let listeners: (()=>void)[] = [];
    const subscribe = (listener:()=>void)=>{
        listeners.push(listener);
        return ()=>{
            listeners = listeners.filter(l=>l!==listener);
        }
    }
    const notify = ()=>{
        listeners.forEach(listener => listener());
    }
    return {getSnapshot, updateSnapshot, subscribe}
}
