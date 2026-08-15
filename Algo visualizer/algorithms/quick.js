document.getElementById("quick").addEventListener("click", () => {
quickSort(array, 0, array.length- 1);
});
async function quickSort(arr, low, high) {
if (low < high) {
let pi = await partition(arr, low, high);
await quickSort(arr, low, pi- 1);
await quickSort(arr, pi + 1, high);
}
}
async function partition(arr, low, high) {
const bars = document.getElementsByClassName("bar");
let speed = 201- document.getElementById("speed").value;
let pivot = arr[high];

bars[high].style.background = "purple";
let i = low- 1;
for (let j = low; j < high; j++) {
bars[j].style.background = "red";
await sleep(speed);
if (arr[j] < pivot) {
i++;
swap(arr, i, j);
bars[i].style.height = `${arr[i]}px`;
bars[j].style.height = `${arr[j]}px`;
}
bars[j].style.background = "#38bdf8";
}
swap(arr, i + 1, high);
bars[i + 1].style.height = `${arr[i + 1]}px`;
bars[high].style.height = `${arr[high]}px`;
bars[high].style.background = "#38bdf8";
return i + 1;
}