const overlay = document.querySelector(".overlay-div");
const btn = document.querySelector("button");

btn.addEventListener("click", ()=> {
    overlay.style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
});


overlay.addEventListener("click", ()=> {
    overlay.style.display = "none";
    document.querySelector("body").style.overflow = "visible";

});