const users = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" }
];

var user=users.reduce((acc,result)=>{
if(result.role=='admin')
{
    acc.admin.push(result);
    
}else{
    acc.user.push(result);
}
return acc;
},{admin:[],user:[]})

console.log(user);
