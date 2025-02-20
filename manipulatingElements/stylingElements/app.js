const title = document.querySelector("h1");
console.log(title);

const menu = document.querySelector("menu");
console.log(menu);

const button = document.querySelector("button");

menu.className = "main-menu"; 

title.style.color = "Red";
menu.style.backgroundColor = "Red"

button.addEventListener("click",() => {menu.classList.toggle("invisible")});