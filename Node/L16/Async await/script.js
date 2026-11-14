let url = `https://catfact.ninja/fact`;

function fetchRequest() {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

// async - await syntax
async function getFacts() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log("Async ", data);
  } catch (error) {
    console.log(error);
  }
}

getFacts();

console.log("Running Here");
// fetchRequest();