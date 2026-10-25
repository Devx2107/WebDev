let url = `https://meowfacts.herokuapp.com/`;

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    let facts = res.data;
    console.log(facts);
  });

console.log("Running code");