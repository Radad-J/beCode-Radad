//Access and Change heading color
const mainHeading = document.getElementById("main-heading");
mainHeading.style.color = "red";

//Access the inner text
const firstItem = document.querySelector("li").innerText;

//Create and append 
const myList = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerText = firstItem;
myList.appendChild(newLi);

//Create an li list by accessing the li 
const liList = document.querySelectorAll("li");

//Change their color
liList.forEach(item => {
    item.style.color = "purple";
});

//Change lastItem color
newLi.style.color = "gold";

//Add html and change color
liList[3].innerHTML = "Annie <span style='color :red;'> Hall </span>";

//Access dataset attributes and name 
/**
 * <div class="block" data-direction="top" data-duration="400">
 * This div goes to the top
 * </div>
 * {
 *  direction: "top",
 *  duration: "400"
 * }
 */
const block = document.querySelector(".block");

console.log(block.dataset);