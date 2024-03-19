// Proměnné
let inputBox = document.getElementById('input-box');
let listContainer = document.getElementById('list-container');
let addBtn = document.getElementById('add-btn');

// Funkce pro přidání úkolu
function addTask() {
    // Validace zdali uživatel zadal hodnotu do inputBoxu
    if (inputBox.value == "") {
        alert('You must write your task!');
    } else {
        // Vytvoření li + přidání hodnoty
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Přidání křížku pro smazání
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // Po přidání úkolu nastavíme hodnotu inputBoxu na prázdný string
    inputBox.value = "";
    // Zavolání funkce pro saveData() po přidání úkolu
    saveData();
}

// Splnění úkolu nebo jeho smazání (zavoláme funkci saveData() pro uložení)
listContainer.addEventListener("click", (e) => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
        // console.log("li");
        saveData();
    } else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
        // console.log("span");
        saveData();
    }
});

// Funkce pro uložení dat na lokální úložiště
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// Funkce pro načtení dat po novém otevření + zavoláme showData()
function showData() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showData();

// Zavolání funkce addTask() po kliknutí na tlačítko addBtn
addBtn.addEventListener("click", addTask);