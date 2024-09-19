import {ulid} from "ulid";

let index = 0;
export function getGlobalIndex(){
    return ++index;
}
export function getUlid(){
    return ulid()
}
export function createGlobalId(){
    return `global-id-index-${getGlobalIndex()}`
}