// Create a class Device with a constructor that takes brand and powerStatus (boolean). Add a method togglePower() that switches the status.
// Create a sub-class SmartLight that extends Device.
// It should have an additional property brightness (0-100).
// It should have a constructor that uses super() to pass the brand to the parent.
// Override the togglePower() method: When the power is turned ON, it should also log: "Light is glowing at [brightness]% brightness".

class Device{
    constructor(brand,powerStatus)
    {
        this.brand=brand;
        this.powerStatus=powerStatus;
    }
    togalePower(){
        this.powerStatus=!this.powerStatus;
        console.log(this.powerStatus);
        
    }
}

class SmartLight extends Device{

    constructor(brightness)
    {
        super("Apple","true");
        this.brightness=brightness;
    }
    togalePower()
    { 
        if(this.powerStatus=="true"){
            console.log(`Light is glowing at ${this.brightness}% brightness`);
            
        }else{
            console.log("nothing");
            
        }
        
    }
}

const Light= new SmartLight(90);
Light.togalePower();

