function SuperHero() {}
SuperHero.prototype.power = "Flight";

const superman = new SuperHero();
superman.power = "Strength"; // Shadowing

delete superman.power; // Deleting the property

console.log(superman.power); // Flight bcz it delete remove property of self obj but i has power in it's prototype.