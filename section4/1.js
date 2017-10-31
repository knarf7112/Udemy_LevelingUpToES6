/********************** Arrow function **********************/

const arr = [ 1, 2, 3, 4];

const byTwo = arr.map( function(number){ 
    return number * 2;
});

//simply clean code
const byTwo2 = arr.map( number => number * 2);

//return an object with extra parentheses ()
const byTwo3 = arr.map( number => (
    { 
        number: number * 2 
    }
));


arr;//[1,2,3,4]
byTwo;//[2,4,6,8]
byTwo2;//[2,4,6,8]
byTwo3;// [{number:2}, {number:4}, {number:6}, {number:8}]


var obj = {
    value: 0,
    value2: 0,
    value3: 0,
    increment: function (){
        var that = this;
        setTimeout( function (){
            // "this" 目前參考者此function scope(就是setTimeout內寫的function區塊),
            // 然後此function區塊並沒有宣告value屬性
            // 要依靠一個變數來存放物件指標並將指向指到此物件指標上
            // 也可在此function scope最後綁定指向的this
            // 但使用Arrow function會比較方便,因他會自動綁定宣告時的this
            that.value++;
            console.log('this',that.value);// 1
        }, 1000);
    },
    increment2: function (){
        // arrow function auto bind "this" scope when declaretion
        // 在非同步狀態或是callback時, 是非常有用的
        console.log('increment2的this', this);
        setTimeout( ()=>{
            this.value2++;
            console.log('this',this.value2);// 1
        }, 1000);
    },
    increment3:  () => {
        // 但也不是任何地方都適合使用arrow function
        // 此例上面的arrow function綁定的this對應到global區域
        // 造成內部arrow function綁定的this也是global區域
        console.log('increment3的this', this);
        setTimeout( ()=>{
            this.value3++;
            console.log('this',this.value3);// NaN
        }, 1000);
    }
}


obj.increment(); // 1
obj.increment2(); // 1
obj.increment3(); //Nan

const person = {
    name: 'knock',
    updateName: function(){
        //'use strict';
        console.log('updateName', this); // 此時上面宣告的function已經指向person了
        // 此anonymous function因宣告時並沒有綁定this,所以裡面的this是指向global的
        (function (){
            console.log('IIFE', this);// 'this' is global region
            this.name = 'Qoo';
        }/*.bind(this)*/)();
    },
    updateName2: function(){

        console.log('updateName2', this); // 'this' is person

        // 此時IIFE內宣告的arrow function因為一開始宣告就將this綁定到其外層function區域,
        // 所以外層function區域的this指向啥,就是啥了
        (()=>{
            console.log('IIFE2', this);// 
            this.name = 'ABC';
        })();
    }
}

person.updateName();
console.log(person.name);//
console.log(name);// global.name
person.updateName2();
console.log(person.name);// person.name


const person2 = {
    age: 10,
    setAge: function(newAge){
        this.age = newAge;
    },
    refreshAge: function( useId){
        fecthAgeFromDb(function (newAge){
            console.log('callback func',this);//此時此暱名方法的function scope因為沒有任何綁定所以指向global
            this.setAge( newAge );// throw error: this.setAge is not a function
        })
    },
    refreshAge2: function( useId){
        //利用arrow function的宣告綁定callback方法的this就沒問題
        fecthAgeFromDb( (newAge)=>{
            console.log('callback func',this);//此時arrow function已經在宣告時綁定指向外層this,也就是person2
            this.setAge( newAge );// 20
        })
    }
};

function fecthAgeFromDb( callback ){ console.log('fecthAgeFromDb',this); callback(20); }

console.log(person2.age);//10
//person2.refreshAge();// throw error: this.setAge is not a function
person2.refreshAge2();
console.log(person2.age);//20
//--------------------------------------------------------------------------------

function ListPrefixer(list, prefix){
    this.list = list;
    this.prefix = prefix;
}

ListPrefixer.prototype.transform = function( callback ){
    this.list = this.list.map( callback );
}

ListPrefixer.prototype.applyPrefix = function(){
    //這邊宣告的callback方法沒有綁定this,所以callback內的this是指向global
    this.transform( function (number){
        return this.prefix + number;
    }/*.bind(this)*/);
}

ListPrefixer.prototype.applyPrefixArrow = function(){
    this.transform( (number) =>{
        return this.prefix + number;
    });
}

const request = new ListPrefixer([1,2,3], '*');

request.applyPrefix();
console.log(request.list);//[NaN, NaN, NaN]
request.applyPrefixArrow();
console.log(request.list);//['*NaN', '*NaN', '*NaN']


//-----------------------------------------------
function StringBuilder(string){
    this.string = string;
}

StringBuilder.prototype.append = function( string ){
    return new StringBuilder(this.string + string);
}

StringBuilder.prototype.prepend = function ( string ){
    return new StringBuilder( string + this.string );
} 

StringBuilder.prototype.pad = function ( string ){
    return this.append(string).prepend(string); //前後都加前綴
}

StringBuilder.prototype.convertChars = function(converter){
    let oldString = this.string;
    this.string = '';

    for(let i = 0; i < oldString.length; i++){
        //執行callback並傳入目前的每個字符,
        //再宣告一個callback執行完後的匿名arrow function
        //讓callback方法能再執行此匿名arrow function,
        //利用此匿名arrow function來將callback變更的結果再回傳給目前物件的string屬性上
        
        //須要先把匿名宣告function與外層this作綁定,這樣才能連結StringBuilder的instance
        converter(oldString[i], (converted) => {
            this.string += converted;
        });
    }

    return new StringBuilder(this.string);
}

//讓字母大小寫顛倒
function ReveseCase( oldChar, callback){
    //console.log(oldChar);//

    if(oldChar.toUpperCase() === oldChar){
        oldChar = oldChar.toLowerCase();
    }else{
        oldChar = oldChar.toUpperCase();
    }

    callback(oldChar);//回傳每個變更後的字符並繼續後續處理
}

let test = new StringBuilder('hihi');
console.log(test.string);// hihi
test = test.append(' world');
console.log(test.string);// hihi world
test = test.prepend('Qoo ');
console.log(test.string);// Qoo hihi world
test = test.convertChars( ReveseCase );
console.log(test.string);// qOO HIHI WORLD