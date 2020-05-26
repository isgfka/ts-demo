// ES没有抽象类的概念

abstract class Animal {
  eat () { // 子类可以继承
    console.log('eat');
  }
  // 抽象方法只能出现在抽象类中。ts(1244) !!!!!!!!!!!!!!
  abstract sleep (value: string | number): void // 定义抽象方法，明确知道子类可以有其他实现方法，就不需要在这里实现了
}

// let animal = new Animal(); // 无法创建抽象类的实例。ts(2511)


class Dog2 extends Animal {
  constructor(name?: string) {
    super();
  }
  sleep (value: string) {}
}

let dog2 = new Dog2();
dog2.sleep('1');



/**
 * 抽象类：可以抽离出代码的共性，有利于代码的复用和扩展。 也可以实现多态
 * 多态： 在父类中定义一个抽象方法，在多个子类中对这个方法有不同的实现，在程序运行的时候会根据不同的对象执行不同的操作，这样就实现了运行时的绑定
 */
class Cat2 extends Animal {
  constructor(name?: string) {
    super();
  }
  sleep (value: number) {}
}

let cat2 = new Cat2();
cat2.sleep(1123);



// 类的成员方法可以返回一个this，可以很方便的实现链式调用
class WorkFlow {
  step1 () {
    return this;
  }
  step2 () {
    return this;
  }
}
new WorkFlow().step1().step1();

class Myflow extends WorkFlow {
  next () {
    return this;
  }
}

new Myflow().next().step1().step2().next(); // 保持了父类和子类之间接口调用的连贯性