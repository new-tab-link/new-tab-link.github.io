import _ from "lodash";

var isDOM =
    typeof HTMLElement === 'object'
        ? function(dom) {
            return dom instanceof HTMLElement;
        }
        : function(dom) {
            return dom && typeof obj === 'object' && obj.nodeType === 1 && typeof 	obj.nodeName === 'string';
        };
export function isSimpleValue(v){
    switch (v){
        case undefined:
        case null:
        case _.isDate(v):
        case _.isBoolean(v):
        case _.isInteger(v):
        case _.isNaN(v):
        case _.isNull(v):
        case _.isNumber(v):
        case _.isSymbol(v):
        case _.isString(v):
            return true;
        default:
            return false;
    }
}

export function isConsulePrintable(v){
    let isSimple = isSimpleValue(v);
    if(isSimple)return true;
    if(isDOM(v))return true;
    return false;
}
