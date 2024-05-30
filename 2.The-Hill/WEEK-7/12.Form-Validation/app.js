const form = document.querySelector("form");
const submitButton = document.querySelector("input[type=submit]");
submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    let totalValidations = 0;

    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let confPass = document.querySelector("#confPass");

    if (username.value.length < 5) {
        errorF(username);
        username.nextElementSibling.innerText = "Must be at least 5 characters";
    } else if(username.value.length > 10)  {
        username.nextElementSibling.innerText = "Must be at most 10 characters";
        errorF(username);
    } else if (username.value.toLowerCase() !== username.value){
        username.nextElementSibling.innerText = "Must be in lowercase";
        errorF(username);
    } else {
        successF(username);
        totalValidations++;
    }

    if(email.value.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')) {
        successF(email);
        totalValidations++;
    } else {
        email.nextElementSibling.innerText = "Not valid email form";
        errorF(email);
    }

    if(password.value.length < 8 || password.value.length > 15 ) {
        password.nextElementSibling.innerText = "Must be between 8 and 15";
        errorF(password);
    } else {
        successF(password);
        totalValidations++;
    }

    if(confPass.value !== password.value) {
        confPass.nextElementSibling.innerText = "Your password does not match";
        errorF(confPass);
    } else {
        successF(confPass);
        totalValidations++;
    }

    if(totalValidations == 4) {
        console.log(username.value);
        console.log(email.value);
        console.log(password.value);
        console.log(confPass.value);
    }
});

function errorF(element) {
    element.parentElement.classList.remove("success");
    element.parentElement.classList.add("error");
    element.nextElementSibling.classList.remove("msg");
}

function successF(element) {
    element.parentElement.classList.remove("error");
    element.parentElement.classList.add("success");
    element.nextElementSibling.classList.add("msg");
}