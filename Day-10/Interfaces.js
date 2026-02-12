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
function printUserDetails(user) {
    console.log(`User id: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
}
const adminUser = {
    id: 1,
    name: "Ayush",
    email: "Ayush@g,com",
    role: "admin",
    permissions: ["add new user", "edit user info"]
};
const customerUser = {
    id: 2,
    name: "Dhruv",
    email: "Dalo@gmail.com",
    role: "customer",
    purchaseHistory: ["Brush", "ring"]
};
printUserDetails(adminUser);
printUserDetails(customerUser);
function apiResponseFunction(response) {
    if (response.success) {
        console.log("API Success:", response.data);
    }
    else {
        console.log("API Failed:", response.message);
    }
}
const apiResponseExample = {
    success: true,
    message: "successful",
    data: ["pen", "paper"],
    statusCode: 200
};
apiResponseFunction(apiResponseExample);
const product1 = {
    id: 1,
    name: "brush",
    price: 20,
};
console.log(product1);
