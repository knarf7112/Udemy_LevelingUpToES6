// ES6 : string repeat

//ES5: string repeat
const str = Array(10).fill('*').join('');
console.log(str);// **********

//ES6 :string repeat
const str2 = '*'.repeat(10);
console.log(str2);// *********
//-----------------------------------------------------
//ES5: string start with
const isStartWith1 = 'hello world'.indexOf('hello') === 0;
console.log(isStartWith1);// true
//ES6: string start with
const isStartWith2 = 'hello world'.startsWith('hello');
console.log(isStartWith2);// true


//ES5: string end with
const isEndWith1 = 'hello world'.indexOf('world') === ('hello world'.length - 'world'.length);
console.log(isEndWith1);// true
//ES6: string end with
const isEndWith2 = 'hello world'.endsWith('world');
console.log(isEndWith2);// true


//ES5: string includes
const index = 'hello world'.indexOf('zworld'); 
console.log(index);// -1: not exists
//ES6: string includes
const isInclude = 'hello world'.includes('zworld');
console.log(isInclude);// false:not exists