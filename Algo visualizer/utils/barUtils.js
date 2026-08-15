function renderBars(array) {
const container = document.getElementById("array-container");
container.innerHTML = "";
for (let value of array) {
const bar = document.createElement("div");
bar.classList.add("bar");
bar.style.height = `${value}px`;
bar.style.width = `${Math.floor(700 / array.length)}px`;
const label = document.createElement("span");
label.innerText = value;
label.classList.add("bar-label");
bar.appendChild(label);
container.appendChild(bar);
}
}
function renderBars(array) {
const container = document.getElementById("array-container");
container.innerHTML = "";

for (let value of array) {
const bar = document.createElement("div");
bar.classList.add("bar");
bar.style.height = `${value}px`;
bar.style.width = `${Math.floor(700 / array.length)}px`;
container.appendChild(bar);
}
}