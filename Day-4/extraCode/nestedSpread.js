const user = {
  name: "Alice",
  settings: {
    theme: "dark",
    notifications: true
  }
};

const updatedUser = { ...user };
updatedUser.name = "Bob";
updatedUser.settings.theme = "light";

console.log(user.name);           // updateUser can not change the value of user bcz  we use spread operator to make object shallow copy. 
console.log(user.settings.theme); // we use spread operator so nested object pass through refrance so if we chnage it's value by using updateUser so it also affect to user too.