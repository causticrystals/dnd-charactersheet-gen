// HTML variables
let nameInp = document.getElementById("name-inp");
let raceSelect = document.getElementById("races");
let classSelect = document.getElementById("classes");
// button variables
document.getElementById("rand-name-btn").addEventListener("click", randNameBtn);
document.getElementById("preview-stats-btn").addEventListener("click", previewStatBtn);
document.getElementById("preview-traits-btn").addEventListener("click", previewTraitsBtn);

// span variables
let traitsBonus = document.getElementById("traits-bonus");
let saves = document.getElementById("saves");
let hitDie = document.getElementById("hit-die");
let prAbility = document.getElementById("prime-ability");
let strSpan = document.getElementById("str-span");
let dexSpan = document.getElementById("dex-span");
let conSpan = document.getElementById("con-span");
let intSpan = document.getElementById("int-span");
let wisSpan = document.getElementById("wis-span");
let charSpan = document.getElementById("char-span");
let strModSpan = document.getElementById("str-mod-span");
let dexModSpan = document.getElementById("dex-mod-span");
let conModSpan = document.getElementById("con-mod-span");
let intModSpan = document.getElementById("int-mod-span");
let wisModSpan = document.getElementById("wis-mod-span");
let charModSpan = document.getElementById("char-mod-span");

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
function previewStatBtn() {
    let clasSel = classSelect.value;
    let race = raceSelect.value;

    // race traits
    if (race === 'blankR') {
        traitsBonus.innerHTML = "";
    } else if (race === 'dwarf') {
        traitsBonus.innerHTML = "+2 Constitution";
    } else if (race === 'elf') {
        traitsBonus.innerHTML = "+2 Dexterity";
    } else if (race === 'half-elf') {
        traitsBonus.innerHTML = "+2 Charisma & +1 to all other scores";
    } else if (race === 'human') {
        traitsBonus.innerHTML = "+1 to all scores";
    } else if (race === 'dragonborn') {
        traitsBonus.innerHTML = "+2 Strength & +1 Charisma";
    } else if (race === 'halfling') {
        traitsBonus.innerHTML = "+2 Dexterity";
    } else if (race === 'tiefling') {
        traitsBonus.innerHTML = "+2 Charisma & +1 Inteligence";
    }

    // class saves
    if (clasSel === 'blankC') {
        classBonus("", "", "");
    } else if (clasSel === 'barbarian') {
        classBonus("Strength + Constitution", "d12", "Strength");
    } else if (clasSel === 'bard') {
        classBonus("Dexterity + Charisma", "d8", "Charisma");
    } else if (clasSel === 'cleric') {
        classBonus("Wisdom + Charisma", "d8", "Wisdom");
    } else if (clasSel === 'druid') {
        classBonus("Intelgence + Wisdom", "d8", "Wisdom");
    } else if (clasSel === 'fighter') {
        classBonus("Strength + Constitution", "d10", "Dexterity");
    } else if (clasSel === 'paladin') {
        classBonus("Wisdom + Charisma", "d10", "Strength + Charisma");
    } else if (clasSel === 'rogue') {
        classBonus("Dexterity + Inteligence", "d8", "Dexterity");
    } else if (clasSel === 'wizard') {
        classBonus("Inteligence + Wisdom", "d6", "Inteligence");
    }
}

// Calculate stats
function previewTraitsBtn() {
    strSpan.innerHTML = traitsGenHelp();
    dexSpan.innerHTML = traitsGenHelp();
    conSpan.innerHTML = traitsGenHelp();
    intSpan.innerHTML = traitsGenHelp();
    wisSpan.innerHTML = traitsGenHelp();
    charSpan.innerHTML = traitsGenHelp();
}

// Helper functions
function classBonus(saveTrait, die, ability) {
    saves.innerHTML = saveTrait;
    hitDie.innerHTML = die;
    prAbility.innerHTML = ability;
}

function traitsGenHelp() {
    let traitNum = randomInt(2, 7) + randomInt(2, 7) + randomInt(2, 7);
    let modNum;
    let numPos;
    if (traitNum <= 7) {
        numPos = "";
        modNum = -2;
    } else if (traitNum <= 9) {
        numPos = "";
        modNum = -1;
    } else if (traitNum <= 11) {
        numPos = "+";
        modNum = 0;
    } else if (traitNum <= 13) {
        numPos = "+";
        modNum = 1;
    } else if (traitNum <= 15) {
        numPos = "+";
        modNum = 2;
    } else if (traitNum <= 17) {
        numPos = "+";
        modNum = 3;
    } else {
        numPos = "+";
        modNum = 4;
    }
    return `${traitNum} Modifier: ${numPos}${modNum}`;
}