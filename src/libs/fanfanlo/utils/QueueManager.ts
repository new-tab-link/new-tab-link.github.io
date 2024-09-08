import {EventDispatcher} from "../events/EventDispatcher";
import {DataEvent} from "../events/DataEvent";

export interface onQueueMemberComplete{
  (...args:any):void
}
export interface queueMember{
  (onComplete:onQueueMemberComplete):void
};
export class QueueManager extends EventDispatcher{
  static Events = {
    complete:"complete",
    oneLoaded:"oneLoaded",
  }
  private list:queueMember[] = [];
  private _isRunning = false;
  get isRunning():boolean{
    return this._isRunning;
  }
  add = (member:queueMember)=>{
    this.list.push(member);
    this.check();
  }
  check =()=>{
    if(this.isRunning)return;
    if(this.list.length == 0)return;
    this._isRunning = true;
    const member = this.list.shift();
    if (member) {
      member(this.onComplete)
    }else{
      this._isRunning = false;
      this.check();
    }
  }
  onComplete =(...args:any)=>{
    try{
      this.dispatchOneLoaded(args)
      if(this.list.length == 0){
        this.dispatchComplete();
      }
    }catch (e){
      console.log("queuemanager load error", e);
    }
    this._isRunning = false;
    this.check();
  }
  dispatchOneLoaded =(args:any[])=>{
    const event = new DataEvent(QueueManager.Events.oneLoaded, args);
    this.dispatchEvent(event);
  }
  dispatchComplete =()=>{
    this.dispatchEvent(new DataEvent(QueueManager.Events.complete))
  }
}
