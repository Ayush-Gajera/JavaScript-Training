// Assignment 1
// Create a type IsNumber<T> .
// Create a type ExtractEmail<T> that extracts email type if present.


type ISNumber<T>=T extends number ? true: false;
type numberOne= ISNumber<number>;
type notNumber = ISNumber<string>

type Email = `${string}@${string}.${string}`;

type ExtractEmail<T> = T extends Email ? true : false;