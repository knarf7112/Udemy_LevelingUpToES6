// Property Shorthand : 屬性速記 

//ES5
var person = {
    firstname:'knock',
    lastname: 'qoo',
    age: 999
};
console.log(person);// ​​​​​{ firstname: 'knock', lastname: 'qoo', age: 999 }​​​​​

//ES6 : 
var firstname = 'knock';
var lastname = 'qoo2';
var age = 888;
var person2 ={
    firstname,
    lastname,
    age
};
console.log(person2);// ​​​​​{ firstname: 'knock', lastname: 'qoo2', age: 888 }​​​​​

/*******************************************************************/

//compute property name : 動態計算來產生物件的屬性名稱
function getKey(number){
    switch(number){
        case 1:
            return 'A1';
        case 2:
            return 'B1';
        case 3:
            return 'C1';
        default:
            return 'key';
    }
}

let key = 'Test1'; 

//動態產生key name
var person3 = {
    firstname:'qoo',
    lastname,
    [key]: 20,
    ['age'] : 55,
    [getKey(2)]: 'BBBB'
};

console.log(person3);// { firstname: 'qoo',​​​​​​​​​​  lastname: 'qoo2',​​​​​​​​​​  Test1: 20,​​​​​​​​​​  age: 55,​​​​​​​​​​  B1: 'BBBB' }​​​​​


/***************************************************************************/

//ES5 物件內宣告方法的方式
var person4 ={
    firstname:'test4',
    age: 10,
    haveBirthDay: function(){
        this.age++;
    }
}
person4.haveBirthDay();
console.log(person4);// ​​​​​{ firstname: 'test4', age: 11, haveBirthDay: [λ: haveBirthDay] }​​​​​

//ES6 物件內的方法宣告可省略function字樣
var person5 ={
    firstname:'test5',
    age: 20,
    haveBirthDay(){
        this.age++;
    }
}
person5.haveBirthDay();
console.log(person5);//​​​​​{ firstname: 'test5', age: 21, haveBirthDay: [λ: haveBirthDay] }​​​​​


