let arr = [1, 2, 3, 4, 5];

/*
map function returns a new array with some updated values that user has provided
the logic for
- It never changes the original array
- It returns a new array with updated values
- Number of elements in original array and new array are same
*/
// map function has three things val, index and the array itself

let newArr = arr.map(function (val, indx, a) {
  return val * val;
});

console.log(newArr);
console.log(arr);