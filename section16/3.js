//ES6 : get Max value from array

//ES5
var arr = [1, 20, 10, 5, 30];

const results = arr.filter(function(number){
    return number > 10;
});
console.log(results[0]);// 20

//find the first matches value is 20
const results2 = arr.find(function(number){
    return number > 10;
});
console.log(results2);// 20

//---------------------------------------------------
//ES5 :truncate(截短)
function trunc(x){
    return  ( x < 0 )? Math.ceil(x) : Math.floor(x);
}

console.log(trunc(42.7), trunc(-42.7));// 42 -42

//ES6 :truncate(截短)
console.log(Math.trunc(1.01));// 1
console.log(Math.trunc(-1.01));// 1
//---------------------------------------------------
// isNaN is not a number : 
// isNan vs Number.isNaN   =>  https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/isNaN#%E4%BB%A4%E4%BA%BA%E5%9B%B0%E6%83%91%E7%9A%84%E7%89%B9%E6%AE%8A%E7%8B%80%E6%B3%81%E8%A1%8C%E7%82%BA
//ES5 : check value is NaN?
console.log(Number.isNaN(123));//false
console.log(Number.isNaN(true));//false
console.log(Number.isNaN(false));//false
console.log(Number.isNaN('123hgf'));//true
console.log(Number.isNaN(undefined + undefined));//true
console.log(Number.isNaN(null + undefined));//true

var i;
i++;
console.log(isNaN(i));//true
console.log(i !== i);//true : because NaN not equal NaN

// isFinite - check if a number if infinite or not
var i2 = 1 / 0;
var i3 = -1 / 0;
console.log(i2);//Infinity
console.log(i3);//-Infinity

//ES5的檢查方式
console.log(i2 === Infinity || i2 === -Infinity);//true
//ES6的檢查方式
console.log(Number.isFinite('hello'),Number.isFinite(i2), Number.isFinite(i3));// false false false

//---------------------------------------------------
//check number is safe integer
console.log(Number.isSafeInteger(1));// true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER+1));// false

//---------------------------------------------------
//ES6: Number.EPSILON => 浮點數的最小值
console.log( 0.1 + 0.2 === 0.3);// false
console.log(Math.abs(0.1+0.2-0.3));//5.551115123125783e-17​​​​​


//---------------------------------------------------
//檢查正負數
console.log(Math.sign(10.3));// 1 : 表示正數
console.log(Math.sign(-10.3));// -1 : 表示正數
console.log(Math.sign(0));// 0 : 表示非正數也非負數
console.log(Math.sign(-0));// 0 : 表示非正數也非負數