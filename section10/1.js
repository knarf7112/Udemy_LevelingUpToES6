// destructor assignment

var numbers = [1, 2, 3, 4];

//ES5: 取得陣列內值的方式
var a = numbers[0];
var b = numbers[1];
var c = numbers[2];
var d = numbers[3];
console.log(a,b,c,d);// ​​​​​1 2 3 4​​​​​


//ES6: destructor assign
var [a1,b1,c1,d1] = numbers;
console.log(a1,b1,c1,d1);// ​​​​​1 2 3 4​​​​​
//modify c1, d1
[c1, d1] = [a1, b1];
console.log(a1,b1,c1,d1);// ​​​​​1 2 1 2​​​​​​​​​​


var [ , , c2, d2] = numbers;
console.log(c2,d2);// ​​​​​3 4

//example
function getConfig(){
    return [
        true,
        10, 9,8, 7, 6, 5, 4, 3, 2, 1
    ];
}

const [isOn, amount, ...left] = getConfig();
console.log(isOn, amount, left);// true 10 [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]​​​​​


//------------------------------------------------------------------------------
var isOn2 = false;
var amount2 = 10;

//ES5: set config
function setConfig(config){
    isOn2 = config[0];
    amount2 = config[1];
};

setConfig([ true, 20]);
console.log(isOn2, amount2);//​​​​​true 20​​​​​


//ES6: set config
function setConfig2([_isOn2, _amount2]){
    isOn2 = _isOn2;
    amount2 = _amount2;
};

setConfig2([ false, 99]);
console.log(isOn2, amount2);//​​​​​ false 99

//------------------------------------------------------------------------------




