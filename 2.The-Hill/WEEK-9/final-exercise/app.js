const form = document.querySelector("#search-form");
const body = document.querySelector("body");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
const keyword = document.querySelector("#keyword").value;

    console.log(keyword);

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(keyword)}`);
    
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayResults(data, keyword); // Handle the data (display the search results)
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error); // Handle the error
    }
});

function displayResults(data, keyword) {
    const resultsDiv = document.getElementById('results');
    const message = document.querySelector(".message");
    const overlay = document.querySelector(".overlay");

    overlay.addEventListener("click", (e)=>{
        if (e.target === overlay) {
            overlay.style.display = "none";
        }
    });

    resultsDiv.innerHTML = ''; // Clear previous results
    message.innerHTML = ''; // Clear previous results

    if(data.meals){
        data.meals.forEach(meal => {
            const resultElement = document.createElement('div');
            resultElement.classList.add("grid-item");

            const imageMeal = document.createElement('img');
            imageMeal.setAttribute("src", meal.strMealThumb);
            resultElement.appendChild(imageMeal);

            const title = document.createElement("h3");
            title.innerText = meal.strMeal;
            resultElement.appendChild(title);

            resultsDiv.appendChild(resultElement);

            resultElement.addEventListener("click", ()=>{
                mealDetails(meal);
            });
        });

    message.innerText = `These are the results for "${keyword}"`;

    } else {
        message.textContent = 'No results found';
    }
}

function mealDetails(meal) {
    const overlay = document.querySelector(".overlay");
    const mealDiv = document.querySelector(".meal");
    mealDiv.innerText = "";
    overlay.style.display = "block";
    mealDiv.innerHTML = `<h2>${meal.strMeal}</h2>
    <img class="mealPic" src="${meal.strMealThumb}"/>
    <h2>Ingredients</h2>
    <ul>${showIngredients(meal)}</ul>
    <h2>Instructions</h2>
    <p>${meal.strInstructions}</p>`;
}

function showIngredients(meal) {
    let ingredients = "";
    for(let i = 1; i <= 20; i++) {
        const ingrName = meal[`strIngredient${i}`];
        const ingrMeasure = meal[`strMeasure${i}`];
        if(!ingrName) {
            break;
        } 
        if(ingrName.trim() !== "") {
            ingredients += `<li>${ingrName} - Measure : ${ingrMeasure}</li>`;
        }
    }
    return ingredients;
}