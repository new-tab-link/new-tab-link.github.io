import { Anchor } from "@src/libs/fanfanlo/html/anchor/Anchor";
import { createStore } from "@src/libs/fanfanlo/react/hooks/externalstore/SyncExternalStore";
import { use, useSyncExternalStore } from "react";

const anchor = new Anchor()
const anchorStore = createStore(anchor.getData())
anchor.anchorStore = anchorStore
export function useAnchor(){
    return useSyncExternalStore(anchorStore.subscribe, anchorStore.getSnapshot)!
}

export const indexModel = {
    anchor,
    anchorStore,
    useAnchor
}