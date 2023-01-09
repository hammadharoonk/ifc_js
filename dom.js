const title = document.getElementById("page-title");

title.classList.add("purple");
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

for (let card of Array.from(cards)) {
    const children = card.children;
    const text = children[1];
    text.textContent = "whatever"
}
