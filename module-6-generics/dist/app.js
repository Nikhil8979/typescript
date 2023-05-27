"use strict";
// const names: Array<string> = [];
// names[0] = "1";
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Hi I am resolved");
//   }, 2000);
// });
// promise.then((data) => {
//   data.split("");
// });
// function merge<T extends object, U extends object>(obj1: T, obj2: U) {
//   return { ...obj1, ...obj2 };
// }
// const mergeObj = merge({ name: "Nikhil Singh" }, { age: 22 });
// console.log(mergeObj, "---- merge obj ---");
// interface Lengthy {
//   length: number;
// }
// const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
//   let descritionText = "Got No val";
//   if (element.length === 1) {
//     descritionText = "Got 1 element.";
//   } else if (element.length > 1) {
//     descritionText = "Got " + element.length + " elements.";
//   }
//   return [element, descritionText];
// };
// console.log(countAndDescribe("hii there!"));
// const extractAndConvert = <T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) => {
//   return obj[key];
// };
// console.log(extractAndConvert({ name: "NIkhil" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Nikhil");
textStorage.addItem("Pragya");
textStorage.addItem("Alok");
textStorage.removeItem("Alok");
console.log(textStorage.getItems());
//# sourceMappingURL=app.js.map