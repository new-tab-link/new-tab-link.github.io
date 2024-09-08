
export function wordFirstToUpperCase(s:string):string{
    return s.replace(/( |^)[a-z]/, (L) => L.toUpperCase());
}