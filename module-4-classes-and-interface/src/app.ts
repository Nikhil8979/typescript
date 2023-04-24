interface Named {
  name?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log("Hi my name is " + this.name);
    } else {
      console.log("hii");
    }
  }
}

let user: Greetable;
user = new Person();
// user = {
//   name: "Nikhil Singh",
//   greet(phrase) {
//     console.log("Hi My Name is " + this.name);
//   },
// };

user.greet("hello");
console.log(user);
