// ES6 Promise

function getName(callback){
    setTimeout( () =>{
        //console.log('knock');
        callback('knock');
    }, 1000);
}

function getAge(callback){
    setTimeout( () =>{
        callback(10);
    }, 1000);
}

function getXXX(callback){
    setTimeout( () =>{
        callback('ohter information ... ');
    }, 1000);
}

//callback hell : 不斷的回呼方法,造成方法層級越來越深, callback地獄
getName((name) =>{
    console.log('name',name);//​​​​​name knock​​​​​
    getAge( (age) => {
        console.log('name',name);//​​​​​name knock​​​​​
        console.log('age', age);//​​​​​age 10​​​​​
        getXXX( (otherInfo) =>{
            console.log('name',name);//​​​​​name knock​​​​​
            console.log('age', age);//​​​​​age 10​​​​​
            console.log('other Info', otherInfo);// other Info ohter information ... ​​​​​
        })
    });
}); 

//因為不知道要如何向上面利用scope就可以直接取得外層變數值,所以只能利用外部來暫放callback回來的變數值
let outsideName = null;
let outsideAge = null;

//利用Promise串接方式改寫原本的callback hell
new Promise((resolve, reject)=> {
    getName(resolve);
}).then( name => {
    console.log(name); // knock
    outsideName = name;

    return new Promise((resolve, reject)=>{
        getAge(resolve);
    });
}).then( age => {
    console.log(outsideName, age);// knock 10
    outsideAge = age;

    return new Promise( (resolve, reject) => {
        getXXX(resolve);
    });
}).then( otherInfo => {
    console.log(outsideName, outsideAge, otherInfo);//knock 10 ohter information ...
});


//---------------------------------------------------------
//Refactor 宣告方法
function getName2(){
    return new Promise( (resolve, reject) =>{
        setTimeout( ()=>{
            resolve('knock');
        }, 500);
    });
}

function getAge2(){
    return new Promise( (resolve, reject) =>{
        setTimeout( ()=>{
            resolve(10);
        }, 1000);
    });
}

function getAge2_error(){
    return new Promise( (resolve, reject) =>{
        setTimeout( ()=>{
            reject('an error has occur ... getAge2_error()');
        }, 1000);
    });
}

function getAge2_error2(){
    return new Promise( (resolve, reject) =>{
        //throw new Error('throw an error ...');
        var obj = {}
        obj.x.y = [];
    });
}

function getXXX2(){
    return new Promise( (resolve, reject) =>{
        setTimeout( ()=>{
            resolve('ohter information ... ');
        }, 1000);
    });
}

//類似LinkList結構頭尾相接的鏈狀結構
getName2()
    .then( name=>{
        console.log(name);

        return getAge2();
    })
    .then( age =>{
        console.log(age);
    })
    .then(getXXX2) //直接放一個會回傳Promise的方法名稱也可
    .then( otherInfo =>{
    console.log(otherInfo);

    return 'End ...';
}).then( s =>{
    console.log(s); //End ...
});

//------------------以下是比較乾淨的方式------------------------------
//all方法會跑完所有Promise內的resolve方法,後面接的then方法會等到所有的resolve都執行完成,才會做並將執行結果的資料帶入
Promise.all([
        getName2(), //Promise會先跑此方法,然後等待到跑到resolve方法完成後,再跑下一個方法
        getAge2(),
        getXXX2()
    ])
    //然後當上面所有的resolve方法都跑完了,就會接者跑此then方法
    .then( (...args) =>{
        console.log(args);//​​​​​ [ [ 'knock', 10, 'ohter information ... ' ] ]​​​​​
    });


//race方法會將第一個取得的resolve方法執行完就回傳給後面的then方法,但其它的promise仍然會完成,只是返回的資料就不會帶入then方法了
Promise.race([
        getName2(), //Promise會先跑此方法,然後等待到跑到resolve方法完成後,再跑下一個方法
        getAge2(),
        getXXX2()
    ])
    .then( (...args) =>{
        console.log(args);// [ 'ohter information ... ' ]
    });

//------------------以下是異常處理------------------------------
//當某個promise有遇到錯誤時,會在catch方法將reject方法,但其它promise仍然會執行
Promise.all([
        getName2(), //Promise會先跑此方法,然後等待到跑到resolve方法完成後,再跑下一個方法
        getAge2_error(),
        getXXX2()
    ])
    .then( (...args) =>{
        console.log(args);// [ [ 'knock', 10, 'ohter information ... ' ] ]
    })
    .catch(err => {
        console.log(err);// an error has occur ... getAge2_error()
        return 'want to continue?';
    }).then((msg)=>{
        console.log(msg);//want to continue?
        console.log('continue run ...');//continue run ...
    });

//當直接在Promise拋異常時,catch方法仍會被調用,所以即使reject方法沒被調用,仍然會invoke catch方法
Promise.all([
        getName2(), //Promise會先跑此方法,然後等待到跑到resolve方法完成後,再跑下一個方法
        getAge2_error2(),
        getXXX2()
    ])
    .then( (...args) =>{
        console.log(args);// [ [ 'knock', 10, 'ohter information ... ' ] ]
    })
    .catch(err => {
        console.log(err);// [TypeError: Cannot set property 'y' of undefined]
        return 'want to continue?';
    }).then((msg)=>{
        console.log(msg);//want to continue?
        console.log('continue run ...');//continue run ...
    });

