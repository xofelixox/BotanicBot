// Suchleiste
document.getElementById("plantSearch").addEventListener("keyup", function () {
    filterPlants();
});

// Dropdown Filter
document.getElementById("plantFilter").addEventListener("change", function () {
filterPlants();
});

function filterPlants() {
let searchValue = document.getElementById("plantSearch").value.toLowerCase();
let dropdownValue = document.getElementById("plantFilter").value.toLowerCase();
let cards = document.querySelectorAll("#plantCards .col");

cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    let matchesSearch = text.includes(searchValue);
    let matchesDropdown = dropdownValue === "" || text.includes(dropdownValue);

    if (matchesSearch && matchesDropdown) {
    card.style.display = "";
    } else {
    card.style.display = "none";
    }
});
}