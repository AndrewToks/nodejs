


download("http://busand.png"). 
// then(resize).
then(upload).
then(function(uploadedUrl){
    console.log("File was uploaded to " + uploadedUrl);
}).catch(function(err){
    console.error(err)
})