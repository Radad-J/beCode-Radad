const menuIcon = document.querySelector(".menu-icon");
const overlay = document.querySelector(".overlay-div");

menuIcon.addEventListener("click", () => {
    const ul = document.querySelector("ul");
    ul.classList.add("show");
    menuIcon.style.display = "none";
    overlay.classList.add("show");
    document.querySelector("body").style.overflow = "hidden";
});

overlay.addEventListener("click", () => {
    const ul = document.querySelector("ul");
    ul.classList.remove("show");
    overlay.classList.remove("show");
    document.querySelector("body").style.overflow = "visible";
    menuIcon.style.display = "block";
});
