function downloadPromise(){
    return new Promise(function(resolve,reject){
        console.log("Started Downloading");
        setTimeout(function(){
            console.log("Download Complete");
            resolve() 
        },3000)
    })
}
downloadPromise().then(function(){
    console.log("After Download");  
})