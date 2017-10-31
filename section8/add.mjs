
export * from './multiply';//將另一個模組也輸出

export function add (a, b) {
    return a + b;
}


export function subtract (a, b) {
    return a - b;
}

export const  obj = {
    name: 'Knock',
    age: 18
}

let def = {
    hello: 'this is default',
    addResult1 : add(3, 5),
    subtractResult1: subtract(3, 1),
    add
};

export  default  def;