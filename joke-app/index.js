
const header = document.querySelector(".header")
const content = document.querySelector(".content")
const app = document.querySelector("body > div")


const getJoke = () => {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.data.content
      header.innerText = joke.text_head
      content.innerText = joke.text !== "" ? joke.text : joke.text_hidden;

    });
}

getJoke();

app.addEventListener("click", getJoke)
