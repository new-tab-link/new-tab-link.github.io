import {PropertyChangeEvent} from "./PropertyChangeEvent";

export function dispatchPropertyChangeEvent(newValue:unknown, propertyName:string, owner:any, eventName:string, checkIsSame:boolean){
  if(checkIsSame){
    if(owner[propertyName] == newValue)return;
  }
  const oldValue = owner[propertyName]
  owner[propertyName] = newValue;
  const event = new PropertyChangeEvent(eventName, oldValue, newValue, PropertyChangeEvent.kindUpdate);
  const bl = owner.dispatchEvent(event);
}
