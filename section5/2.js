// Rest parameter

//ES5
function printArgs(){
    console.log(arguments); //arguments is array like => [ 1, 5, 3, 'hello', null, true, {}, [4, 5, 6] ]
}

printArgs(1, 5, 3, 'hello', null, true, {}, [4, 5, 6]);

//ES6
function printArgs_ES6(age,siblings,...args/*, x */){
    console.log(age);// 1
    console.log(siblings);// 5
    console.log(args); //[ 3, 'hello', null, true, {}, [4, 5, 6] ]
}

printArgs_ES6(1, 5, 3, 'hello', null, true, {}, [4, 5, 6]);

//-------------------------------------------------------------------

/********************* Spread Operator *********************************/

//ES5
function print(){
    var args = Array.prototype.slice.call(arguments);
    args = ['<br>'].concat(args).concat(['</br>']);

    console.log(args.join(' '));// '<br> hello world </br>' //arguments is array like => [ 1, 5, 3, 'hello', null, true, {}, [4, 5, 6] ]
}

print('hello', 'world');


//ES6
function print_ES6(...args){
    args = ['<br>', ...args,'</br>' ];//利用擴展符號(spread operator)
    args = ['<br>', args,'</br>' ]
    args;//['<br>', 'hello', 'world','</br>']
    console.log(args.join(' '));// '<br> hello world </br>' //arguments is array like => [ 1, 5, 3, 'hello', null, true, {}, [4, 5, 6] ]
}

print_ES6('hello', 'world');

const message = 'hello ES6';
const chars = [...message];//只要原型有iterator就可以用此方式
console.log(chars);//[ 'h', 'e', 'l', 'l', 'o', ' ', 'E', 'S', '6' ]​​​​​


function add(a, b){
    arguments;//
    a;//  2
    b;// 10
    return a + b;
}

const arr = [2, 10, 8];
//利用spread operator來分解arr
console.log(add(...arr));//12

let arr2 = [];
arr2.push(1, 2, 3);//
console.log(arr2);//[1, 2, 3]
arr2 = [];
arr2.push(...[1, 2, 3]);//利用spread operator達到插入整個陣列的效果,所以只要知道某個變數可以拆解成陣列就可以用此方法將陣列擴展出來
console.log(arr2);//[1, 2, 3]

//--------------------
//也可用來複製陣列
const arr3 = [1,2,3];
const arrCopy = [...arr3];

arr3;//​​​​​[ 1, 2, 3 ]​​​​​
arrCopy;//​​​​​[ 1, 2, 3 ]

arr3[0] = 5;
arr3;//​​​​​[ 5, 2, 3 ]​​​​​
arrCopy;//​​​​​[ 1, 2, 3 ]
//--------------------
//分解後利用max方法找最大值
const numbers = [1, 50, 30, 20];
const max = Math.max(...numbers);//50

