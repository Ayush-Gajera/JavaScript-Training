/*Assignment 4
Create a constant adminUser 
Create a type from it using typeof .
Add a new property and observe how the type changes automatically.*/

const adminUser = {
  username: "admin",
  role: "superuser",
};

type adminUserType = typeof adminUser;

adminUser.name="Ayush";