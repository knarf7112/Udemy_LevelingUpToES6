//ES6: async / await
//node 8.x 才支援async await功能
function getName(){
    /*
    const myPromise = new Promise( (resolve, reject)=>{
        resolve('Knock');
    });
    */
    return Promise.resolve('Knock');// return a promise object and carry PromiseValue
}

function getAge(){
    return Promise.resolve( 10 );
}

function getAge_error(){
    return Promise.reject('an error occured ...');
}

//
async function main (){
    try{
        const name = await getName();//wait for execute resolve ,等到執行完resolve方法
        //類似section13的2.js的非同步generator與yield混用方式
        const age = await getAge_error(); //當reject執行後會使catch方法捕獲error
        console.log(name, age); // knock
    } catch (err){
        console.log(err);
    }
};

async function main2(){
    try{
        //use destructor to get result from promise complete
        const [name, age] = Promise.all([
            getName(),
            getAge_error()
        ]);

        console.log(name, age);

    } catch (err){
        console.log(err);
    }

}

main();

