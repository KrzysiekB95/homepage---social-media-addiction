let button = document.querySelectorAll(".button");

let text = document.querySelectorAll(".text");

button.addEventListener("click", () => {
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
});