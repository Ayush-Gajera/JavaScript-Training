/* Assignment 5: Type Aliases
Create reusable aliases for union and intersection types
Refactor earlier assignments to use these aliases
Observe how readability improves
Create a type alias for string | number
Use it in two variables
How does this improve readability?
*/
type ID = string | number;
type UserBase = {
  name: string;
  email: string;
};
type Permission = {
  isAdmin: boolean;
};

type AdminUser = UserBase & Permission;
const currentUserId: ID = 101;

const manager: AdminUser = {
  name: "Ayush",
  email: "Ayush@charusat.edu.in",
  isAdmin: true
};

/*
type alice are use to maintain code redability. Without type alice if want to use union so we have to declare union
every time when we declare varibale. 
*/