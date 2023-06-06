const Logger = (logText: string) => {
  return function (constructor: Function) {
    console.log(logText);
    console.log(constructor);
  };
};

// @Logger("Person -- Logging")

const WithTemplate = (template: string, hookId: string) => {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        console.log(this.name, "---- name ");
        const h1Ele = document.querySelector("h1");
        if (hookEl) {
          hookEl.innerHTML = template;
          h1Ele!.textContent = this.name;
        }
      }
    };
  };
  // return function (constructor: any) {
  //   const hookEl = document.getElementById(hookId);
  //   if (hookEl) {
  //     hookEl.innerHTML = template;
  //   }
  //   const person = new constructor();
  //   const h1Ele = document.querySelector("h1");
  //   h1Ele!.textContent =this.name;
  // };
};

@WithTemplate(
  "<h1>My Name is Nikhil Singh.</h1> <button id='button'>Click</button>",
  "app"
)
class Person {
  name = "Nikhil";
  constructor() {
    console.log("creating person object...");
  }
}

const person = new Person();
// console.log(person);
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorators!");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor Decorator..");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method Descriptor...");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log4(target: any, name: string, position: number) {
  console.log("Parameter decorators ");
  console.log(target);
  console.log(name);
  console.log(position);
}
class Product {
  @Log
  title: string;
  private _price: number;
  @Log2
  setPrice(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Price must be greater than 0;");
    }
  }
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This Works";
  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button");

button?.addEventListener("click", p.showMessage);
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}
const registeredValidators: ValidatorConfig = {};
function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    [propName]: ["required"],
  };
}
function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    [propName]: ["positive"],
  };
}
function validate(obj: Object) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
}
class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}
const formEl = document.querySelector("form")!;
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;
  const title = titleEl.value;
  const price = +priceEl.value;
  const courseCreated = new Course(title, price);
  console.log(courseCreated);
});
