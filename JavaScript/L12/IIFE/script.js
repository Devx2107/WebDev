let btn = document.querySelector(".btn");
let inp = document.querySelector(".inp");
let factlist = document.querySelector(".factlist");

function updateFactsList(facts) {
  factlist.innerHTML = "";
  facts.forEach((f) => {
    let li = document.createElement("li");
    li.innerText = f;
    factlist.appendChild(li);
  });
}

btn.addEventListener("click", () => {
  let factsCount = inp.value || 1;
  factsCount = factsCount >= 1 && factsCount <= 10 ? factsCount : 1;

  let url = `https://meowfacts.herokuapp.com/?count=${factsCount}`;
  axios
  .get(url).then((res) => {
    let data = res.data.data;
    console.log(data);
    updateFactsList(data);
  });
});