document.getElementById("bubble").addEventListener("click", bubbleSort);
async function bubbleSort() {
const bars = document.getElementsByClassName("bar");
let speed = 201- document.getElementById("speed").value;
for (let i = 0; i < array.length; i++) {
for (let j = 0; j < array.length- i- 1; j++) {
bars[j].style.background = "red";
bars[j + 1].style.background = "red";
await sleep(speed);
if (array[j] > array[j + 1]) {
swap(array, j, j + 1);
bars[j].style.height = `${array[j]}px`;
bars[j + 1].style.height = `${array[j + 1]}px`;
}
bars[j].style.background = "#38bdf8";
bars[j + 1].style.background = "#38bdf8";
}
bars[array.length- i- 1].style.background = "green";
}
}