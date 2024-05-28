const button = document.querySelector("button");

button.addEventListener("click", () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    document.querySelector("body").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.querySelector("h1").innerText = `rgb(${r}, ${g}, ${b})`;
});