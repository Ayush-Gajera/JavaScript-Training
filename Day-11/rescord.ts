/*Assignment 6
Create a type UserPublicProfile without email and isActive .
Create a Record that maps user IDs (string) to User objects.*/
type User ={
    id:number,
    name:string,
    email:string,
    isActive:boolean
}
const user:User={
    id:20,
    name:"Ayush",
    email:"AyushK@gmai.com",
    isActive:true

}
type UserPublicProfile = Omit<User, "email"| "isActive">;
type userRecord = Record<string, user>;