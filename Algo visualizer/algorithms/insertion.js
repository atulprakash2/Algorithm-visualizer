document.getElementById("insertion").addEventListener("click", insertionSort);
async function insertionSort() {
const bars = document.getElementsByClassName("bar");
let speed = 201- document.getElementById("speed").value;
for (let i = 1; i < array.length; i++) {
let key = array[i];
let j = i- 1;
bars[i].style.background = "red";
await sleep(speed);
while (j >= 0 && array[j] > key) {
array[j + 1] = array[j];
bars[j + 1].style.height = `${array[j + 1]}px`;
j--;
await sleep(speed);
}
array[j + 1] = key;
bars[j + 1].style.height = `${key}px`;
bars[i].style.background = "green";
}
}