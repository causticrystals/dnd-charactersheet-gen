// Variables and functions for the sheet after character selection

// Saving throw span variables
let throwStr = document.getElementById("svTstrSpan");
let throwDex = document.getElementById("svTdexSpan");
let throwCon = document.getElementById("svTconSpan");
let throwInt = document.getElementById("svTintSpan");
let throwWis = document.getElementById("svTwisSpan");
let throwChar = document.getElementById("svTcharSpan");

// Ability score variables
let strScore = document.getElementById("sheet-strSc");
let strMod = document.getElementById("sheet-strMo");
let dexScore = document.getElementById("sheet-dexSc");
let dexMod = document.getElementById("sheet-dexMo");
let conScore = document.getElementById("sheet-conSc");
let conMod = document.getElementById("sheet-conMo");
let intScore = document.getElementById("sheet-intSc");
let intMod = document.getElementById("sheet-intMo");
let wisScore = document.getElementById("sheet-wisSc");
let wisMod = document.getElementById("sheet-wisMo");
let charScore = document.getElementById("sheet-charSc");
let charMod = document.getElementById("sheet-charMo");

// Checkbox management for saving throws
function checkedSaveThrows() {
    if (charSheet[0].class === "barbarian") {
        document.getElementById("saveThStr").checked = true;
        document.getElementById("saveThDex").disabled = true;
        document.getElementById("saveThCon").checked = true;
        document.getElementById("saveThInt").disabled = true;
        document.getElementById("saveThWis").disabled = true;
        document.getElementById("saveThChar").disabled = true;
    } else if (charSheet[0].class === "bard") {
        document.getElementById("saveThStr").disabled = true;
        document.getElementById("saveThDex").checked = true;
        document.getElementById("saveThCon").disabled = true;
        document.getElementById("saveThInt").disabled = true;
        document.getElementById("saveThWis").disabled = true;
        document.getElementById("saveThChar").checked = true;
    } else if (charSheet[0].class === "cleric") {
        document.getElementById("saveThStr").disabled = true;
        document.getElementById("saveThDex").disabled = true;
        document.getElementById("saveThCon").disabled = true;
        document.getElementById("saveThInt").disabled = true;
        document.getElementById("saveThWis").checked = true;
        document.getElementById("saveThChar").checked = true;
    } else if (charSheet[0].class === "druid") {
        document.getElementById("saveThStr").disabled = true;
        document.getElementById("saveThDex").disabled = true;
        document.getElementById("saveThCon").disabled = true;
        document.getElementById("saveThInt").checked = true;
        document.getElementById("saveThWis").checked = true;
        document.getElementById("saveThChar").disabled = true;
    } else if (charSheet[0].class === "fighter") {
        document.getElementById("saveThStr").checked = true;
        document.getElementById("saveThDex").disabled = true;
        document.getElementById("saveThCon").checked = true;
        document.getElementById("saveThInt").disabled = true;
        document.getElementById("saveThWis").disabled = true;
        document.getElementById("saveThChar").disabled = true;
    } else if (charSheet[0].class === "paladin") {
        document.getElementById("saveThStr").disabled = true;
        document.getElementById("saveThDex").disabled = true;
        document.getElementById("saveThCon").disabled = true;
        document.getElementById("saveThInt").disabled = true;
        document.getElementById("saveThWis").checked = true;
        document.getElementById("saveThChar").checked = true;
    } else if (charSheet[0].class === "rogue") {
        document.getElementById("saveThStr").disabled = true;
        document.getElementById("saveThDex").checked = true;
        document.getElementById("saveThCon").disabled = true;
        document.getElementById("saveThInt").checked = true;
        document.getElementById("saveThWis").disabled = true;
        document.getElementById("saveThChar").disabled = true;
    } else if (charSheet[0].class === "wizard") {
        document.getElementById("saveThStr").disabled = true;
        document.getElementById("saveThDex").disabled = true;
        document.getElementById("saveThCon").disabled = true;
        document.getElementById("saveThInt").checked = true;
        document.getElementById("saveThWis").checked = true;
        document.getElementById("saveThChar").disabled = true;
    }
}

// Ability scores
function abilityScores() {
    strScore.innerHTML = charSheet[0].str;
    strMod.innerHTML = charSheet[0].strMod;
    dexScore.innerHTML = charSheet[0].dex;
    dexMod.innerHTML = charSheet[0].dexMod;
    conScore.innerHTML = charSheet[0].con;
    conMod.innerHTML = charSheet[0].conMod;
    intScore.innerHTML = charSheet[0].int;
    intMod.innerHTML = charSheet[0].intMod;
    wisScore.innerHTML = charSheet[0].wis;
    wisMod.innerHTML = charSheet[0].wisMod;
    charScore.innerHTML = charSheet[0].char;
    charMod.innerHTML = charSheet[0].charMod;
}