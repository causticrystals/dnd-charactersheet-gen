// HTML variables
let beginBtn = document.getElementById("begin-btn");
let beginDiv = document.getElementById("start-div");
let sheetStatsDiv = document.getElementById("sheet-stats-div");

// buttons clicked
beginBtn.addEventListener("click", displayStatsDiv);

function displayStatsDiv() {
    beginDiv.style.display = "none";
    sheetStatsDiv.style.display = "block";
}