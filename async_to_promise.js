function someAsyncTask(callback){
    console.log("Beginning of Task");
    
    setTimeout(function(){
        console.log("End of Task");
        
        callback()
    },3000)
}

const someTaskPromise = function(){
    return new Promise(function (resolve,reject){
        someAsyncTask(resolve)
    })
}
someTaskPromise().then(function(){
    console.log("Task done successfully");
    
})