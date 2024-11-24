import { useAtom } from "jotai";
import { atomWithObservable } from "jotai/utils";
import { interval, Subject } from "rxjs";
import { map } from "rxjs/operators";

const counterSubject = interval(1000).pipe(map((i) => `#${i}`));
console.log('counterSubject', counterSubject)
const counterAtom = atomWithObservable(() => counterSubject);

export const Counter = () => {
  const [counter] = useAtom(counterAtom);
  return <div>count: {counter}</div>;
};

const sub = new Subject<string>();
sub.subscribe(observer=>{
    console.log('observer', observer)
})
sub.next('foo')
setTimeout(()=>{
    sub.next('bar')
},1000)