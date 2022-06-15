// -----------------
// FETCH
// -----------------

fetch("data.json")
  .then((res) => res.text())
  .then((data) => console.log(data));
