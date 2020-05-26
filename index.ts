// let createdByNewBoolean: boolean = new Boolean(1);
/**
 * 必选参数
 * @param params 
 */
// function run (params:Array<number|string>):void {
//   console.log(params);
// }

// run([]);
// let a:any[] = ['123'];


/**
 * 可选参数必须放在必选参数后面
 * @param params 
 */
// function run (number:number, params?:Array<any>) {
//   console.log(1);
// }
// run(12)


/**
 * 默认参数
 * @param params 
 */
// function run(params:string = '1'):void {
//   console.log('字符串', params);
// }
// function run (params:number = 2):void {
//   console.log('数字', params)
// }



/**
 * 函数重载，确切的说，只检查输入的参数符不符合要求。
 * 前面两个是函数的声明，最后一个是实现。
 * 在调用函数的时候会去判断是否符合声明中的其中一个，顺序又上到下。
 * @param x 
 */

// let suits = ["hearts", "spades", "clubs", "diamonds"];
// function pickCard(x: {suit: string; card: number; }[]): number;
// function pickCard(x: number): {suit: string; card: number; };
// function pickCard(x: any): any {
//     // Check to see if we're working with an object/array
//     // if so, they gave us the deck and we'll pick the card
//     if (typeof x == "object") {
//         let pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }
//     // Otherwise just let them pick the card
//     else if (typeof x == "number") {
//         let pickedSuit = Math.floor(x / 13);
//         return { suit: suits[pickedSuit], card: x % 13 };
//     }
// }

// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);



interface Animal1 {
  name1: string
}

/**
 * 接口继承接口
 */
// interface Animal2 {
//   name2: string
// }
// interface Animal3 extends Animal1, Animal2 {
//   name3: string
// }

// class Dog implements Animal3 {
//   name1: string;
//   name2: string
//   name3: string
//   constructor(params: string) {
//     this.name1 = params;
//   }
// }

// var dog = new Dog('gou');

/**
 * 接口扩展接口
 */
// interface Animal {
//   eat (food: string):void
// }
// interface Person extends Animal {
//   work (career: string):void
// }

// class programmer {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class web extends programmer implements Person{
//   constructor (name: string) {
//     super(name);
//   }
//   eat ():void {

//   }
//   work ():void {

//   }
//   name: string = '123';

// }


/**
 * 范型
 */

// interface getData<T>{
//   (params:T):T
// }

// var dd:getData = function<T> (params:T):T {
//   return params;
// }


/**
 * @范型1 类型参数在调用的时候传
 */
// interface configFn{
//   <T>(value:T):T
// }
// function getData<T>(params:T):T {
//   return params;
// };
// var get:configFn = getData;

// get<string>('12')

/**
 * @范型2 类型参数在定义的时候传
 */

// interface configFn<T>{
//   (value:T):T
// }
// function getData<T>(params:T):T {
//   return params;
// }
// var get:configFn<string> = function (param) {
//   return param;
// };
// getData('123')



/**
 * @作为范型的类
 */
// class Article {
//   title: string
//   constructor (params: {
//     title:string | undefined
//   }) {
//     this.title = params.title;
//   }
// }
// // let a = new Article({title: undefined});

// class mysqlDB<T> {
//   dbList: T[]
//   constructor() {
//     this.dbList = [];
//   }
//   add (item:T):boolean {
//     this.dbList.push(item);
//     return true
//   }
// }

// var myDB = new mysqlDB<Article>();

// myDB.add({
//   title: 'hhh'
// })

/**
 * @测试导出编译
 */

// export interface Book1 {
//   title: string
// }

// class BookA implements Book1 {
//   title: string
//   constructor (title: string) {
//     this.title = title;
//   }
// }

// let booka1 = new BookA('标题1');
// let booka2 = new BookA('标题2');
// let booka3 = new BookA('标题3');


// export interface Book2 {
//   title: string
// }

// class BookB implements Book2 {
//   title: string
//   constructor (title: string) {
//     this.title = title;
//   }
// }

// let bookb1 = new BookA('标题1');
// let bookb2 = new BookA('标题2');
// let bookb3 = new BookA('标题3');


/**
 * @装饰器 传入装饰器将要装饰的类作为参数
 */
function decor (params:any) {
  console.log(params);
  params.prototype.apiUrl = '123';
}

@decor
class A {
  constructor() {
    
  }
}

let a = new A();
console.log(a);
