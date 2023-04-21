const add = (
  num1: number,
  num2: number,
  showResult: boolean,
  phrase: string
) => {
  const sum = num1 + num2;
  if (showResult) {
    console.log(phrase + sum);
  } else {
    return sum;
  }
};

//  working with string,number,boolean
let number1 = 5;
const number2 = 10;
const showResult = true;
const phrase = "Result is : ";
// add(number1, number2, showResult, phrase);

//working with object , array , tuples

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Nikhil Singh",
//   age: 10,
//   hobbies: ["sports"],
//   role: [1, "admin"],
// };
// person.role[0] = 10;
let favouriteSports: (string | number)[];
favouriteSports = ["basket ball", 1];
// console.log(person.age);
const READ_ONLY = "READ ONLY";
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: "Nikhil Singh",
  age: 10,
  hobbies: ["sports"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("admin");
}
