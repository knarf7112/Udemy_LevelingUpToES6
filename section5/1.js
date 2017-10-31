
// default paramter

//ES5 set the default value
function buy( item, amount){
    if(amount === undefined ){
        amount;//
        amount = 1;
    }
    amount;//
    //invoke a fb, and update the user to have more of that item
    //logic . . .
    return ;
}

buy('pen'); 

function buy2( item = 'egg', amount = 1){

    item;//
    amount;//
   
    //invoke a fb, and update the user to have more of that item
    //logic . . .
    return ;
}
buy2(); // default parameter 'item' is 'egg', 'amount' is 1

buy2('pen',3); // 'item' is 'pen' and 'amount' is 3
