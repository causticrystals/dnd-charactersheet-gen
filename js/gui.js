// HTML variables
let beginBtn = document.getElementById("begin-btn");
let beginDiv = document.getElementById("start-div");
let sheetStatsDiv = document.getElementById("sheet-stats-div");
let sheetDiv = document.getElementById("sheet-div");

// buttons clicked
beginBtn.addEventListener("click", displayStatsDiv);
document.getElementById("done-btn").addEventListener("click", displayCharacterSheet);

function displayStatsDiv() {
    beginDiv.style.display = "none";
    sheetStatsDiv.style.display = "block";
}

function displayCharacterSheet() {
    sheetStatsDiv.style.display = "none";
    sheetDiv.style.display = "block";
}