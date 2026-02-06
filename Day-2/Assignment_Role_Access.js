const role="Mana"
switch(role){
    case "Admin":
        console.log("You have full access")
        break;
    case "user":
        console.log("You have limited access")
        break;
    case "Manager":
        console.log("You have Moderate access")
        break;
    default:                    
        console.log("Invalide Role")
}