// ES6: Map


var obj = {
    'my cool key': 10 ,
    'my coll key2': 2
}

console.log(obj);// { 'my cool key': 10, 'my coll key2': 2  }

//Map initialize an array of array
const map = new Map([
    ['my awesome key', 10],
    ['key 2', { a: 'abc'} ]
]);

map
console.log(map);//Map { 'my awesome key' => 10, 'key 2' => { a: 'abc' } }

map.clear(); // similar Set.clear
console.log(map);//Map { }

map.set('key 3', [1,2,3]);
console.log(map);//Map { 'key 3' => [ 1, 2, 3 ] }
map.set('key 3', [1,2,3]);// repeat object can not set in
map.set('key 4', [4,5,5]);
map.set('key 5', 123);
let iterator1 = map.entries();

for( let [key, value] of iterator1){
    console.log([key, value]);
    /*
    [ 'key 3', [ 1, 2, 3 ] ]
    [ 'key 4', [ 4, 5, 5 ] ]
    [ 'key 5', 123 ]
    */ 
}

map.forEach( (value, key) =>{
    console.log(key, value);
    /*
     'key 3', [ 1, 2, 3 ] 
     'key 4', [ 4, 5, 5 ] 
     'key 5', 123 
    */ 
});

console.log(map.has('key 3'));// true
console.log(map.has('key 7'));// false 

 //get some key's value
console.log('key 3 value', map.get('key 3')); // [1, 2, 3]

//get values iterator
console.log('iterator', map.values());// iterator { [Iterator] }


//get map's key
console.log('攤平集合內的key',[...map.keys()]);// [ 'key 3', 'key 4', 'key 5' ]
//get map's value
console.log('攤平集合內的value', [...map.values()]);// [ 1, 2, 3 ], [ 4, 5, 5 ], 123
