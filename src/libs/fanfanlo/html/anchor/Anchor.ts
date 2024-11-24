import { autobind } from "core-decorators";
import { Log } from "../../log";
import { IAnchor } from "./IAnchor";
import { ISyncExternalStore, SyncExternalStore } from "../../react/hooks/externalstore/SyncExternalStore";
import { atom } from "jotai";
import { store } from "../../jotai/store";

const lg = new Log(false, 'Anchor')
lg.pause = true
export interface IAnchorData{
    anchor:string
    setAnchorComplete:boolean
    animationTriggered:boolean
}
@autobind
export class Anchor implements IAnchor, IAnchorData{
    getData():IAnchorData{
        return {
            anchor:this._anchor,
            setAnchorComplete:this.setAnchorComplete,
            animationTriggered:this._animationTriggered
        }
    }
    anchorStore?:ISyncExternalStore<IAnchorData|undefined>
    private _laterId:number = -1
    private _anchor:string = ''
    get anchor(){
        return this._anchor
    }
    readonly atomAnchor = atom('')
    setAnchorComplete = false
    private _setAnchorTime:number = 0
    private _animationTriggered:boolean = false
    get animationTriggered(){
        return this._animationTriggered
    }
    set animationTriggered(value:boolean){
        this._animationTriggered = value
        this.anchorStore?.updateSnapshot(this.getData())
    }
    private laterCheckElement(anchor:string){
        const elem = document.querySelector(`#${anchor}`)
        if(!elem){
            if(Date.now() - this._setAnchorTime > 1000 * 3){
                return;
            }
            setTimeout(() => {
                this.laterCheckElement(anchor)
            }, 100 * 1);
            return;
        }
        elem.scrollIntoView({behavior:"smooth", block:"start"})
        setTimeout(() => {
            this.setHash(anchor)
            // window.location.hash = anchor
            // this.setAnchorComplete = true
            // that.anchorStore?.updateSnapshot(this.getData())
        }, 1000 * 1.3);
    }
    setHash(anchor:string){
        if(this.anchor !=  anchor)return;
        window.location.hash = anchor
        if(this.setAnchorComplete)return;
        this.setAnchorComplete = true
        this.anchorStore?.updateSnapshot(this.getData())
    }
    private clearLaterCheckElement(){
        clearTimeout(this._laterId)
        this._laterId = -1
    }
    private scrollToView(anchor:string){
        this.clearLaterCheckElement()
        this._setAnchorTime = Date.now()
        this.laterCheckElement(anchor)
    }
    setAnchor(anchor:string){
        this._anchor = anchor
        store.set(this.atomAnchor, anchor)
        this.animationTriggered = false
        this.setAnchorComplete = false
        this.anchorStore?.updateSnapshot(this.getData())
        this.scrollToView(anchor)
    }
    initAnchor(){
        lg.log('initAnchor', window.location.hash)
        if(!window.location.hash)return
        lg.log('initAnchor', window.location.hash.replace('#', ''))
        this.setAnchor(window.location.hash.replace('#', ''))
    }
}

