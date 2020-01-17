class Bike {
    price: number;
    max_speed: String;
    miles: number;

    constructor(price: number, max_speed: String) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo = () => { 
        console.log('The bike costs $(this.price), it has a max speed of $(this.max_speed), and has traveled $(this.miles) miles')
        return this
    }
    ride = () => { 
        console.log('Riding')
        this.miles += 10
        return this
    }
    reverse = () => { 
        console.log('On reverse')
        this.miles -= 5
        return this
    }
}

let bike1 = new Bike(100, "50mph");
let bike2 = new Bike(580, "75mph");
let bike3 = new Bike(1250, "215mph");

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();