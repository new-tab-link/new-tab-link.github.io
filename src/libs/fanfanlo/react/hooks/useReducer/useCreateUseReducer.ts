import { TypeReducerAction } from '../../global.index';
import { useReducer } from 'react';

export function useCreateUseReducer<T>(data:T){
    function reducer(state:T, action:TypeReducerAction<T>){
        console.log("reducer state", state);
        console.log("reducer action", action);
        switch (action.type){
            case "update":
                return {...state, ...action.data}
        }
        throw new Error(`unknow TypeReducerAction.type,${action.type.toString()}`)
    }
    return useReducer(reducer, data)
}

