// Variables and functions for the sheet after character selection

// Top section character detail variables
let charName = document.getElementById("sheet-name");
let classAndLevel = document.getElementById("sheet-clLv");
let charBackground = document.getElementById("sheet-bgr");
let charRace = document.getElementById("sheet-race");
let charAlignment = document.getElementById("sheet-char-align");

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

// Initiatives and things span variables
let initiativeSpan = document.getElementById("init-span");
let hitDieSpan = document.getElementById("hitDie-span");
let proficBonusSpan = document.getElementById("profBonus-span");

// Checkbox management for saving throws
function checkedSaveThrows() {
    if (charSheet[0].class === "barbarian") {
        document.getElementById("saveThStr").checked = true;
        document.getElementById("saveThCon").checked = true;
    } else if (charSheet[0].class === "bard") {
        document.getElementById("saveThDex").checked = true;
        document.getElementById("saveThChar").checked = true;
    } else if (charSheet[0].class === "cleric") {
        document.getElementById("saveThWis").checked = true;
        document.getElementById("saveThChar").checked = true;
    } else if (charSheet[0].class === "druid") {
        document.getElementById("saveThInt").checked = true;
        document.getElementById("saveThWis").checked = true;
    } else if (charSheet[0].class === "fighter") {
        document.getElementById("saveThStr").checked = true;
        document.getElementById("saveThCon").checked = true;
    } else if (charSheet[0].class === "paladin") {
        document.getElementById("saveThWis").checked = true;
        document.getElementById("saveThChar").checked = true;
    } else if (charSheet[0].class === "rogue") {
        document.getElementById("saveThDex").checked = true;
        document.getElementById("saveThInt").checked = true;
    } else if (charSheet[0].class === "wizard") {
        document.getElementById("saveThInt").checked = true;
        document.getElementById("saveThWis").checked = true;
    }
}

// Skills checkbox management
function checkSkills() {
    if (charSheet[0].class === "barbarian") {
        document.getElementById("skillsAth").checked = true;
        document.getElementById("skillsSur").checked = true;
    } else if (charSheet[0].class === "bard") {
        document.getElementById("skillsPers").checked = true;
        document.getElementById("skillsIns").checked = true;
        document.getElementById("skillsInv").checked = true;
    } else if (charSheet[0].class === "cleric") {
        document.getElementById("skillsRel").checked = true;
        document.getElementById("skillsMed").checked = true;
    } else if (charSheet[0].class === "druid") {
        document.getElementById("skillsAniHand").checked = true;
        document.getElementById("skillsNat").checked = true;
    } else if (charSheet[0].class === "fighter") {
        document.getElementById("skillsHis").checked = true;
        document.getElementById("skillsSur").checked = true;
    } else if (charSheet[0].class === "paladin") {
        document.getElementById("skillsIns").checked = true;
        document.getElementById("skillsRel").checked = true;
    } else if (charSheet[0].class === "rogue") {
        document.getElementById("skillsAcr").checked = true;
        document.getElementById("skillsDec").checked = true;
        document.getElementById("skillsSlHan").checked = true;
        document.getElementById("skillsSte").checked = true;
    } else if (charSheet[0].class === "wizard") {
        document.getElementById("skillsIns").checked = true;
        document.getElementById("skillsInv").checked = true;
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

// Character details top of sheet
function characterDetails() {
    let charClassUp = charSheet[0].class;
    let charBgrUp = charSheet[0].background;
    let charRaceUp = charSheet[0].race;
    charName.innerHTML = charSheet[0].name;
    classAndLevel.innerHTML = charClassUp[0].toUpperCase() + charClassUp.slice(1) + " Level 1";
    charBackground.innerHTML = charBgrUp[0].toUpperCase() + charBgrUp.slice(1);
    charRace.innerHTML = charRaceUp[0].toUpperCase() + charRaceUp.slice(1);
    charAlignment.innerHTML = "";
}

// Initiatives
function initiativeStuff() {
    initiativeSpan.innerHTML = "+2";
    hitDieSpan.innerHTML = charSheet[0].hitDie;
    proficBonusSpan.innerHTML = charSheet[0].dexMod;
}

// Assemble character sheet
function assembleSheet() {
    checkedSaveThrows();
    checkSkills();
    abilityScores();
    characterDetails();
    initiativeStuff();
}