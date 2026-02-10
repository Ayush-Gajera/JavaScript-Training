//  Write a function downloadFile(url, callback) that simulates a 3-second delay using setTimeout.
// After the delay, log "Download complete: [url]" and execute the callback function.

function download(url,cb){
    cb();
    setTimeout(()=>{console.log(`download complted ${url}`);
},3000);
}
download("https:github/ayush-gajera/",()=>{console.log("start download");
});
