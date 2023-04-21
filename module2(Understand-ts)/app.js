var add = function (num1, num2, showResult, phrase) {
    var sum = num1 + num2;
    if (showResult) {
        console.log(phrase + sum);
    }
    else {
        return sum;
    }
};
//  working with string,number,boolean
var number1 = 5;
var number2 = 10;
var showResult = true;
var phrase = "Result is : ";
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
// let favouriteSports: (string | number)[];
// favouriteSports = ["basket ball", 1];
// console.log(person.age);
var READ_ONLY = "READ ONLY";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Nikhil Singh",
    age: 10,
    hobbies: ["sports"],
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log("admin");
}
