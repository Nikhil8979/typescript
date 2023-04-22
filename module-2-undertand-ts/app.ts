const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  console.log(num, "- sum ");
};

const addHandler = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

let combineValue: (n1: number, n2: number) => number;
combineValue = add;
// console.log(combineValue(10, 29));

addHandler(10, 20, (result) => {
  console.log(result, "-- result ----");
});
