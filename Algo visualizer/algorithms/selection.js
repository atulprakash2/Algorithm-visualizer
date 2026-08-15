document.getElementById("selection").addEventListener("click", selectionSort);
async function selectionSort() {
const bars = document.getElementsByClassName("bar");
let speed = 201- document.getElementById("speed").value;
for (let i = 0; i < array.length; i++) {
let minIndex = i;
bars[minIndex].style.background = "yellow";

for (let j = i + 1; j < array.length; j++) {
bars[j].style.background = "red";
await sleep(speed);
if (array[j] < array[minIndex]) {
bars[minIndex].style.background = "#38bdf8";
minIndex = j;
bars[minIndex].style.background = "yellow";
}
bars[j].style.background = "#38bdf8";
}
swap(array, i, minIndex);
bars[i].style.height = `${array[i]}px`;
bars[minIndex].style.height = `${array[minIndex]}px`;
bars[i].style.background = "green";
}
}