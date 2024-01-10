const showHide = () => {
    const text = document.querySelector(".text");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}


const button = document.querySelector(".button");

button.addEventListener("click", () => {
    showHide();
});