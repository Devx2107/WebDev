let arr = [1, 2, 3, 4, 5];

let newArr = arr.filter(function (val, index, a) {
  if (val % 2 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log(newArr);
console.log(arr);