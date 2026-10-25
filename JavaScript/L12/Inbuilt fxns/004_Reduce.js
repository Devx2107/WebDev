let arr = [1, 2, 3, 4, 5];

// Array ko single value mei convert kar dega
// acc-> accumulator
let sum = arr.reduce(function (acc, val, indx, a) {
  return acc + val;
});

// Step1 : acc(1), val(2)
// Step2 : acc(3), val(3)
// Step3 : acc(6), val(4)
// Step4 : acc(10), val(5)
// Step5 : returns 15
console.log(sum);

// [1, 2, 3, 4, 5]
let prod = arr.reduce(function (acc, val, indx, a) {
  return acc * val;
}, 1); // initially yaha jo likhoge vo acc mei chala jaega...


console.log(prod)