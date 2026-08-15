let array = [];
const generateBtn = document.getElementById("generate");
const sizeSlider = document.getElementById("size");
function generateArray() {
array = [];
for (let i = 0; i < sizeSlider.value; i++) {
array.push(Math.floor(Math.random() * 400) + 20);
}
renderBars(array);
}
generateBtn.addEventListener("click", generateArray);
sizeSlider.addEventListener("input", generateArray);
generateArray();