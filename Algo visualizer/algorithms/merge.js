document.getElementById("merge").addEventListener("click", () => {
mergeSort(array, 0, array.length- 1);
});
async function mergeSort(arr, left, right) {
if (left >= right) return;
const mid = Math.floor((left + right) / 2);
await mergeSort(arr, left, mid);
await mergeSort(arr, mid + 1, right);
await merge(arr, left, mid, right);
}
async function merge(arr, left, mid, right) {
const bars = document.getElementsByClassName("bar");
let temp = [];
let speed = 201- document.getElementById("speed").value;
let i = left;
let j = mid + 1;
while (i <= mid && j <= right) {

if (arr[i] < arr[j]) {
temp.push(arr[i++]);
} else {
temp.push(arr[j++]);
}
}
while (i <= mid) temp.push(arr[i++]);
while (j <= right) temp.push(arr[j++]);
for (let k = left; k <= right; k++) {
arr[k] = temp[k- left];
bars[k].style.height = `${arr[k]}px`;
bars[k].style.background = "green";
await sleep(speed);
}
}