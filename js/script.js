// HTML variables
let nameInp = document.getElementById("name-inp");
let raceSelect = document.getElementById("races");
let classSelect = document.getElementById("classes");
// button variables
document.getElementById("rand-name-btn").addEventListener("click", randNameBtn);
document.getElementById("preview-btn").addEventListener("click", previewBtn);

// span variables
let traitsBonus = document.getElementById("traits-bonus");

// stats variables
let str = 0;
let dex = 0;
let con = 0;
let int = 0;
let wis = 0;
let char = 0;

// Race and Class arrays
let races = ["Dwarf", "Elf", "Half-Elf", "Human", "Dragonborn", "Halfling", "Tiefling"];
let clases = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Paladin", "Rogue", "Wizard"];

// Array for character sheet
let newSheet = [];

// test array (change to a name array)
let testArray = ["One", "Two", "Three", "Four"];

function randNameBtn() {
    nameInp.value = `${randomElement(testArray)}`;
}

// Change the bonus stats preview
function previewBtn() {
    let raceVal = raceSelect.value;
    let classVal = classSelect.value;

}