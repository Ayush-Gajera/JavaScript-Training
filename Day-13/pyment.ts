// Create a PaymentState discriminated union.
// Add exhaustive checking to handle all states.
// Create a generic ApiResponse<T> for products.
// Write a type guard to check if response is success.

type PaymentState =
  | { state: "loading" }
  | { state: "success"; transactionId: string }
  | { state: "error"; message: string };

function handlePayment(payment: PaymentState): string {
  switch (payment.state) {
    case "loading":
      return "processing";
    case "success":
      return "paid";
    case "error":
      return "error";
    default:
      const exhaustiveCheck: never = payment;
      return exhaustiveCheck;
  }
}

type ApiResponse<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: string };

interface Product {
  id: number;
  name: string;
}

function isSuccess<T>(
  response: ApiResponse<T>,
): response is { status: "success"; data: T } {
  return response.status === "success";
}
const response: ApiResponse<Product> = {
  status: "success",
  data: { id: 1, name: "Laptop" },
};
if (isSuccess(response)) {
  console.log(response.data.name);
}
