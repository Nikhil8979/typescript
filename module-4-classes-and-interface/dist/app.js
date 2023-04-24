"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log("Hi my name is " + this.name);
        }
        else {
            console.log("hii");
        }
    }
}
let user;
user = new Person();
// user = {
//   name: "Nikhil Singh",
//   greet(phrase) {
//     console.log("Hi My Name is " + this.name);
//   },
// };
user.greet("hello");
console.log(user);
