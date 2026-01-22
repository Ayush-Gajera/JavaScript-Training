const users={
    name:"Ayush",
    Address:{
        foorNo:50,
        location:"Dubai",
        pincode:[1234,4568]

    }
}

function deepCopy(user){
    if(user===null ||typeof user!=="object") {
        return user;
    }
    const copy= Array.isArray(user)?[]:{};
    for(let key in user)
    {
        copy[key]=deepCopy(user[key]);
    }
    return copy;
}

const ayush= deepCopy(users);
ayush.Address.location="Gujarat";
console.log(ayush);
console.log(users);

