var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    console.log(num, "- sum ");
};
var addHandler = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
var combineValue;
combineValue = add;
// console.log(combineValue(10, 29));
addHandler(10, 20, function (result) {
    console.log(result, "-- result ----");
});
