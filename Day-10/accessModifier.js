var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*Create a service class exposing only required public methods
Keep internal data private
Explain which members should be accessible and why
Create a class with public, private, and protected members
Try accessing them outside the class
Which members should be exposed and why? */
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [];
    }
    UserService.prototype.addUser = function (name) {
        this.users.push(name);
    };
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    UserService.prototype.logAction = function (action) {
        console.log("action:", action);
    };
    return UserService;
}());
var service = new UserService();
service.addUser("Ayush");
console.log(service.getUsers());
/*
public methods getUsers and addUsers should be exposed because they are public so
we can use it via class object any where in the program.
*/
var adminService = /** @class */ (function (_super) {
    __extends(adminService, _super);
    function adminService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.admin = [];
        return _this;
    }
    adminService.prototype.addAdmin = function (name) {
        this.admin.push(name);
    };
    return adminService;
}(UserService));
var admin = new adminService();
admin.addUser("Tirth");
admin.logAction("login");
