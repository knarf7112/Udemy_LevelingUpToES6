//ES6 : Set (集合)
[1, 2, 3];// is set
[1, 2, 3, 3];// is not set

//ES6 : 要模擬集合的話只能使用object
var obj = {
    1: true,
    2: false,
    3: 123
};
console.log(obj);//{ '1': true, '2': false, '3': 123 }
obj[1] = 123;
console.log(obj);//{ '1': 123, '2': false, '3': 123 }

const set = new Set([1,2,3,4,3,3,4,2,2]);// 傳入一個iterable物件進去
const set2 = new Set('qoofuckkyou12332');// 傳入一個iterable物件進去
//只會保留不重複的資料集合
console.log(set);//Set { 1, 2, 3, 4 } 
console.log(set2);//Set { 'q', 'o', 'f', 'u', 'c', 'k', 'y', '1', '2', '3' }

set.add('Qoo');
set.delete(3);//
console.log(set);//Set { 1, 2, 4, 'Qoo' }
const entries = set.entries();
for( let [val] of entries){
    //destructor the entries
    console.log(val);// 1, 2, 4, 'Qoo'
}
const entries2 = [...set.entries()];//entry 會有key和value
console.log(entries2);//[ [ 1, 1 ], [ 2, 2 ], [ 4, 4 ], [ 'Qoo', 'Qoo' ] ]

console.log(set.has('Qoo'));// true : 會檢驗值是否存在於集合
console.log([...set.keys()]);// [1, 2, 4, 'Qoo'] : 取得set的keys
console.log([...set.values()]);// [1, 2, 4, 'Qoo'] : 取得set的values

set.forEach( value=>{
    console.log(value);// 1, 2, 4, Qoo
})


set.clear();
console.log(set);//Set { }