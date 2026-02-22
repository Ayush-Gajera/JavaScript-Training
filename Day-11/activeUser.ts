/*Assignment 2
Create a function activateUser that accepts only objects having isActive: boolean .
Create another function that requires both id and email .
Try passing invalid objects and observe TypeScript errors.*/
interface user{
    id:number,
    isActive:boolean,
}
function activateUser<T extends user>(user: T):T{

    user.isActive=true;
    return user;
}

 console.log(activateUser({ id: 20, isActive: false }));