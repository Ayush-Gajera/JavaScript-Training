/*Assignment 6: Interfaces
Create Admin and Customer interfaces using a common base
Extend the base interface to add role-specific properties
Write a function that accepts BaseUser
Pass both Admin and Customer objects to the function
Design an interface for an API response object
Create a function that accepts this interface as a parameter
Extend the interface and reuse it
Create an interface for a Product
Create a variable that follows this interface*/

interface BaseUser{
  id: number;
  name: string;
  email: string;
}
interface Admin extends BaseUser{
  role: "admin";
  permissions: string[];
}
interface Customer extends BaseUser{
  role: "customer";
  purchaseHistory: string[];
}
function printUserDetails(user:BaseUser):void{
  console.log(`user id: ${user.id}`);
  console.log(`name: ${user.name}`);
  console.log(`email: ${user.email}`);
}
const adminUser: Admin ={
  id: 1,
  name: "Ayush",
  email: "Ayush@g,com",
  role: "admin",
  permissions: ["add new user", "edit user info"]
};
const customerUser: Customer ={
  id: 2,
  name: "Dhruv",
  email: "Dalo@gmail.com",
  role: "customer",
  purchaseHistory: ["Brush", "ring"]
};
printUserDetails(adminUser);
printUserDetails(customerUser);
interface ApiResponse{
  success:boolean;
  message:string;
  data:string[];
}
function apiResponseFunction(response:ApiResponse):void{
  if (response.success) {
    console.log("API success:",response.data);
  } else {
    console.log("API failed:",response.message);
  }
}
interface ExtendedApiResponse extends ApiResponse{
  statusCode:number;
}
const apiResponseExample: ExtendedApiResponse={
  success: true,
  message:"successful",
  data:["pen", "paper"],
  statusCode:200
};
apiResponseFunction(apiResponseExample);
interface Product{
  id:number;
  name:string;
  price:number;

}
const product1:Product={
  id:1,
  name:"brush",
  price:20,
};

console.log(product1);