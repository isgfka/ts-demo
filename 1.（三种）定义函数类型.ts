let add: (x: number, y: number) => number // 用变量 定义

// 用接口 定义
interface Add {
  (x: number, y: number): number
}

// 用 类型别名 定义
type add = (x: number, y: number) => number


// 混合接口
interface Lib {
  (): void;
  version: string;
  doSomething():void;
}


// let lib: Lib = () => {} // 还是报错，要用到类型断言 as，但是对全局暴露了一个变量lib，是一个单例
let lib: Lib = (() => {}) as Lib;

lib.version = '1.2.1';
lib.doSomething = () => {};


// ===============================

function getLib () {
  let lib: Lib = (() => {}) as Lib;

  lib.version = '1.2.1';
  lib.doSomething = () => {};
  return lib;
}