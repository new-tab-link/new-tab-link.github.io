

export function watchChange2(callback) {
    var cachedValueKey = Symbol();
    var isFirstChangeKey = Symbol();
    return function (target, key) {
        var callBackFn = typeof callback === 'string' ? target[callback] : callback;
        if (!callBackFn) {
            throw new Error("Cannot find method " + callback + " in class " + target.constructor.name);
        }


        let descriptor = arguments[2];
        console.log("descriptor is", descriptor)
        let value = ("initializer" in descriptor) ? descriptor.initializer() : descriptor.value;
        if(!("get" in descriptor)){
            descriptor.get = function (){
                console.log("get v from first", value)
                return value;
            }
        }
        if(!("set" in descriptor)){
            descriptor.set = function (v){
                value = v;
            }
        }

        // let get = descriptor.get.bind(target)
        let obj = {
            get:function (){
                let v = descriptor.get.bind(this)()
                console.log("vvvvvvvvvvvv", v);
                return v;
            },
            set:function (v){
                let old = target[key];
                console.log("this is22", this);
                let set = descriptor.set.bind(this)
                set(v);
                callBackFn.call(this, v, old);
            }
        }
        let res = Object.defineProperty(target, key, obj);
        console.log("res is", res)
        return res;
        let v = descriptor.initializer();
        delete descriptor.initializer;
        delete descriptor.writable;
        descriptor.get = function (){return v}
        descriptor.set = function (d){
            let old = v;
            v = d;
            callBackFn.call(this, v, old);
        }

        return descriptor;


        let o = {
            set: function (value) {
                var _this = this;
                // change status of "isFirstChange"
                this[isFirstChangeKey] = this[isFirstChangeKey] === undefined;
                // No operation if new value is same as old value
                if (!this[isFirstChangeKey] && this[cachedValueKey] === value) {
                    return;
                }
                var oldValue = this[cachedValueKey];
                this[cachedValueKey] = value;
                var simpleChange = {
                    firstChange: this[isFirstChangeKey],
                    previousValue: oldValue,
                    currentValue: this[cachedValueKey],
                    isFirstChange: function () { return _this[isFirstChangeKey]; },
                };
                callBackFn.call(this, this[cachedValueKey], simpleChange);
            },
            get: function () {
                return this[cachedValueKey];
            },
            // configurable: true,
        }
        return Object.defineProperty(target, key, o);
        // return o;
    };
}