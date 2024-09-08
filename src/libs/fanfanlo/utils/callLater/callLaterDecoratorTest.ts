import {callLaterDecorator, queueMicroTaskDecorator} from "./callLaterDecorator";
import {autobind} from "core-decorators";

export function testQueueMicroTaskDecorator() {
    class A {
        @queueMicroTaskDecorator()
        printLogs(...args:unknown[]) {
            console.log("micro task received msg", ...args)
        }

        @queueMicroTaskDecorator(true)
        printLogs2(...args:unknown[]) {
            console.log("micro task received 2 msg", ...args)
        }
    }

    const a = new A();
    a.printLogs("only show 1 time even if they are different")
    a.printLogs("only show 1 time")
    a.printLogs("only show 1 time")
    a.printLogs("only show 1 time")
    a.printLogs2("repeat1")
    a.printLogs2("repeat2")
    a.printLogs2("repeat3")

}


export function testCallLaterDecoratro(){

    // bind会把方法生成getter setter放到原型链上，具体流程没看懂，
    // 现在只是测试出bind类可以，
    // bind函数会导致其它装饰器获得一个没有value，但是有gster的装饰器
    @autobind
    class A{
        name = "a"

        @callLaterDecorator(1000 * 1)

        printLogs(...args: any) {
            console.log("call later received msg", this, ...args)
        }

        @callLaterDecorator(1000 * 1, true)
        printLogs2(...args: any) {
            console.log("call later received 2 msg", this.name,  ...args)
        }
    }
    let a = new A();
    a.printLogs("only show 1 time even if they are different")
    a.printLogs("only show 1 time")
    a.printLogs("only show 1 time")
    a.printLogs("only show 1 time")
    a.printLogs2("repeat1")
    a.printLogs2("repeat2")
    a.printLogs2("repeat3")
    setTimeout(()=>{
        a.printLogs("only show 2 time")
    }, 1000 * 2);
    setTimeout(()=>{
        a.printLogs2("repeat4")
    }, 1000 * 2);
    setTimeout(a.printLogs, 1000 * 2, "xx");
}