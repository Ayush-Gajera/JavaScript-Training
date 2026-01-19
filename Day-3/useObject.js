const user ={
name:'Ayush',
email:'ayush@gmail.com',

settings:{
theme:'light'
},

ptintInfo:function(){
    console.log(`name is ${this.name}theme is ${this.settings.theme}`);
}
}

user.ptintInfo();
const updateUser ={...user,name:'Admin'};
updateUser.ptintInfo();