//destructor assing

// object destructor : get
function getConfig(){
    return {
        isOn:true,
        amount: 10
    };
}

//ES5 : 如果須要取得回傳值內的變數值
var config = getConfig();
var isOn1 = config.isOn;
var amount1 = config.amount;
console.log(isOn1, amount1);// true 10​​​​​

//ES6 : 利用destructor assign
const { isOn, amount } = getConfig();
console.log(isOn, amount);// ​​​​​true 10​​​​​ 

//------------------------------------------------------------------
let config2 = {};
// object destructor : ES5 set
function setConfig(isOn, amount){
    config2.isOn = isOn;
    config2.amount = amount;
}

setConfig(false, 123);
console.log(config2);// { isOn: false, amount: 123 }​​​​​

// object destructor : ES6 set
function setConfig2({isOn, amount}){
    config2 = {
        isOn,
        amount
    }
}

setConfig2({ isOn:true, amount:456 });
console.log(config2);// ​​​​​{ isOn: true, amount: 456 }​​​​​
//------------------------------------------------------------------

//ES6: destructor 兩層以上的物件並宣告另外變數來萃取
function getConfig2(){
    return {
        isOn: true,
        amount: 20,
        servers:{
            a: true,
            b: false,
            c: 1234
        }
    };
}

var {
    isOn: myIsOn1,
    amount: myAmount1,
    servers:{
        a: myServerA,
        c: myServerC
    }
} = getConfig2();
console.log(myIsOn1,myAmount1,myServerA, myServerC);//true 20 true 1234


