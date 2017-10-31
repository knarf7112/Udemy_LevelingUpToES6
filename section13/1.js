// ES6: generator

function* myGenerator (){
    console.log('1');// 1
    yield 1; // return 1
    console.log('2');// 2
    //return;
    yield 2;
    console.log('3');// 3
    yield 3;
    //done
}

let iter = myGenerator(); // return a iterator object
console.log(iter.next());// ​​​​​{ value: 1, done: false }​​​​​
console.log(iter.next());// ​​​​​{ value: 2, done: false }​​​​​
console.log(iter.next());// ​​​​​{ value: 3, done: false }​​​​​
console.log(iter.next());// ​​​​​{ value: undefined, done: true }​​​​​


//----------------------------------------------------

//自己寫的怪異費式數列
/*
想法: 把n1當第一個數,n2當弟二個數
費式數列的值循環是第一次的值加上弟二次的值會等於弟三次的值
每次遞增後(往右移),n1的值就是會n2(也往右移), 而n2的值(原本舊的n1+n2)
*/
function* fibonacci(n){
    let n1 = 0;
    let n2 = 1;

    while(true)
    {
        if(--n < 0)return;
        yield  n1 = n1 + n2;// 0+1, 1+2, 3+5,  8+13, 21+34 ... 每次的先改n1,再往下改n2,一直上下上下跳 
        if(--n < 0)return;  //  ↓ ↗  ↓ ↗  ↓  ↗   ↓ ↗
        yield  n2 = n1 + n2; //1+1, 3+2, 8+5, 21+13, 55+34 ...

    }
}

let fb = fibonacci(6);//
console.log(fb.next()); //​​​​​{ value: 1, done: false }​​​​​
console.log(fb.next()); //​​​​​{ value: 2, done: false }​​​​​
console.log(fb.next()); //​​​​​{ value: 3, done: false }​​​​​
console.log(fb.next()); //​{ value: 5, done: false }​​​​​
console.log(fb.next()); //​​​​​{ value: 8, done: false }​​​​​
console.log(fb.next()); //​​​​​{ value: 13, done: false }​​​​​
console.log(fb.next()); //​​​​​{ value: undefined, done: true }​​​​​

//教學內的
function* fibonacci2(){
    let n1 = 0;
    let n2 = 1;

    while(true)
    {
        let current = n1;
        n1 = n2;
        n2 = current + n1;
        let reset = yield current;//返回current值後,每次reset都是得到undefined,只有當next方法傳入true時,才得到true
        //console.log(reset);//
        if(reset){
            n1 = 0,n2 = 1;
        }
    }
}


let fb2 = fibonacci2();

console.log(fb2.next());//{ value: 0, done: false }​​​​​
console.log(fb2.next());//{ value: 1, done: false }​​​​​
console.log(fb2.next());//{ value: 1, done: false }​​​​​
console.log(fb2.next());//{ value: 2, done: false }​​​​​
console.log(fb2.next());//{ value: 3, done: false }​​​​​
console.log(fb2.next());//{ value: 5, done: false }​​​​​
console.log(fb2.next());//{ value: 8, done: false }​​​​​
console.log(fb2.next(true));//{ value: 0, done: false }​​​​​
console.log(fb2.next());//{ value: 1, done: false }​​​​​
console.log(fb2.next());//{ value: 1, done: false }​​​​​
console.log(fb2.next());//{ value: 2, done: false }​​​​​
console.log(fb2.next());//{ value: 3, done: false }​​​​​

//-----------------------------------------------------------------------------

//也可以在物件內建立generator物件,並用yield* 後面用一個陣列來傳入每次return的值

const obj = {
    *myGenerator(){
        yield* [1,3,5];
        yield '結束了,萬歲!!!';
    }
}
let objGen = obj.myGenerator();
console.log([...objGen]);//​​​​​[ 1, 3, 5, '結束了,萬歲!!!' ]​​​​​
/*
console.log('1', objGen.next());// ​​​​​1 { value: 1, done: false }
console.log('2', objGen.next());// ​​​​​2 { value: 3, done: false }
console.log('3', objGen.next());// ​​​​​3 { value: 5, done: false }
console.log('4', objGen.next());// ​​​​​4 { value: '結束了,萬歲!!!', done: false }
console.log('5', objGen.next());// 5 { value: undefined, done: true }​​​​​
*/