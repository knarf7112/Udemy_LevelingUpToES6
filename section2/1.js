
/********************** const **********************/
const x = {};

x['a'] = 1;

x;//variable X is immutable, but 

var codes = [1,2,3,4];



function appendCodes(users){
    codes = users.map(function(user){
        return user.code;
    });
}

appendCodes( [{
    code: 10
}]);

codes;//經過一層轉變codes變數內原本的資料都不見了,被置換成[10]

//so 使用const 可使變數產生不可變的特性,當整個備置換掉時就會發生異常了

/********************** let **********************/

console.log(a);

if(true){
    var a = 1;
}

{
    //console.log(q);
    let q = 123;
    console.log(q);
}
//console.log(q);

{
    let x = 1;
    x;
    {
        //let x = 2;
        x;
    }
    x;
}

