/*Create a service class exposing only required public methods
Keep internal data private
Explain which members should be accessible and why
Create a class with public, private, and protected members
Try accessing them outside the class
Which members should be exposed and why? */
class UserService{
  private users:string[]=[];
  public addUser(name:string):void{
  this.users.push(name);
  }
  public getUsers():string[]{
    return this.users;
  }
  protected logAction(action:string):void{
    console.log("action:",action);
  }
  
}

const service = new UserService();
service.addUser("Ayush");
console.log(service.getUsers());

/*
public methods getUsers and addUsers should be accessible because they are public so 
we can use it via class object any where in the program.
*/
class adminService extends UserService{
  public admin:string[]=[];
  public addAdmin(name:string):void{
  this.admin.push(name);
  }
  public log(action:string):void {

    this.logAction(action);
  }
}
const admin = new adminService();
admin.addUser("Tirth");
admin.log("login");
/*
only public member and function are exposed only if we extend class so we can access perent 
class protected member too but we can use those protected member in only inside the subclass class means
we should make wrapper to access those members we can't use it direcly via object. here I use log wrapper to call logAction method.
we can not access privet member outside the class. it gives error.
*/