import { autobind } from "core-decorators";
import { IAnchor } from "./IAnchor";

@autobind
export class Anchor implements IAnchor{
    private _anchor:string = ''
    scrollToView(anchor:string){
        const elem =document.querySelector(`#${anchor}`)
        console.log('elem', elem, `#${anchor}`)
        if(!elem)return;
        elem.scrollIntoView({behavior:"smooth", block:"start"})
        setTimeout(() => {
            window.location.hash = anchor
            console.log('hash', anchor)
        }, 1000 * 1.3);
    }
    setAnchor(anchor:string){
        console.log('anchor is', anchor)
        this._anchor = anchor
        this.scrollToView(anchor)
    }
    initAnchor(){
        if(!window.location.hash)return
        this.setAnchor(window.location.hash.replace('#', ''))
    }
}