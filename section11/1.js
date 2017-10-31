//ES6 : Symbol
//
const symbolA = Symbol('iteration');
const symbolB = Symbol('iteration');
console.log(symbolA, symbolB);//​​​​​ Symbol {} Symbol {}​​​​​
console.log(symbolA === symbolB);// ​​​​​false​​​​​
//Symbol每次被調用都會有個unique的識別,所以每次產生的symbol object reference都不一樣



//一般使用的方式
var symbolC = Symbol();
const obj = {
    [symbolC]:'hello world'
}

console.log(obj);// {} : 沒有任何屬性,原因是symbol不會被列入正常的屬性
console.log(Object.getOwnPropertyNames(obj)); // []
console.log(JSON.stringify(obj));// {}
console.log(Object.keys(obj));// []


//若想取得Symbol設定的屬性
console.log(Object.getOwnPropertySymbols(obj)); //​​​​​[ Symbol {} ]​​​​​

const firstSymbol = Object.getOwnPropertySymbols(obj)[0];

console.log('是否取得symbolC :', firstSymbol === symbolC);// ​​​​​是否取得symbolC : true​​​​​

//--------------------------------------------------------------------------------------
//使用for屬性會使用global symbol,這樣就會參考同一個symbol object
const symbolD = Symbol.for('my unique key');//
const symbolE = Symbol.for('my unique key');//
const symbolE2 = Symbol.for('my unique key2');
console.log(symbolE === symbolE2);// false
console.log(symbolD === symbolE);// true

//以下使用Symbol.spilt來自定一個splitter的功能
const capsSplitter = {
    //dynamic property
    [Symbol.split](string){
        console.log('有被呼叫字串的split方法',string);// 有呼叫字串的split方法 hello world​​​​​​​​​​
        return string.split('');
    },
    [Symbol.replace](originStr, intseadStr2){
        console.log('有被呼叫字串的replace方法',originStr,intseadStr2);//有被呼叫字串的replace方法 hello world 全部都替換拉​​​​​​​​​​
        return originStr.replace(originStr, intseadStr2);
    }
}

const message = 'hello world';
const splits = message.split(capsSplitter);
console.log(splits);// [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]​​​​​

const replacedStr = message.replace(capsSplitter,'全部都替換拉');
console.log(replacedStr);// ​​​​​​​​​​全部都替換拉