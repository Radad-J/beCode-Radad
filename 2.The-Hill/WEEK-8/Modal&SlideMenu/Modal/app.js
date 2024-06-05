const overlay = document.querySelector(".overlay-div");
const btn = document.querySelector("button");
const btnClose = document.querySelector(".close");

btn.addEventListener("click", ()=> {
    overlay.style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
});


overlay.addEventListener("click", (e)=> {
    if (e.target === overlay) {
        overlay.style.display = "none";
        document.querySelector("body").style.overflow = "visible";
    }
});

btnClose.addEventListener("click", ()=>{
        overlay.style.display = "none";
        document.querySelector("body").style.overflow = "visible";
});