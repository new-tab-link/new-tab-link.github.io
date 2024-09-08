import { Dispatch } from 'react';
import { Log } from '../../log/Log';
import _ from 'lodash';
import { PropsIn } from '../../ts/global.index';
import { autobind } from 'core-decorators';
export type ControllerAction<T> = { type: 'update' | 'merge'; data: PropsIn<T> };

export interface IControllerContextBase {
  isInitialized: boolean;
  isLoadingData: boolean;
}
type IListener = () => void;
let count = 0;
@autobind
export class Controller<T extends IControllerContextBase> {
  // constructor() {
  //   console.log('Controller create', this.classIndex, count);
  // }
  classIndex = ++count;
  log = new Log(`ControllerCls${this.classIndex}`);
  dispatch!: Dispatch<ControllerAction<T>>;
  context!: T;
  tempContext?: PropsIn<T>;
  controller = this;
  private listeners: IListener[] = [];
  buildData?: () => T;
  async loadAsync() {}
  subscribe = (listener: IListener) => {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index == -1) return;
      this.listeners.splice(index, 1);
    };
  };
  getSnapshot(): T {
    return this.buildData?.() || this.context;
  }
  emitChange() {
    for (const listener of this.listeners) {
      listener();
    }
  }
  reducer(draft: T, action: ControllerAction<T>) {
    const log = this.log.sub(false, 'reducerFn');
    log.pause = true;
    this.tempContext = undefined;
    // const log = new Log(false,'hrefsetting.controller.reducer' + this.classIndex);
    // log.pause = true
    log.print(`this..tempContext`, this.tempContext);
    log.print(`action.type=`, action.type);
    log.print(`action.data=`, JSON.stringify(action.data));
    log.print(`draft=`, JSON.stringify(draft));
    switch (action.type) {
      case 'update':
        for (const key in action.data) {
          draft[key] = action.data[key] as T[typeof key];
        }
        // const res = {...draft, ...action.data}
        if ('hrefList' in action.data) {
          // log.print('hrefListres=', res);
          log.print('hrefListres22=', this.classIndex, JSON.stringify(this.context));
        }
        // return res
        break;
      case 'merge':
        _.merge(draft, action.data);
        break;
      default:
        throw new Error(`reducer unknown type ${action.type}`);
    }
    return void 0;
  }
  act(action: ControllerAction<T>) {
    this.dispatch(action);
  }
  update(data: PropsIn<T>) {
    const log = this.log.sub(false, `update`);
    log.pause = true;
    log.print('conroller update', this.classIndex, data);
    this.dispatch({ type: 'update', data });
  }
  merge(data: PropsIn<T>) {
    const log = this.log.sub(false, `mergeFn`);
    log.pause = true;
    log.log(`data`, data);
    this.dispatch({ type: 'merge', data });
  }
  private _destroyed = false;
  get destroyed() {
    return this._destroyed;
  }
  destroy() {
    this._destroyed = true;
    this.log.log(`controller destroyed index=${this.classIndex}, constructor=${this.constructor.name}`);
  }
  removeListeners() {}
}
