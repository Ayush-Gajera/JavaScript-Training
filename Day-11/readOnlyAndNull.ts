/*Assignment 5
Create a type ReadOnlyUser where all properties are readonly.
Create a type StringifiedUser where all properties become string.
Create a type OptionalAndNullableUser where all properties are optional and nullable.*/
type User={
    id:number,
    name:string

}
type ReadOnlyUser= Readonly<User>;

type StringifiedUser={
    [K in keyof User]:string
}
type OptionalAndNullableUser={
    [k in keyof User]?:User[k] | null;
}