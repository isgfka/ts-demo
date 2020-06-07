/**
 * unknown是继any之后的一个顶级类型，所有类型都可以是unknown或者any
 * 所以，所有与unknown（除了any）的联合类型，都会被简化成unknown
 */
var p1 = '123';
var p2 = p1;
var p3 = '123';
// const p4:string = p3; // Type 'unknown' is not assignable to type 'string'.ts(2322)
var value;
var value1 = value; // OK
var value2 = value; // OK
// let value3: number = value; // Error: Type 'unknown' is not assignable to type 'number'.ts(2322)
/**
 * 我们可以通过不同的方式将 unknown 类型缩小为更具体的类型范围
 * 包括 typeof 运算符，instanceof 运算符和自定义类型保护函数
 * 所有这些缩小类型范围的技术都有助于 TypeScript 的基于控制流的类型分析
 */
var value4 = typeof value === 'number' ? value : 1;
/**
 * 对 unknown 类型使用类型断言 as
 */
var value5 = "Hello World";
var someString = value5, as = string;
var otherString = someString.toUpperCase(); // "HELLO WORLD"
/**
 * 但是对于断言有个问题
 * 请注意，TypeScript 事实上未执行任何特殊检查以确保类型断言实际上有效
 * 类型检查器假定你更了解并相信你在类型断言中使用的任何类型都是正确的
 */
var value6 = 42;
var someString2 = value6, as = string;
var otherString2 = someString2.toUpperCase(); // Error
null; // unknown
var value7 = 123;
 & null; // null
 & undefined; // undefined
 & string; // string
 & number[]; // number[]
 & any; // any
/**
 * 使用类型为 unknown 的值的运算符
 * unknown 类型的值不能用作大多数运算符的操作数。这是因为如果我们不知道我们正在使用的值的类型，大多数运算符不太可能产生有意义的结果
 * 你可以在类型为 unknown 的值上使用的运算符只有四个相等和不等运算符 ===/==/!==/!=
 * 如果要对类型为 unknown 的值使用任何其他运算符，则必须先指定类型（或使用类型断言强制编译器信任你）
 */
var unknown1 = {};
var known1 = '333';
// if (unknown1 === known1) {
//   console.log(123);
// }
known1 + unknown1; // 奇怪，怎么不报错
true, value;
unknown;
 | { success: false, error: Error };
function tryDeserializeLocalStorageItem(key) {
    var item = localStorage.getItem(key);
    if (key === null) {
        // The item does not exist, thus return an error result
        return {
            success: false,
            error: new Error("Item with key \"" + key + "\" does not exist")
        };
    }
    var value;
    try {
        value = JSON.parse(item);
    }
    catch (error) {
        // The item is not valid JSON, thus return an error result
        return {
            success: false,
            error: error
        };
    }
    // // Everything's fine, thus return a success result
    // return {
    //   success: true,
    //   value
    // };
}
var result = tryDeserializeLocalStorageItem(null);
if (result.success) {
    // We've narrowed the `success` property to `true`,
    // so we can access the `value` property
    var darkModeEnabled = result.value;
    if (typeof darkModeEnabled === "boolean") {
        // We've narrowed the `unknown` type to `boolean`,
        // so we can safely use `darkModeEnabled` as a boolean
        console.log("Dark mode enabled: " + darkModeEnabled);
    }
}
if (!result.success) {
    // We've narrowed the `success` property to `false`,
    // so we can access the `error` property
    console.error(result.error);
}
