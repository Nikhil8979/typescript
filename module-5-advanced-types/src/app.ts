type Admin = {
  name: string;
  age: number;
};

type Employee = {
  post: string;
};

type ElevatedEmployee = Admin & Employee;

let user: ElevatedEmployee;

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

type Vehicle = Car | Truck;

const c = new Car();
const d = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    console.log(vehicle.loadCargo());
  }
}

// useVehicle(c);
// useVehicle(d);

interface Bird {
  type: "bird";
  flyingSpeed: string;
}

interface Horse {
  type: "horse";
  horseSpeed: string;
}

type Animal = Bird | Horse;

function useAnimal(animal: Animal) {
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
