import { Dispatch, SetStateAction, useState } from 'react';

const map = new WeakMap();

class Prop<U> {
    initType:string|undefined
    // map:WeakMap<Dispatch<SetStateAction<U>>, boolean> = new WeakMap<React.Dispatch<React.SetStateAction<U>>, boolean>();
    list:WeakSet<Dispatch<SetStateAction<U>>> = new WeakSet()
    l:WeakRef<Dispatch<SetStateAction<U>>>[] = []
    setValue =(v:U)=>{
        const l:WeakRef<Dispatch<SetStateAction<U>>>[] = [];
        this.l.forEach(ref=>{
            const setV = ref.deref();
            if(setV){
                try {
                    if(this.initType != undefined && v != undefined && v != null &&  Object.prototype.toString.call(v) != this.initType){
                        console.error("useDataBind prop value type not match", this.initType, v);
                        return;
                    }
                    setV(v);
                }catch (e){
                    console.log(`useDataBind Prop setValue initType ${this.initType}, nowType ${typeof v}, value ${v}`);
                    console.error('useDataBind Prop setValue error', e);
                }
                l.push(ref);
            }else{
                console.log("rrrrrrrrrrrrrrrrmoeved")
            }
        })
        this.l = l;
    }
}

export function useDataBind<T extends object, U>(data:T, key:keyof T, compareValueType:boolean = true){
    // const [value, setValue] = useState<T[keyof T]>(data[key]);
    const [value, setValue] = useState<U>(data[key] as U);
    let dataBind = map.get(data);
    if(!dataBind){
        console.log("no dataBind")
        dataBind = {};
        map.set(data, dataBind);
    }
    let property = dataBind[key];
    if(!property){
        console.log("property dataBind kyes ", Object.keys(dataBind))
        property = dataBind[key] = new Prop();
        if(compareValueType){
            switch (data[key]){
                case undefined:
                case null:
                    break;
                default:
                    // property.initType = typeof data[key];
                    property.initType = Object.prototype.toString.call(data[key])
            }
        }
    }
    const ref:WeakRef<Dispatch<SetStateAction<U>>> = new WeakRef(setValue)
    property.l.push(ref);
    return [value, property.setValue, ref] as const;
}
