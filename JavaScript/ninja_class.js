function Ninja(name){
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;
    this.sayName = function(){
        console.log("My ninja name is " + this.name + "!");
    }
    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    }
    this.drinkSake = function(){
        console.log("Your health is now " + (this.health + 10));
    }
}

var ninja1 = new Ninja('Rolando');