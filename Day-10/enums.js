/*Assignment 7: Enums
Create an enum for payment states (INITIATED, SUCCESS, FAILED)
Write a function that accepts only this enum
Try passing an invalid value and observe the error
Why enums are better than magic strings?*/
var PaymentState;
(function (PaymentState) {
    PaymentState[PaymentState["INITIATED"] = 0] = "INITIATED";
    PaymentState[PaymentState["SUCCESS"] = 1] = "SUCCESS";
    PaymentState[PaymentState["FAILED"] = 2] = "FAILED";
})(PaymentState || (PaymentState = {}));
function processPayment(state) {
    if (state === PaymentState.INITIATED) {
        console.log("initiated");
    }
    else if (state === PaymentState.SUCCESS) {
        console.log("successful");
    }
    else if (state === PaymentState.FAILED) {
        console.log("failed");
    }
}
processPayment(PaymentState.INITIATED);
processPayment(PaymentState.SUCCESS);
// processPayment("SUCCESS"); Error: argument of type '"SUCCESS"' is not assignable to parameter of type 'PaymentState'.
// enums are better than magic strings because they provide type safety and prevent invalid values in code.
// they also make the code more readable and easier to maintain.
