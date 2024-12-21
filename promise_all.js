function download(url){
    return new Promise (function (resolve,reject){
        if(!url.startsWith("http")){
            reject (new Error("url does not start with 'http' "));
        }else{
            console.log("Start download " + url);
            
            setTimeout(function(){
                let fileName = url.split('/').pop()
                resolve(fileName)
            },3000)
        }
    })
}

function resize(fileName){
    return new Promise (function (resolve,reject){
        if(!fileName.endsWith(".png")){
            reject(new Error("File is not png file"))
        } else {
            console.log("Start Resize "+ fileName);
            
            setTimeout(() => {
                let resizedFile = fileName.split('.')[0] + "-resized.png"
                resolve(resizedFile)
            }, 3000);
        }
    })
}

function upload(resizedFileName){
    return new Promise (function(resolve,reject){
        console.log("Start upload " + resizedFileName );
        
        setTimeout(() => {
            let uploadedUrl = "http://andrew.com/" + resizedFileName
            resolve(uploadedUrl)
        },3000);
    })
} 

Promise.all([
    download("http://busand.png"),
    download("http://andrew.png"),
    download("http://busayomi.png")
]).then(function(values){
        return values.map
}).catch(function(error){
    console.error(error);
    
})