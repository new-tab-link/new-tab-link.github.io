import _ from "lodash";

export class Event{
    public type: unknown;
    public cancelable: boolean;
    public canceled: boolean;
    public _target: string = "Event.target";
    constructor(type:unknown, cancelable = false) {
        this.type = type;
        this.cancelable = cancelable;
        this.canceled = false;
    }
    get target() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return this[this._target];
    }

    toString() {
        const res = {};
        _.each(Object.keys(this), (key) => {
            if (key === 'data') {
                // console.log('key is ', key, this[key])
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            res[key] = this[key]
        });
        return res;
    }
}