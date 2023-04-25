"use strict";
let user;
user = {
    name: "nikhil",
    age: 23,
    post: "it",
};
class Car {
    drive() {
        console.log("Driving a car....");
    }
}
class Truck {
    drive() {
        console.log("driving a truck...");
    }
    loadCargo() {
        console.log("loading cargo...");
    }
}
const c = new Car();
const d = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        console.log(vehicle.loadCargo());
    }
}
function useAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.horseSpeed;
    }
    console.log(speed, "---- speed -----");
}
useAnimal({ type: "horse", horseSpeed: "500" });
