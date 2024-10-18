
export type TypeSetAnchor = (anchor:string)=>void

export interface IAnchor {
    // setAnchor(anchor:string):void
    setAnchor:TypeSetAnchor
    initAnchor():void
}

