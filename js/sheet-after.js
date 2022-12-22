// Variables and functions for the sheet after character selection

// Saving throw span variables
let throwStr = document.getElementById("svTstrSpan");
let throwDex = document.getElementById("svTdexSpan");
let throwCon = document.getElementById("svTconSpan");
let throwInt = document.getElementById("svTintSpan");
let throwWis = document.getElementById("svTwisSpan");
let throwChar = document.getElementById("svTcharSpan");

// Saving throw checkbox disabled initally 
document.getElementById("saveThStr").disabled = true;
document.getElementById("saveThDex").disabled = true;
document.getElementById("saveThCon").disabled = true;
document.getElementById("saveThInt").disabled = true;
document.getElementById("saveThWis").disabled = true;
document.getElementById("saveThChar").disabled = true;


// Checkbox management for saving throws
function checkedSaveThrows() {
    if (charSheet[0].class === "barbarian") {
        document.getElementById("saveThStr").disabled = false;
        document.getElementById("saveThCon").disabled = false;
    }
}