
// Select the container where the image will be appended
const imageContainer = document.querySelector('.container');


for (let index = 0; index < 151; index++) {
    // Create a new image element
const img = document.createElement('img');

// Set the source of the image to the provided URL
img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;

// Append the image to the container
imageContainer.appendChild(img);
}