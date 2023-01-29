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
  "i turn blue when i am touched",
  "keep far from me the pain of the blue hover",
  "watch me blue myself",
];

const container = document.querySelector(".mainContainer");

const buttonsArray = [];
let temporaryTextHolderHover = "";
let temporaryTextHolderClick = "";

for (let task of todoList) {
  const text = document.createElement("p");
  

  text.addEventListener("mouseenter", (event) => {
    text.classList.add("blue")
    temporaryTextHolderHover = text.textContent;
    text.textContent = ("aargh dont click me")
  })

  text.addEventListener("mouseleave", (event) => {
    text.classList.remove("blue")
    text.classList.remove("selected")
    text.textContent = (temporaryTextHolderHover)
  })

  text.addEventListener("mousedown", (event) => {
    temporaryTextHolderClick = text.textContent;
    text.textContent = ("blaaaargh")
    buttonsArray.forEach(button => button.classList.remove("selected"))
    console.log(`selected task ${task}`)
    text.classList.add("selected")
    buttonsArray.push(text)
  })

  text.textContent = task;
  container.appendChild(text);
}
