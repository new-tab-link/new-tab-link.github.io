import { autobind } from "core-decorators";
import { Log } from "../../log";
import { IAnchor } from "./IAnchor";
const lg = new Log(false, 'Anchor')
lg.pause = true
@autobind
export class Anchor implements IAnchor{
    private _anchor:string = ''
    scrollToView(anchor:string){
        const elem =document.querySelector(`#${anchor}`)
        lg.log('elem', elem, `#${anchor}`)
        if(!elem)return;
        elem.scrollIntoView({behavior:"smooth", block:"start"})
        setTimeout(() => {
            window.location.hash = anchor
            lg.log('hash', anchor)
        }, 1000 * 1.3);
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