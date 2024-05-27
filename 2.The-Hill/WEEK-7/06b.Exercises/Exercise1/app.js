const bold = document.querySelector("b");

//bold code
bold.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = "beige";
bold.style.color = "red";
bold.parentElement.parentElement.parentElement.style.color = "white";
bold.parentElement.parentElement.parentElement.style.backgroundColor = "darkblue";
bold.parentElement.nextElementSibling.style.color = "pink";
bold.parentElement.parentElement.parentElement.previousElementSibling.querySelectorAll("li").forEach(li => li.style.color = "orange");
bold.parentElement.parentElement.parentElement.previousElementSibling.querySelectorAll("a").forEach(a => a.style.color = "green");
bold.parentElement.parentElement.parentElement.parentElement.querySelector("h1").style.textTransform = "uppercase";
