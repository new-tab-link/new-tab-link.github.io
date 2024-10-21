import { autobind } from "core-decorators";
import { Log } from "../../log";
import { IAnchor } from "./IAnchor";

const lg = new Log(false, 'Anchor')
lg.pause = true

@autobind
export class Anchor implements IAnchor{
    private _laterId:number = -1
    private _anchor:string = ''
    private _setAnchorTime:number = 0
    private _animationTriggered:boolean = false
    get animationTriggered(){
        return this._animationTriggered
    }
    set animationTriggered(value:boolean){
        this._animationTriggered = value
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
            window.location.hash = anchor
            lg.log('hash', anchor)
        }, 1000 * 1.3);
    }
    private clearLaterCheckElement(){
        clearTimeout(this._laterId)
        this._laterId = -1
    }
    scrollToView(anchor:string){
        this.animationTriggered = false
        this.clearLaterCheckElement()
        this._setAnchorTime = Date.now()
        this.laterCheckElement(anchor)
        // const elem =document.querySelector(`#${anchor}`)
        // lg.log('elem', elem, `#${anchor}`)
        // if(!elem)return;
        // elem.scrollIntoView({behavior:"smooth", block:"start"})
        // setTimeout(() => {
        //     window.location.hash = anchor
        //     lg.log('hash', anchor)
        // }, 1000 * 1.3);
    }
    setAnchor(anchor:string){
        console.log('anchor is', anchor)
        this._anchor = anchor
        this.scrollToView(anchor)
    }
    initAnchor(){
        lg.log('initAnchor', window.location.hash)
        if(!window.location.hash)return
        lg.log('initAnchor', window.location.hash.replace('#', ''))
        this.setAnchor(window.location.hash.replace('#', ''))
    }
}