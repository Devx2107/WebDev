
let arr = [1, 2, 3, 4, 5];

for(let i = 0 ; i < arr.length; i++){
    console.log(arr[i]);
}

arr.forEach((val, index, a)=>{
    console.log(val, index, a);
})

arr.forEach(v=>{
    console.log(v);
})