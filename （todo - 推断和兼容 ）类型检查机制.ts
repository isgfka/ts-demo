// 配合IDE的自动补全机制，可以极大的提高我们的开发效率

/**
 * 类型推断、断言
 */

/**
 * 类型兼容
 */


/**
 * 类型保护
 * 1. instanceof
 * 2. in ('java' in lang)
 * 3. typeof x === 'string'
 * 4. 创建一个类型保护函数
 * isJava(lang: Java | Javascript): lang is Java { //（is是类型谓词）
 *  return (lang as Java).helloJava !== undefined;
 * }
 */