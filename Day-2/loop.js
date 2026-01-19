// for (let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(`this is iteration number ${i}`);
//     }, 1000);  

    
// }
const user = {
     name:"ayush",
     greet(){
        console.log(`hello ${this.name}`);
       
     }

}
let x=user.greet.bind(user);
x();
