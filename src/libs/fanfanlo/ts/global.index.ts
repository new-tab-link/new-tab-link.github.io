export type PropsIn<T> = { [key in keyof T]?: T[key] };
export type TypePropsUpdateType = 'update' | 'del' | 'set';
export type TypePropsUpdateDel<T> = (type: 'del', keys: [keyof T]) => void;
export type TypePropsUpdateUpdateSet<T> = (updateType: TypePropsUpdateType, props: PropsIn<T>) => void;
export type TypeOnPropsUpdate<T> = TypePropsUpdateUpdateSet<T>;

export interface IMap {
  [key: string | symbol]: any;
}
