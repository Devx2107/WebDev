let p = new Promise((res, rej) => {
  setTimeout(function () {
    res("p successfull");
  }, 3000);
});

let p1 = new Promise((res, rej) => {
  setTimeout(function () {
    // res("p1 successfull");
    rej("Nahi chala p1");
  }, 4000);
});

let p2 = new Promise((res, rej) => {
  setTimeout(function () {
    res("p2 successfull");
  }, 5000);
});

// all -> Chalenge toh saare else ek bhi nahi
// Promise.all([p, p1, p2])
//   .then((x) => {
//     console.log(x);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// allSettled
// Promise.allSettled([p, p1, p2])
//   .then((x) => {
//     console.log(x);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// race
Promise.race([
  p,
  p1,
  p2,
  new Promise((res, rej) => {
    setTimeout(() => {
      rej("Timeout ho gaya");
    }, 2000);
  }),
])
  .then((x) => {
    console.log(x);
  })
  .catch((e) => {
    console.log(e);
  });
// any