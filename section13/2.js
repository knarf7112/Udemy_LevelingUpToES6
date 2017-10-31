// synchronous code

function getName(callback){
    setTimeout(() => {
        console.log('bob');
        callback('bob');// callback是 立即執行
    }, 2000);
}

function getAge(callback){
    setTimeout(()=>{
        console.log(10);
        callback(10);
    }, 5000);
}


let _name = null;
let _age = null;
getName( (name)=>{
    _name = name;
 });
getAge( (age)=>{
    _age = age;
});
//非同步的關係造成只能利用promise的方式來取得值,但這樣很醜
console.log(_name, _age);// null, null
//----------------------------------------------------------------------

//利用generator的方式來取得值,這樣能在synchronous方式取得
function getName2(){
    setTimeout(() => {
        console.log('bob');
        let data = iter.next('bob');//3.利用iterator延遲執行的特性,next方法允許帶入一個參數,但這個帶入的參數值會返回給呼叫方法的yield
        console.log(data); //​​​​​4.所以 data就沒東西 { value: undefined, done: false }​​​​​
    }, 2000);
}

function getAge2(){
    setTimeout(()=>{
        console.log(10);
        let data = iter.next(10);//6.利用iterator延遲執行的特性,next方法允許帶入一個參數,但這個帶入的參數值會返回給呼叫方法的yield
        console.log(data); //​​​​​7.所以 data就沒東西 { value: undefined, done: false }​​​​​
    }, 5000);
}

var iter = (function* (){
    const name = yield getName2();//yield and wait until get name return something
    console.log(name);// 5. 返回iter.next方法內的參數值 "bob"
    const age = yield getAge2();
    console.log(age);// 8. 返回iter.next方法內的參數值 10
    // logic
}());

//1.一開始須要靠第一次執行next方法來啟動iterator
let firstVal = iter.next();
console.log(firstVal);//2.所以第一次的值肯定是空的 ,因為generator還未初始化生產,MDN有範例說明{ value: undefined, done: false }​​​​​
