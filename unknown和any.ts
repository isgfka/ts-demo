/**
 * unknown是继any之后的一个顶级类型，所有类型都可以是unknown或者any
 * 所以，所有与unknown（除了any）的联合类型，都会被简化成unknown
 */
const p1:string = '123';
const p2:unknown = p1;

const p3:unknown = '123';
// const p4:string = p3; // Type 'unknown' is not assignable to type 'string'.ts(2322)



let value: unknown;
 
let value1: unknown = value;   // OK
let value2: any = value;       // OK

// let value3: number = value; // Error: Type 'unknown' is not assignable to type 'number'.ts(2322)


/**
 * 我们可以通过不同的方式将 unknown 类型缩小为更具体的类型范围
 * 包括 typeof 运算符，instanceof 运算符和自定义类型保护函数
 * 所有这些缩小类型范围的技术都有助于 TypeScript 的基于控制流的类型分析
 */

let value4: number = typeof value === 'number' ? value : 1;


/**
 * 对 unknown 类型使用类型断言 as
 */

const value5: unknown = "Hello World";
const someString: string = value5 as string;
const otherString = someString.toUpperCase();  // "HELLO WORLD"

/**
 * 但是对于断言有个问题
 * 请注意，TypeScript 事实上未执行任何特殊检查以确保类型断言实际上有效
 * 类型检查器假定你更了解并相信你在类型断言中使用的任何类型都是正确的
 */

const value6: unknown = 42;
const someString2: string = value6 as string;
const otherString2 = someString2.toUpperCase();  // Error



/**
 * 在联合类型中，unknown 类型会吸收任何类型
 * 这就意味着如果任一组成类型是 unknown，联合类型也会相当于 unknown
 */
// ![都是unknown](image/2020-06-07-17-55-32.png)
type UnionType1 = unknown | null;       // unknown
type UnionType2 = unknown | undefined;  // unknown
type UnionType3 = unknown | string;     // unknown
type UnionType4 = unknown | number[];   // unknown


var value7:UnionType1 = 123;
// const value8:number = value7; // Type 'unknown' is not assignable to type 'number'.ts(2322)


// ![都是any](image/2020-06-07-17-56-43.png)
type UnionType5 = unknown | any;



/**
 * 交叉类型中的 unknown 类型
 * 在交叉类型中，任何类型都可以吸收 unknown 类型
 * 这意味着将任何类型与 unknown 相交不会改变结果类型
 */

type IntersectionType1 = unknown & null;       // null
type IntersectionType2 = unknown & undefined;  // undefined
type IntersectionType3 = unknown & string;     // string
type IntersectionType4 = unknown & number[];   // number[]
type IntersectionType5 = unknown & any;        // any



/**
 * 使用类型为 unknown 的值的运算符
 * unknown 类型的值不能用作大多数运算符的操作数。这是因为如果我们不知道我们正在使用的值的类型，大多数运算符不太可能产生有意义的结果
 * 你可以在类型为 unknown 的值上使用的运算符只有四个相等和不等运算符 ===/==/!==/!=
 * 如果要对类型为 unknown 的值使用任何其他运算符，则必须先指定类型（或使用类型断言强制编译器信任你）
 */

const unknown1:unknown = {};
const known1:string = '333'
// if (unknown1 === known1) {
//   console.log(123);
// }
known1 + unknown1; // 奇怪，怎么不报错




/**
 * 示例：从 localStorage 中读取JSON
 * 这是我们如何使用 unknown 类型的真实例子。
 * 假设我们要编写一个从 localStorage 读取值并将其反序列化为 JSON 的函数。如果该项不存在或者是无效 JSON，则该函数应返回错误结果，否则，它应该反序列化并返回值。
 * 因为我们不知道在反序列化持久化的 JSON 字符串后我们会得到什么类型的值。我们将使用 unknown 作为反序列化值的类型。这意味着我们函数的调用者必须在对返回值执行操作之前进行某种形式的检查（或者使用类型断言）。
 * 这里展示了我们怎么实现这个函数：
 */

type Result = { success: true, value: unknown } | { success: false, error: Error };

function tryDeserializeLocalStorageItem(key: string): Result {
  const item = localStorage.getItem(key);

  if (key === null) {
    // The item does not exist, thus return an error result
    return {
      success: false,
      error: new Error(`Item with key "${key}" does not exist`)
    };
  }

  let value: unknown;

  try {
    value = JSON.parse(item);
  } catch (error) {
    // The item is not valid JSON, thus return an error result
    return {
      success: false,
      error
    };
  }

  // // Everything's fine, thus return a success result
  // return {
  //   success: true,
  //   value
  // };
}


const result = tryDeserializeLocalStorageItem(null);
 
if (result.success) {
  // We've narrowed the `success` property to `true`,
  // so we can access the `value` property
  const darkModeEnabled: unknown = result.value;
 
  if (typeof darkModeEnabled === "boolean") {
    // We've narrowed the `unknown` type to `boolean`,
    // so we can safely use `darkModeEnabled` as a boolean
    console.log("Dark mode enabled: " + darkModeEnabled);
  }
} else {
  // We've narrowed the `success` property to `false`,
  // so we can access the `error` property
  console.error(result.error);
}
// todo 157为什么会报错