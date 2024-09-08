import { PropsIn } from '../ts/global.index';

export type TypeReducerAction<T> = { type: 'update' | keyof T; data: PropsIn<T> };

export type TypeReducerActionTypeFunctionMap<T> = Record<keyof T, (o: PropsIn<T>) => void>;

export type TypeReactChildren = string | React.ReactNode;

// declare type TypeReducerAction<T> = {type:"update" | keyof T, data:PropsIn<T>}
//
// declare type TypeReducerActionTypeFunctionMap<T> = Record<keyof T, (o:PropsIn<T>) => void>
