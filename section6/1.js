//String Template Interpolation

var age = 10;
var name = 'Bob';
//ES5
var message = 'My name is ' + name + '. My age is ' + age;
console.log(message);// '​​​​​My name is Bob. My age is 10​​​​​'

//ES6 : String Template Interpolation
const message2 = `My name is ${name} . My age is ${age}`;
console.log(message2);//'​​​​​My name is Bob. My age is 10​​​​​'

//ES5 multi line
const message3 = 'My name is\n' +
                name + 
                ' .\nMy age is\n' + 
                age;
console.log(message3);// '​​​​​My name is 
                      //  Bob. 
                      //  My age is 
                      //  10​​​​​'

const message4 = `My name is 
${name} . 
My age is 
${age}`;
console.log(message4);// '​​​​​My name is 
                      //  Bob.
                      //  My age is 
                      //  10​​​​​'

/*******************************************************************/
const activities = [
    'running',
    'jumping',
    'swimming'
];
const activitiesBag = activities
                        .map( activity =>{
                                return `${activity}!!!`;
                        })
                        .join(', ');

const message5 = `My name is ${name} and i enjoy ${activitiesBag}`;


console.log(message5);// '​​​​​My name is Bob and i enjoy running!!!, jumping!!!, swimming!!!​​​​​'


/*******************************************************************/

//

function tag(strings, ...values){
    let message = '';
    console.log(strings);//​​​​​[ 'hello my name is ', '. my ahe is ', '.' ]​​​​​
    console.log(values);//[ 'Bob', 10 ]​​​​​
    strings.forEach((str, index) =>{
        message += str;
        if(index < values.length){
            message += `<b>${values[index]}</b>`
        }
    });

    return message; 
}

//可用來轉換字串處理,不用使用小括號
const result = tag`hello my name is ${name}. my ahe is ${age}.` //會將參數拆分兩塊傳入方法, 
//一塊是   [ 'hello my name is ', '. my ahe is ', '.' ]
//另一塊是​ ​​​​[ 'Bob', 10 ]​​​​​
console.log(result);// '​​​​​hello my name is <b>Bob</b>. my ahe is <b>10</b>.​​​​​'

