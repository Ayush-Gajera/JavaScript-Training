/*Assignment 7
Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.
Create a utility NonNullableFields<T> that removes null and undefined from all properties.
Apply both to User and test different scenarios.*/
type User = {
  id: number;
  name: string;
  email: string;
  age?: number | null;
};
type ReadonlyByKeys<T, K extends keyof T> = Readonly<Pick<T, K>> & Omit<T, K>;

type NonNullableFields<T> = {
  [key in keyof T]: NonNullable<T[key]>;
};
type cleanUser = NonNullableFields<User>;

const u1: cleanUser = {
  id: 1,
  name: "Ayush",
  email: "mail@test.com",
};
u1.age = null;
u1.age = 25;
type ReadonlyUser = ReadonlyByKeys<User,"id" | "email">;
const u2: ReadonlyUser = {
  id: 1,
  name: "Ayush",
  email: "ak@mail.com",
};
u2.id = 5;
u2.email = "new@gmail.com";
u2.name = "updated";