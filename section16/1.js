// ES6

//ES5 : object copy
var obj = {
    name: 'bob',
    age: 10,
    location:'Taiwan Taipei',
    skills: {
        swimming: true
    }
};
var objCopy1 = {
    skills:{
        running: true
    }
};

//object copy
Object.keys(obj).forEach(function(key){
    objCopy1[key] = obj[key];
});

console.log(objCopy1);//​​​​​ 原本objCopy1的skills屬性被覆蓋了, { skills: { swimming: true },​​​​​​​​​​  name: 'bob',​​​​​​​​​​  age: 10,​​​​​​​​​​  location: 'Taiwan Taipei' }​​​​​

//ES6: object assign
var obj2 = {
    hasDog: true,
    dogName: 'Qoo',
    A: {
        obj2: 'this is obj2'
    }
};

var objCopy2 = {
    skills:{
        running: true
    }
};

//Object.assign(objCopy2, obj, obj2);
Object.assign(...[objCopy2, obj, obj2]);//會複製來源物件的第一層所有屬性名稱與值,還可一併再加入其它物件來複製

console.log(objCopy2);
/*
​​​​​{ 
  skills: { swimming: true },​​​​​
​​​​​  name: 'bob',​​​​​
​​​​​  age: 10,​​​​​
​​​​​  location: 'Taiwan Taipei',​​​​​
​​​​​  hasDog: true,​​​​​
​​​​​  dogName: 'Qoo',​​​​​
​​​​​  A: { obj2: 'this is obj2' } 
}​​​​​
*/