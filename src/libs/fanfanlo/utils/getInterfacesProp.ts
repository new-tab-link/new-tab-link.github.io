

import { PropsIn } from "../ts/global.index";

export function getValue<T, K extends keyof T>(key: K, ...rest: PropsIn<T>[]) {
  const res: { has: boolean; v?: T[K] } = { has: false, v: undefined };
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] === undefined) continue;
    if (!(key in rest[i])) continue;
    res.has = true;
    if (rest[i][key] !== undefined) res.v = rest[i][key];
  }
  return res;
}

// function example(){
//   interface Example{
//     a:string
//     b:boolean
//   }
//   const e:Example = {a:'a', b:false}
//   const res = getValue('a', e)
//   console.log(res.v, res.has);
// }
