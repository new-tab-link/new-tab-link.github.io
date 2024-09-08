// // import {createGlobalId} from "#/libs/fanfanlo/react/globalKey";
// import React, {memo, useCallback, useReducer, useState} from "react";
// import {useDataBind} from "./useDataBind";
// import {createGlobalId} from "../../globalKey";
// // import {useDataBind} from "./useDataBind";
// // import {createGlobalId} from "../../globalKey";

// interface IData{
//     index:number
//     text:string
// }
// interface IProps{
//     data:IData
// }

// const gData = {index:1, text:"hello"}
// function SharedText({data}:IProps){
//     console.log("create sharedText", data === gData)
//     // const [index, setIndex, indexRef] = useDataBind(data,  "index");
//     const [text, setText, textRef] = useDataBind(data, "text")
//     return (
//         <div>
//             {/*<span>index is {index}</span>*/}
//             <span>text is {text}</span>
//         </div>
//     )
// }

// function Form({data}:IProps){
//     console.log("createFormFn")
//     // const [index, setIndex, indexRef] = useDataBind(data,  "index");
//     const [text, setText, textRef] = useDataBind(data, "text")
//     return(
//         <div>
//             <form>
//                 {/*<label >*/}
//                 {/*    <input type={"number"} value={index} onChange={(e)=>setIndex(Number(e.target.value))}/>*/}
//                 {/*</label>*/}
//                 <label>
//                     <input type={"text"} value={text} onChange={(e)=>setText(e.target.value)}/>
//                 </label>
//             </form>
//         </div>
//     )
// }

// const key1 = createGlobalId();
// export function CreateUseDataBindTestContainer(){
//     console.log("CreateUseDataBindTestContainerFn3");
//     return <Test2 />
//     const C = memo(Test2);
//     return <C />
//     // return Test2();
//     const data:IData = gData;
//     const [show, setShow] = useState(true);

//     return(
//         <div>
//             {show && <SharedText data={data} key={key1}/>}
//             <SharedText data={data} key={createGlobalId()}/>
//             <Form data={data} key={createGlobalId()} />
//             <button onClick={()=>setShow(!show)}>toggle</button>
//         </div>
//     )
// }

// const Test2 = (()=>{
//     interface IDataChild {
//         count:number
//     }
//     interface IData {
//         name:string
//         index:number
//         child:IDataChild
//     }
//     type Action = {type:"add"} | {type:"name", name:string}
//     const data:IData = {name:"a", index:1, child:{count:0}}
//     function reducer(state:IData, action:Action):IData{
//         switch (action.type){
//             case "add":
//                 data.index++
//                 data.child.count ++;
//                 return {...state, index:data.index}
//         }
//         throw new Error("x")
//     }

//     const Button = memo(({ onClick }:{onClick:()=>void}) => {
//         console.log("child render");
//         return <button onClick={onClick}>Increase43</button>;
//     });
//     function App(){
//         const [state, dispatch] = useReducer(reducer, data)
//         console.log("render reducer2", data.index, data == state, state.child.count, state.child == data.child);
//         const onClick = useCallback(()=>{
//             dispatch({type:"add"})
//         },[])
//         return (
//             <div>
//                 <div>reducer index is {state.index}</div>
//                 {/*<div><button onClick={()=>dispatch({type:"add"})}>add</button> </div>*/}
//                 <Button onClick={onClick}/>
//             </div>
//         )
//     }
//     let X = memo(App)
//     console.log('xxxx', X);
//     return  X;
//     return App;
// })();
