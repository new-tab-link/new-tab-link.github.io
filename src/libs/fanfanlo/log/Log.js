'use client'
import { isConsulePrintable } from '../utils/lodash';
import { EventDispatcher } from '../events/EventDispatcher';
import { DataEvent } from '../events/DataEvent';
import { formatDate } from '../utils/utils';
import _ from 'lodash';

let logIndex = 0;
let colorsIndex = 0;
const colors = [
  '#f1581f',
  '#003366',
  '#990033',
  '#663366',
  '#CCCC99',
  '#CC9999',
  '#003300',
  '#8cc540',
  '#009f5d',
  '#019fa0',
  '#019fde',
  '#ff1244',
  '#ff8345',
];
export class Log {
  // static isInApp = navigator ? navigator.userAgent.indexOf('droid-lego-android----------') > -1 : false;
  static isInApp = false
  // static isInApp = typeof window != undefined && window.navigator ? window.navigator.userAgent.indexOf('droid-lego-android----------') > -1 : false;
  static eventWarnAdd = 'warnAdd';
  static eventErrorAdd = 'errorAdd';
  static dispatcher = new EventDispatcher();
  static warnList = [];
  static errorList = [];
  static logStoreMaxLength = 100;
  static addWarn = s => {
    Log.addLog(Log.warnList, s, Log.eventWarnAdd);
  };
  static addError = s => {
    Log.addLog(Log.errorList, s, Log.eventErrorAdd);
  };
  static addLog = (list, s, event) => {
    if (list.length > Log.logStoreMaxLength) {
      list.shift();
    }
    s = `${formatDate(new Date(), 'DD HH:MM:SS')}`;
    list.push(s);
    Log.dispatcher.dispatchEvent(new DataEvent(event, list));
  };
  static forbidden = [];
  static allowed = [];
  constructor(paused, ...prefixies) {
    this.prefixies = prefixies;
    this.prefix = prefixies.join(' ');
    this.isPaused = !!paused;
    this.globalIndex = logIndex++;
    this.index = 0;
    this.parent = null;
    this.isChildrenPaused = false;
    this.isForcePrint = false;
    this.color = colors[colorsIndex++ % colors.length];
    this.logger = this;
  }
  static countMap = new Map();
  static createCountedLogger = (paused, name, ...prefixies) => {
    let v = Log.countMap[name] || 0;
    v++;
    Log.countMap[name] = v;
    let prefix = `${name} ${v}`;
    let arr = prefixies.concat(prefix);
    let log = new Log(paused, ...arr);
    log.index = v;
    return log;
  };
  sub = (paused, name) => {
    let log = Log.createCountedLogger(paused, `${name}`, ...this.prefixies);
    log.parent = this;
    return log;
  };
  set forcePrint(p) {
    this.isForcePrint = !!p;
  }
  get forcePrint() {
    return this.isForcePrint;
  }
  set pause(p) {
    this.isPaused = !!p;
  }
  get pause() {
    return this.isPaused;
  }
  set childrenPaused(p) {
    this.isChildrenPaused = !!p;
  }
  get childrenPaused() {
    return this.isChildrenPaused;
  }
  get canPrint() {
    if (this.isForcePrint) return true;
    if (this.isPaused) return false;
    let p = this.parent;
    while (p) {
      if (p.isChildrenPaused) return false;
      p = p.parent;
    }
    return true;
  }
  warn = (...args) => {
    let arr = this.print.apply(this, args);
    Log.addWarn(arr.join(' '));
  };
  error = (...args) => {
    let arr = this.print.apply(this, args);
    Log.addError(arr.join(' '));
  };
  print = (...args) => {
    if (!this.canPrint) return;
    let l = this;
    let retArray = [];
    let arr = [];
    let format = '';
    format = this.loopParent(l, arr, l => l.globalIndex, format);

    arr.unshift('@');
    if (!Log.isInApp) {
      format += '%c%s ';
      arr.unshift('color:#000000;font-weight: bold;');
    }

    format = this.loopParent(l, arr, l => l.index, format);

    if (!Log.isInApp) {
      format += '%c%s ';
      arr.push('color:#000000;font-weight: bold;');
    }
    if (Log.isInApp) {
      for (let i = 0; i < args.length; i++) {
        if (!isConsulePrintable(args[i])) {
          try {
            const o = args[i];
            let v = '';
            if (_.isError(o)) {
              v = o.message + '\n' + o.stack;
            } else {
              v = JSON.stringify(args[i]);
              // chrome扩展不允许eval所以这里做一下临时处理
              // v = JSON.stringify(jc.decycle(args[i]));
            }
            args[i] = v;
          } catch (e) {
            console.log('log print json stringify error', e);
            console.log('log print json stringify error stack is', e.stack);
          }
        }
      }
    }
    arr.push(this.prefix);
    arr = arr.concat(args);
    console.log(format, ...arr);
    retArray = [].concat(arr);
    return retArray;
  };
  log = this.print.bind(this);
  loopParent = (l, arr, fn, format) => {
    while (l) {
      arr.unshift(fn(l));
      if (!Log.isInApp) {
        format += '%c%s ';
        arr.unshift(`color:${l.color};font-weight: bold;`);
      }
      l = l.parent;
    }
    return format;
  };
}

export function createLogger(clazz) {
  const log = Log.createCountedLogger(false, clazz.name);
  clazz.prototype._log = log;
  clazz.prototype._print = log.print;
  return clazz;
}
