//ES6 : default value
const arr = [1];

//set default value with b
var [amount, b = 1000] = arr;

console.log(amount, b);//​​​​​1 1000​​​​​

const obj = {
    isOn: true,
    amount: 10
};

var {
    isOn: isServerOn,
    amount = 1000
} = obj;
//若amount有值會使用原本的值,若無則帶入預設值
console.log(isServerOn, amount);// ​​​​​true 10​​​​​