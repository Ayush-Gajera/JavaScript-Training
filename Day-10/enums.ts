/*Assignment 7: Enums
Create an enum for payment states (INITIATED, SUCCESS, FAILED)
Write a function that accepts only this enum
Try passing an invalid value and observe the error
Why enums are better than magic strings?*/
enum PaymentState{
  INITIATED,
  SUCCESS,
  FAILED
}
function processPayment(state: PaymentState):void{
  if (state === PaymentState.INITIATED){
    console.log("initiated");
  } else if (state === PaymentState.SUCCESS){
    console.log("successful");
  } else if (state === PaymentState.FAILED){
    console.log("failed");
  }
}

processPayment(PaymentState.INITIATED);
processPayment(PaymentState.SUCCESS);

// processPayment("SUCCESS"); this statement Error: argument of type '"SUCCESS"' is not assignable to parameter of type 'PaymentState'.

// enums are better than magic strings because they provide type safety and prevent invalid values in code.
// they also make the code more readable and easier to maintain.
