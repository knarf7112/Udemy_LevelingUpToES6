// ES6 class : declare classes

//ES5 construct to class
var Person = function (name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.jump = function(){
    console.log(`${this.name} is jump, and age is ${this.age}`);
}

var knock = new Person('knock', 18);

console.log(knock);//​​​​​ Person { name: 'knock', age: 18 }​​​​​

knock.jump();// console out:  ​​​​​knock is jump, and age is 18​​​​​

//----------------------------------------------------------------------------

//ES6
class Person2 {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    jump(){
        console.log(`${this.name} is jump, and age is ${this.age}`);
    }

    getName(){
        return this.name;
    }
}

var qoo = new Person2('Qoo', 999);
console.log(qoo);// Person2 { name: 'Qoo', age: 999 }​​​​​
qoo.jump(); // console out: ​​​​​Qoo is jump, and age is 999​​​​​

//----------------------------------------------------------------------------
//class inheritance : ES6的類別繼承

class Employee extends Person2 {
    constructor(name, age, years){
        super(name, age);//一定要先初始化產生parent class的instance
                         //否則會拋出異常 Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this.years = years;
        console.log('super', this.name);
    }

    //override parent's jump method
    jump(){
        console.log(`此方法覆蓋掉parent的jump方法, name: ${this.name}, age:${this.age}, years:${this.years}`);
    }

    quit(){
        this.years = 0;
        console.log(`${this.name} is quit and years chnage to ${this.years}`);
    }
}

let e1 = new Employee('Bob',30, 10);
console.log(e1);//Employee { name: 'Bob', age: 30, years: 10 }​​​​​
e1.jump();// console out: ​​​​​Bob is jump, and age is 30​​​​​
e1.quit();// console out: ​​​​​Bob is quit and years chnage to 0​​​​​


//----------------------------------------------------------------------------
//ES6 : super


class Classmate extends Person2 {

    constructor(name, age, className ){
        super(name, age);
        this.className = className;
    }

    getName(){
        return super.getName();
    }
}

let c1 = new Classmate('Andy',20, 'III .net class');
let classmateName = c1.getName();
console.log(classmateName) ;// ​​​​​Andy​​​​​

//----------------------------------------------------------------------------

//ES6: static method
const Person3 = class extends Person2 {
    
        constructor(name, age ){
            super(name, age);
        }
    
        static setName(person2, name){
            person2.name = name;
        }
    }

let p1 = new Person3('Test1',777);
console.log(p1);// ​​​​​Person3 { name: 'Test1', age: 777 }​​​​​
Person3.setName(p1, 'AAA');
console.log(p1);// ​​​​​Person3 { name: 'AAA', age: 777 }​​​​​

//----------------------------------------------------------------------------

//ES5 : getter & setter
const Person4 = class {
    
        constructor(name, age ){
            this.name = name;
            this.age = age;
        }
    
        get Name(){
            //logic
            //logic
            console.log('you read name property');
            //logic
            //logic
            return this.name;
        }

        set Name(name){
           //logic
            //logic
            console.log('you write name property');
            //logic
            //logic
            this.name = name; 
        }
    }

let p4 = new Person4('PPP4',123);
console.log(p4.Name);// 讀取屬性時,會先執行Name的getter,所以會console輸出 "you read name property"​然後再回傳name值: PPP4
p4.Name = 'OOO4';// 設定屬性時,會執行Name的setter ,裡面可以寫一些logic
