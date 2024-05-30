let score1 = document.querySelector("#score-1");
let score2 = document.querySelector("#score-2");

let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");

let btnReset = document.querySelector("#btn-reset");
let total = 0;



const addOne = (score1, score2, total) => {

    total = parseInt(score1.innerText) + parseInt(score2.innerText);
    score1.innerText = parseInt(score1.innerText) + 1;
    if(total === 4){
        if(parseInt(score1.innerText) > parseInt(score2.innerText)){
            score1.style.color = "green";
            score2.style.color = "red";
        }else {
            score1.style.color = "red";
            score2.style.color = "green";
        }

        btn1.disabled = "disabled";
        btn2.disabled = "disabled";
    };
}

const addTwo = (score1, score2, total) => {

    total = parseInt(score1.innerText) + parseInt(score2.innerText);
    score2.innerText =  parseInt(score2.innerText) + 1;
    if(total === 4){
        if(parseInt(score1.innerText) > parseInt(score2.innerText)){
            score1.style.color = "green";
            score2.style.color = "red";
        }else {
            score1.style.color = "red";
            score2.style.color = "green";
        }

        btn1.disabled = "disabled"
        btn2.disabled = "disabled";
    }
}

const reset = (btn1, btn2) => {
    score1.innerText = 0;
    score2.innerText = 0;
    score1.style.color = "black";
    score2.style.color = "black";

    btn1.disabled = false;
    btn2.disabled  = false;
}

btn1.addEventListener("click", () => addOne(score1, score2, total));
btn2.addEventListener("click", () => addTwo(score1, score2, total));
btnReset.addEventListener("click", () => reset(btn1, btn2, score1, score2));
