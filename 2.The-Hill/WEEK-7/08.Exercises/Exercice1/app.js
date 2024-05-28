const hello = () => {
    alert("Oh my God ! You again !!!");
};

const goodBye = () => {
    alert("Thank God ! I thought you'd' never leave !");
};

btnHello = document.querySelectorAll('button')[0];
btnGoodBye = document.querySelectorAll('button')[1];

btnHello.addEventListener("click", hello);
btnGoodBye.addEventListener("click", goodBye);