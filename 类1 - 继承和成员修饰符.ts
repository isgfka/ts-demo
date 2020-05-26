class Dog {
  constructor (name: string) {
    // this.name = name;
  }
  name: string = 'dog1'; // 可以设置初始值
  run (value:number) {};
  private private () {};
  protected protected () {};
  // readonly legs: number; // 只读属性一定要初始化
  readonly legs: number = 4;
  static food: string = 'bones'; // 静态属性只能通过类名来调用，不能通过实例来调用 !!!!!!!
}
console.log(Dog.prototype);
let dog = new Dog('wangwang');
console.log(dog.legs);
dog.run(1);

// console.log('Dog.food', dog.food); // Property 'food' is a static member of type 'Dog'ts(2576)
console.log('Dog.food', Dog.food);
console.log('dog.name', dog.name);
// dog.legs = 2; // Cannot assign to 'legs' because it is a read-only property.ts(2540)
// dog.protected(); // 属性“protected”受保护，只能在类“Dog”及其子类中访问。ts(2445)

class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
    // this.private(); // 属性“private”为私有属性，只能在类“Dog”中访问。ts(2341)
    // dog.protected(); // 属性“protected”受保护，只能通过类“Husky”的实例访问。ts(2446)
    this.protected();
  }
  color: string = '123';
}
console.log('Husky.food', Husky.food); // 类的静态成员可以被继承
// public / private / static / readOnly
