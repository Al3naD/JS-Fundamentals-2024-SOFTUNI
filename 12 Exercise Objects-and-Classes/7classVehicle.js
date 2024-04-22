class Vehicle {
    constructor(vehicType, vehicModel, vehicParts, vehicFuel) {
        this.type = vehicType;
        this.model = vehicModel;

        vehicParts.quality = vehicParts.engine * vehicParts.power;
        this.parts = vehicParts;
        this.fuel = vehicFuel;
    }

    drive(fuelloss) {
        this.fuel -= fuelloss;
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);