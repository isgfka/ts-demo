/**
 * 泛型参数只是另一个纬度的参数，是用来约束参数的类型的。与函数参数相似
 * 
 * 
 * 泛型函数：让一个函数能够灵活的支持任何类型，还有以下两种方法：
 * 1. 函数重载
 * 2. 联合类型
 * 3. any类型，丢失了类型之间的约束关系
 */

/**
 * 函数重载
 */
function log21(value: string): string;
function log21(value: string[]): string[];
function log21(value: any) {
  return value;
}
log21('2');

/**
 * 联合类型，函数的实现所定义的类型要比声明的类型宽泛
 */

function log3(value: string | string[]): number;
function log3(value: number): number;
function log3(value: any): string | number {
  return value;
}
log3(['2']);

/**
 * 泛型函数
 * 
 * 希望一个函数能够灵活的支持任何类型
 * 2. 联合类型
 */
function log4(value: string): string;
function log4(value: string[]): string[];
function log4(value: any) {
  return value;
}
log4('2');



// ============
// 以下是泛型
// ============

/**
 * 
 * 有了泛型，类型就像穿了变色龙的外衣，可以很友好的融入各种环境，这样代码的灵活性就大大增强了
 * 类型T不需要预先指定
 */
function log<T>(value: T): T {
  console.log(value);
  return value;
}

/**
 * 两种调用方式
 */

log<string[]>(['a', 'b']) // 直接指明T的类型
log(['a', 'b']) // 通过ts的类型推断



// ============
// 不仅可以通过泛型来定义一个函数，还可以定义一个函数类型别名
// ============


/**
 * 通过泛型定义一个函数类型别名 （把函数名称去掉即可），实现一个泛型函数的定义
 */

type Log2 = <T>(value: T) => T;
let myLog: Log2 = log; // 这样myLog就是一个泛型函数！！！！！




// ============
// 泛型应用于接口上
// ============


/**
 * 这只是约束了接口的函数
 */
interface Obj {
  <T>(value:T): T // 接口属性的描述，同样去掉属性名称
}

/**
 * 把<T>放在Obj后面，就是约束接口的所有成员
 * 当泛型变量约束了整个接口之后，就需要指定一个类型参数
 */

interface Obj2<T> { // 指定默认类型
  (value:T): T; // 接口属性的描述，同样去掉属性名称
}

let obj: Obj2<string> = value => {
  return value
};
// let obj: Obj2 = (value) => value;
// function log6 (value: number): any {
  
// }

// let myLog2: Obj2 = log6;

