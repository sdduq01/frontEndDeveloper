const container = document.querySelector(".container");
const button = document.querySelector("#btn");

container.addEventListener ("mouseover", () => {
    container.style.backgroundColor = "Blue";
});
container.addEventListener ("mouseout", () => {
    container.style.backgroundColor = "red";
});
button.addEventListener("click", () => {
    alert("Button clicked")
});
