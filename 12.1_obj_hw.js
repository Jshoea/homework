//Part 1
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model =model;
        this.year = year;
    }
    honk () {
        return "beep";
    }
    tostring () {
        return `The vehicle's a${this.make} ${this.model} from  ${this.year}`;
    }
}

//Part 2
class Car extends Vehicle {
    constructor(make,model, year) {
        super(make,model,year);
        this.numWheels = 4;
    }
}

//Part 3
class Motorcycle extends Vehicle {
    constructor(make,model, year) {
        super(make,model,year);
        this.numWheels = 2;
    }
    revEngine () {
        return "vroom!!";
    }
}

class Garage {
    constructor (capacity) {
        this.vehicles =[];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            //this here says that if we do not have vehicle that is under car or motorcycle
            return "only vehicles are allowed in here"

        }
        if(this.vehicles.length >= this.capacity) {
            return "sorry, we're full";
        }
        this.vehicle.push(newVehicle);
        return "vehicle added";
    }
}

