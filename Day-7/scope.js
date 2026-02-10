// Q4. Global vs. Local Scope

// var status = "Offline";

// const server = {
//     status: "Online",
//     getStatus: function() {
//         return this.status;
//     }
// };

// console.log(server.getStatus());


var status = "Offline";

const server = {
    status: "Online",
    getStatus: function() {
        return this.status;
    }
};

console.log(server.getStatus());
// It will print "Online" because getStatus is a method of the server object and when called as server.getStatus(), "this" refers to the server object. this.status retrieves the status property of the server object, which is "Online".