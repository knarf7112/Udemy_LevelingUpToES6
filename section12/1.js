// Symbol Iterator object

const message = 'hello world';

//字串已實作Iterator,所以可以使用Symbol.iterator標記返回一個StringIterator物件
console.log(message[Symbol.iterator]);// ​​​​​[λ: [Symbol.iterator]]​​​​​

let stringIterator = message[Symbol.iterator]();

//for of 只會佚送Iterator物件
for(let char of stringIterator){
    console.log(char);// h, e, l, l, o,  , w, o, r, l, d
}

let val1 = stringIterator.next(); // 上面loop已經iterate完畢, 所以在做iterte也沒東西可推送了 
console.log(val1);//​​​​​{ value: undefined, done: true }​​​​​

stringIterator = message[Symbol.iterator]();//重新在產一個iterator

let current = stringIterator.next();
console.log(current);// ​​​​​{ value: 'h', done: false }​​​​​


while(!current.done){
    console.log(current.value);//h, e, l, l, o,  , w, o, r, l, d

    current = stringIterator.next();
}
//---------------------------------------------------------
//for in 和 for of 的差異
Array.prototype.property1 = function(){};

const arr = [1,2,3];

arr.test = 'test property';

// for of 只會佚送值
for(let val of arr){
    console.log(val);// 1, 2, 3
}

// for in 會佚送物件所有屬性
for(let index in arr){
    console.log(index); // 0, 1, 2, test, property1
}

//---------------------------------------------------------
// ES6: 讓物件有佚送能力
const codes = {
    [Symbol.iterator](){
        let cur = 0;
        return {
            next() {
                return { 
                    value: Math.random(), 
                    done: cur++ > 4 //佚送4次 
                }
            }
        }
    },
    next:'123',
    "qq":123
};

for(let code of codes){
    console.log(code);// 每次從value取得一個隨機值,共取四次
}


//---------------------------------------------------------
//Write an Iterable Object: 實作一個佚送物件每次回傳number的每一個digit
const obj = {
    number: 53820391,
    [Symbol.iterator] () {
        // TODO: implement me to print out all the digits of this.number
        let curr = 0;
        let numbers = this.number.toString();

        //回傳一個有next方法的物件,且next方法可以佚送回傳一個含有value和done屬性的物件
        return {
            next(){
                return {
                    value :  numbers[curr],
                    done : curr++ > numbers.length - 1
                }
            }
        }
    }
}


for(let digit of obj){
    //每次顯是一個位數
    console.log(digit);// 5, 3, 8, 2, 0, 3, 9, 1
}