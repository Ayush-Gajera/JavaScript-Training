async function retry(url,count)
{
    if(count==0) return Promise.resolve("Limit hit");
    try{
        const res= await fetch(url);
        
        if(!res.ok)
        {
            throw new Error("rudrik");
        }
        
        
        
    }
    catch(err){
        console.log(`retry!!!`);
        
        retry(url,--count);
        
    };

}

retry("https://jsonplaceholder.typicode.com/todo0s/",3);