"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const Logger = (logText) => {
    return function (constructor) {
        console.log(logText);
        console.log(constructor);
    };
};
// @Logger("Person -- Logging")
const WithTemplate = (template, hookId) => {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                const hookEl = document.getElementById(hookId);
                console.log(this.name, "---- name ");
                const h1Ele = document.querySelector("h1");
                if (hookEl) {
                    hookEl.innerHTML = template;
                    h1Ele.textContent = this.name;
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
let Person = class Person {
    constructor() {
        this.name = "Nikhil";
        console.log("creating person object...");
    }
};
Person = __decorate([
    WithTemplate("<h1>My Name is Nikhil Singh.</h1> <button id='button'>Click</button>", "app")
], Person);
const person = new Person();
// console.log(person);
function Log(target, propertyName) {
    console.log("Property Decorators!");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor Decorator..");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method Descriptor...");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("Parameter decorators ");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    setPrice(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Price must be greater than 0;");
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "setPrice", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
function AutoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
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
    constructor() {
        this.message = "This Works";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", p.showMessage);
const registeredValidators = {};
function Required(target, propName) {
    registeredValidators[target.constructor.name] = {
        [propName]: ["required"],
    };
}
function PositiveNumber(target, propName) {
    registeredValidators[target.constructor.name] = {
        [propName]: ["positive"],
    };
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const formEl = document.querySelector("form");
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const courseCreated = new Course(title, price);
    console.log(courseCreated);
});
