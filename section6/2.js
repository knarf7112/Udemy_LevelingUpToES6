//
//如果想pirnt出如:斜線 等等的特殊符號,須使用.raw方法
function tag(strings, ...values){
    console.log(strings.raw[0]);// 'hello my name\nis bob, and my age is\n 10​​​​​'
    console.log(strings[0]);
    /* '​​​​​hello my name​​​​​
    ​​​​​is bob, and my age is​​​​​
    ​​​​​ 10​​​​​'
    */

}

const message = tag`hello my name\nis bob, and my age is\n 10`;

//Question 4:
function error (strings, err) {
    error = `status: ${err.status}, message: ${err.message}`
    return `${strings[0]}{${error}}`
}
 
const err = {
    message: 'oh no, an error!',
    status: 404
}
 
const message3 = error`An error has occurred: ${err}`
 
console.log(message3);//An error has occurred: {status: 404, message: oh no, an error!}​​​​​