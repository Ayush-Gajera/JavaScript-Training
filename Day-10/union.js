function getRole(role) {
    if (role) {
        return "admin";
    }
    else if (role == "Tester") {
        return "Tester";
    }
    else {
        return "Guest";
    }
}
const role = getRole("Guest");
console.log(role);
function getUserRole(user) {
    (user.role == "Admin") ? console.log("Hii Admin") : console.log("Hii Guest");
}
const Ayush = {
    role: "Admin"
};
getUserRole(Ayush);
