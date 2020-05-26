class Log<T> {
  // 泛型不能应用与类的静态成员 ！！！
  // static run(value: T) { ❌
  run(value: T) {
    console.log(value);
    return value;
  }
}
let log1 = new Log<number>()
log1.run(1);

let log2 = new Log()
log2.run('1');


/**
 * 泛型函数继承接口
 * 当使用到了value: T的一个未声明的属性length时，可以使用这种方法
 */
interface Length {
  length: number
}

function log<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}

log([1]);
// log(1) // ❌ 没有length属性
log('1');