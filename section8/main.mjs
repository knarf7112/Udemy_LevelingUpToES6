// Import & Export

//在node環境下測試須要再安裝@std/esm模組,因為ES6是不支援import&export的
/*
  1. command type this => npm install @std/esm
  2. command type cmd and file name to using it => E:\Udemy\Leveling up to ES6\section8>node -r @std/esm main.mjs
     (node -r,--require module : Preload the specified module at startup.) 
*/ 

//import  { add, subtract } from './add';
import * as myUtilLib from './add'; // use myUtilLib variable to catch all export function 
console.log(myUtilLib);
/* console print
{ add: [Function: add],
  multiply: [Function: multiply],
  obj: { name: 'Knock', age: 18 },
  subtract: [Function: subtract] }
*/

import defaultLib from './add'; //載入add.mjs內有設定default的變數
console.log('default lib', defaultLib);
/**
{
  hello: 'this is default',
  addResult1: 8,
  subtractResult1: 2,
  add: [Function: add] 
};
 */

const value = myUtilLib.add(1,2);

const value2 = myUtilLib.subtract(1, 2);

const value3 =myUtilLib.multiply(2, 3);

console.log(value, value2, value3, myUtilLib.obj);// 3 -1 6 { name: 'Knock', age: 18 }
