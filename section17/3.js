//ES6 : WeakMap & WeakSet


const map1 = new Map();
const weakMap1 = new WeakMap();

(function(){
    let a = { x: 12 };
    let b = { y: 12 };
    
    map1.set(a, 1);
    console.log(map1);// Map { x: 12 } => 1 }  //key is object and value is 1
    weakMap1.set(b, 1);// //weakMap key only can use Object reference
    console.log(weakMap1);// WaekMap {  }

}());

// garbage collection
console.log([...map1.entries()]);// [ { x: 12 } ]
map1.delete( { x: 12 });// 無法刪除但因已無法取得參考的變數a,所以背劇了
console.log([...map1.entries()]);// [ { x: 12 } ]

//-----------------------------------------------------------------------------
const set1 = new Set();
const weakSet1 = new WeakSet();

(function(){
    let a = { x: 12 };
    let b = { y: 12 };
    
    set1.add(a);
    console.log(set1);// Set { x: 12 } }  
    weakSet1.add(b);
    console.log(weakSet1);// WaekSet {  }

}());

// garbage collection : 上面的IIF已結束,無法取得物件參考的指標情況下
console.log([...set1.entries()]);// [ [ { x: 12 }, { x: 12 } ] ]
set1.delete( { x: 12 });// 無法刪除但因已無法取得參考的變數a,所以背劇了
console.log([...set1.entries()]);// [ [ { x: 12 }, { x: 12 } ] ]

console.log(set1.has({ x: 12}));// false , 已經無法取得物件b的參考了,所以只能使用此方式來看能不能當做物件參考,但結論是不行的