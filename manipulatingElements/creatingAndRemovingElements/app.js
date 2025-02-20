const contentArea = document.getElementById("contentArea");
const listArea = document.getElementById("listArea");
const newPElement = document.createElement("p");
const item7 = document.createElement("li");
const item8 = document.createElement("li");
const item9 = document.createElement("li");

newPElement.textContent = "Fuí creado con createElement";
item7.textContent = "Item 7";
item8.textContent = "Item 8";
item9.textContent = "Item 9";

contentArea.innerHTML = "<p>Este es un nuevo párrafo</p>";
contentArea.insertAdjacentHTML("beforeend", "<p>Este es un párrafo adicional</p>");


listArea.innerHTML += "<li>Item 5</li>";
listArea.insertAdjacentHTML("beforeend", "<li>Item 6</li>");
contentArea.append(newPElement);
listArea.prepend(item7);

const item1 = document.querySelector("li");

listArea.before(item8);
listArea.after(item9);
item1.remove();
listArea.removeChild(listArea.firstElementChild);
