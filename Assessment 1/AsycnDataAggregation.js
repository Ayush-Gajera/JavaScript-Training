function user(){
    // return Promise.resolve({"user":"Ayush"});
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            reject({"user":"Ayush"});
        },3000);
    })
}
function postCount(){
    return Promise.resolve({"postCount":150});
}
function comment(){
    return Promise.resolve({"comment":"Rudrik Gupta" });
}

async function dataAggregation(params) {
   return Promise.all([user(), postCount(), comment()])
   .then(([r1,r2,r3]) => {return{
    ...r1,
    ...r2,
    ...r3
   }})
   .catch((err)=>{console.log(err);
   })
}
const output =dataAggregation();
output.then((res)=>console.log(res));