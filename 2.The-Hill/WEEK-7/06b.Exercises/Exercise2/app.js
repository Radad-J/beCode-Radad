const cont = document.querySelector(".container");

setTimeout(() => {
    for (let index = 0; index < 100; index++) {
        let button = document.createElement('button');
        button.textContent = `I am button ${index + 1}`;
        cont.append(button);
    }
    
    document.querySelector('h1').innerText = "There are a lot of buttons here !";
}, "2000");