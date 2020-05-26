interface Human {
  name: string;
  eat (): void;
}


/**
 * 1. 类实现接口的时候必须实现接口中的声明的所有属性
 * 2. 接口只能约束类的公有成员
 */
class Asian implements Human { //  Property 'eat' is missing in type 'Asian' but required in type 'Human'.ts(2420)
  constructor (name: string) {
    this.name = name;
  }
  // private name: string; // 类“Asian”错误实现接口“Human”。属性“name”在类型“Asian”中是私有属性，但在类型“Human”中不是。ts(2420)
  name: string;
  eat () {}
}

/**
 * 接口的继承
 */

interface Man extends Human {
  run (): void;
}

interface Child {
  cry (): void;
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run () {},
  eat () {},
  cry () {}
  // Type '{}' is missing the following properties from type 'Boy': run, name, eat, cry ts(2739)
}

/**
 * 接口继承类，相当于接口把类的成员都抽象了出来，也就是只有类的成员结构，没有具体的实现
 */

class Auto {
  state = 1;
  // private state2 = 0; // 因为这个C不是Auto的子类，所以自然不包含Auto的私有成员，C错误的实现了AutoInterface这个接口
}

// 这样这个接口中就隐含了state属性
interface AutoInterface extends Auto {

}

class C implements AutoInterface {
  //  Property 'state' is missing in type 'C' but required in type 'AutoInterface'.ts(2420)
  state = 1;


  //  Property 'state2' is missing in type 'C' but required in type 'AutoInterface'.ts(2420)
  // 因为这个C不是Auto的子类，所以自然不包含Auto的私有成员，C错误的实现了AutoInterface这个接口
  // ![implements的时候只会继承public](image/2020-05-26-23-22-07.png);

}


/**
 * Auto 的子类也可以实现AutoInterface这个接口
 */

class Bus extends Auto implements AutoInterface {
  // 这里就不必定义state了，因为Bus是Auto的子类，自然就继承了属性state。
  // 接口在抽离类成员的时候，不仅抽离了公共成员，还抽离了私有成员和受保护成员 ！！！！
}