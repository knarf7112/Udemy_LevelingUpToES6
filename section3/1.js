
/**************************** Block Scope *********************************/

//let declaretion can keep scope value let能夠保持住區塊中的變數值
for(let i = 0; i < 5; i++){
    func(function(){
        console.log(i);//0,1,2,3,4
    })
}

for(var i = 0; i < 5; i++){
    func(function(){
        console.log(i);// 5,5,5,5,5
    })
}

function func(cb){setTimeout(cb);}


//function scope
{
    const fn = function(){ return 1; }
    console.log(fn());// 1
    {
        const fn = function(){ return 2; }
        console.log(fn()); //2
    }

    console.log(fn());// 1
}


'use strict';
{
    console.log(fn());// 3
    function fn(){ return 3; }
    console.log(fn());//3
    {
        console.log(fn());// 5
        function fn(){ return 4; }
        function fn(){ return 5; }
        console.log(fn());//5
    }

    console.log(fn());//3
}


