document.querySelector("button").addEventListener("click", (e) => {
    //Stop bubbling
    e.stopPropagation();
    alert("button was clicked");
});

document.querySelector("p").addEventListener("click", (e) => {
    alert("p was clicked");
});