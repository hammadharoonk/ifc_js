const title = document.getElementById("page-title");

// title.classList.add("purple");
const thing = document.querySelector("h1");

// for (let title of Array.from(document.getElementsByTagName("h1"))) {
//     console.log(title)
//     title.style.backgroundColor = "red"
// }

// console.log(document.getElementsByClassName("purple"))
// for (let item of Array.from(document.querySelectorAll)) {
//     console.log(item)
// }

const cards = document.getElementsByClassName("card");

// for (let card of Array.from(cards)) {
//     const children = card.children;
//     const text = children[0];
//     text.textContent = "whatever";
//     // card.parentElement.classList.add("purple")
// }

const todoList = [
  "finish research article",
  "make revit plugin",
  "create browser based ifc game",
];

const container = document.querySelector(".mainContainer");

const buttonsArray = [];

for (let task of todoList) {
  const text = document.createElement("p");
  

  text.addEventListener("mouseenter", (event) => {
    text.classList.add("purple")
  })

  text.addEventListener("mouseleave", (event) => {
    text.classList.remove("purple")
  })

  text.addEventListener("mousedown", (event) => {
    buttonsArray.forEach(button => button.classList.remove("selected"))
    console.log(`selected task ${task}`)
    text.classList.add("selected")
    buttonsArray.push(text)
  })

  text.textContent = task;
  container.appendChild(text);
}
