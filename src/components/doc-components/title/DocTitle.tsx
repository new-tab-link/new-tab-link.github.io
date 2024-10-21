import { PropsWithChildren } from "react";


export function DocTitle({children,anchor}:{anchor?:string}&PropsWithChildren){
    return <h2 id={anchor}>{children}</h2>
}
