// Assignment 4: Intersection Types
// Create an Order using intersection ( & )
// Create the same model using interfaces and extends
// Remove one required property and observe the compiler error
// Decide which approach feels clearer and why
// Create two small object types and combine them using intersection ( & )
// Create the same structure using interfaces and extends
// Try removing a required property and observe the compiler error
// Identify when intersection is better than union
type idType={
    id:number;
}
type statusType={
    status:"failed" | "success";
}
type Order = idType & statusType;

interface Success{
    id:number;
}
interface status{
    status:"failed" | "success";
}
interface orderInterface extends Success, status {}

const orderCheck :Order={
   id:20,
   status:"success"
}

/*
if we remove one type from order type or orderInterface it will generate error because we use intersection and extends so
if there are any field is missing so complier generate error property is missing.
use of intersection and extends depends on use case if we are dealing with simple string, array or number at that time
we can user intersection and if we dealing with object interface and extends are more preferable.
*/