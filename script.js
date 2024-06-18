document.addEventListener("DOMContentLoaded", () => {
    // Load saved fruits from localStorage
    const savedFruits = JSON.parse(localStorage.getItem("fruits")) || [];
    renderFruits(savedFruits);

    document.getElementById("fruitInput").focus();
});

function addFruit() {
    const fruitInput = document.getElementById("fruitInput");
    const fruitName = fruitInput.value.trim();

    if (fruitName !== "") {
        const savedFruits = JSON.parse(localStorage.getItem("fruits")) || [];
        savedFruits.push(fruitName);
        localStorage.setItem("fruits", JSON.stringify(savedFruits));

        renderFruits(savedFruits);
        fruitInput.value = "";
    }
}

function renderFruits(fruits) {
    const fruitList = document.getElementById("fruitList");
    fruitList.innerHTML = "";
    fruits.forEach((fruit) => {
        const li = document.createElement("li");
        li.textContent = fruit;
        fruitList.appendChild(li);
    });
}