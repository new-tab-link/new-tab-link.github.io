
import {Event} from "./Event";

export class DataEvent<T> extends Event{
  public data?: T;

  constructor(type:unknown, data?:T, cancelable = false) {
    super(type, cancelable);
    this.data = data;
    // this[this._target] = null;

  }


}