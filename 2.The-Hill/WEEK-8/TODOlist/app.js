const add = document.querySelector("#add");
const ul = document.querySelector("ul");

add.addEventListener("click", () => {
    const input = document.querySelector("#new-todo").value;
    let index = getLastKey() + 1;
    localStorage.setItem(index, input);

    const item = document.createElement("li");
    item.innerText = input;

    const dlt = document.createElement("input");
    dlt.type = "button";
    dlt.setAttribute("value", "Delete");
    dlt.setAttribute("id", index);


    dlt.addEventListener("click", () => {
        alert('hi');
        if (window.confirm("Do you really want to delete?")) {
            localStorage.removeItem(dlt.id);
            dlt.parentElement.remove();
        }
    });

    item.appendChild(dlt);
    ul.appendChild(item);
});

function getLastKey() {
    if (localStorage.length === 0) {
        return -1; // Indicating that local storage is empty
    }
    let lastKey = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let numKey = parseInt(key, 10);
        if (!isNaN(numKey) && numKey > lastKey) {
            lastKey = numKey;
        }
    }
    return lastKey;
}
