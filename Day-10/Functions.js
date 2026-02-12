/*Assignment 8: Typed Functions
Write a function with required and optional parameters
Define return types explicitly
Create a small utility function that would exist in a real project
Write a function with one required and one optional parameter
Call it with and without the optional argument
How does TypeScript enforce correctness here?
*/
function greetUser(name, age) {
    if (age !== undefined) {
        return `Hello ${name}, you are ${age} years old.`;
    }
    return `Hello ${name}.`;
}
console.log(greetUser("Ayush", 22));
console.log(greetUser("Ayush"));
function calculateFinalPrice(price, discountPercent) {
    const discountAmount = (price * discountPercent) / 100;
    return price - discountAmount;
}
const finalPrice = calculateFinalPrice(1000, 10);
console.log("Final Price:", finalPrice);
function sendEmail(to, greeting) {
    if (greeting) {
        return `email: ${to} "${greeting}".`;
    }
    return ` email :${to}.`;
}
console.log(sendEmail("a@g.com", "Hiii"));
console.log(sendEmail("a@g.com"));
/*
TypeScript enforce correctness by checking parameter types at compile time.
if we are pass a wrong data type typescript immediately shows an error.
for optional parameters we use ? so typescript allows us to exclude.
*/ 
