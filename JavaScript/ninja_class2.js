function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    Ninja.prototype.sayName = function(){
        console.log("My ninja name is " + this.name + "!");
    }

    Ninja.prototype.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    }

    Ninja.prototype.drinkSake = function(){
        console.log("Your health is now " + (this.health + 10));
    }

    Ninja.prototype.punch = function(target){
        if(!(target instanceof Ninja)){
            console.log(target + " is not a ninja!")
        }
        else{
            target.health = target.health - 5;
            console.log(target.name + " was punched by " + this.name + " and lost 5 health!");
        }
    }

    Ninja.prototype.kick = function(target){
        if(!(target instanceof Ninja)){
            console.log(target + " is not a ninja!")
        }
        else{
            target.health = target.health - 15;
            console.log(target.name + " was kicked by " + this.name + " and lost 15 health!");
        }
    }
}

var blackNinja = new Ninja('Rolando');
var redNinja = new Ninja('Adrian');