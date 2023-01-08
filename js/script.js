// HTML variables
let nameInp = document.getElementById("name-inp");
let raceSelect = document.getElementById("races");
let classSelect = document.getElementById("classes");
let charBgrSelect = document.getElementById("backgrounds");

// button variables & event listeners
raceSelect.addEventListener("click", previewStats);
classSelect.addEventListener("click", previewStats);
document.getElementById("preview-traits-btn").addEventListener("click", previewTraitsBtn);
charBgrSelect.addEventListener("click", charBgrGen);
document.getElementById("done-btn").addEventListener("click", createSheetArray);

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
let charBgrDesc = document.getElementById("char-bgr-desc");
let charBgrSkills = document.getElementById("char-bgr-extra-skills");

// ability score variables
let strAbility = 0;
let dexAbility = 0;
let conAbility = 0;
let intAbility = 0;
let wisAbility = 0;
let charAbility = 0;

// Array for character sheet
let charSheet = [];

// Change the bonus stats preview
function previewStats() {
    let clasSel = classSelect.value;
    let race = raceSelect.value;
    // extra trait bonus variables

    // race traits
    if (race === 'blankR') {
        traitsBonus.innerHTML = "";
    } else if (race === 'dwarf') {
        traitsBonus.innerHTML = "+2 Constitution";
        strAbility = 0;
        dexAbility = 0;
        conAbility = 2;
        intAbility = 0;
        wisAbility = 0;
        charAbility = 0;
    } else if (race === 'elf') {
        traitsBonus.innerHTML = "+2 Dexterity";
        strAbility = 0;
        dexAbility = 2;
        conAbility = 0;
        intAbility = 0;
        wisAbility = 0;
        charAbility = 0;
    } else if (race === 'half-elf') {
        traitsBonus.innerHTML = "+2 Charisma +1 to all other scores";
        strAbility = 1;
        dexAbility = 1;
        conAbility = 1;
        intAbility = 1;
        wisAbility = 1;
        charAbility = 2;
    } else if (race === 'human') {
        traitsBonus.innerHTML = "+1 to all scores";
        strAbility = 1;
        dexAbility = 1;
        conAbility = 1;
        intAbility = 1;
        wisAbility = 1;
        charAbility = 1;
    } else if (race === 'dragonborn') {
        traitsBonus.innerHTML = "+2 Strength +1 Charisma";
        strAbility = 2;
        dexAbility = 0;
        conAbility = 0;
        intAbility = 0;
        wisAbility = 0;
        charAbility = 1;
    } else if (race === 'halfling') {
        traitsBonus.innerHTML = "+2 Dexterity";
        strAbility = 0;
        dexAbility = 2;
        conAbility = 0;
        intAbility = 0;
        wisAbility = 0;
        charAbility = 0;
    } else if (race === 'tiefling') {
        traitsBonus.innerHTML = "+2 Charisma +1 Inteligence";
        strAbility = 0;
        dexAbility = 0;
        conAbility = 0;
        intAbility = 1;
        wisAbility = 0;
        charAbility = 2;
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

// Character background
function charBgrGen() {
    let background = charBgrSelect.value;

    if(background === 'blankBgr') {
        charBgrDesc.innerHTML = "";
    } else if (background === 'acolyte') {
        charBgrDesc.innerHTML = "<span class='bgr-class'>You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine.</span>";
    } else if (background === 'criminal') {
        charBgrDesc.innerHTML = "<span class='bgr-class'>You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You're far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.";
    } else if (background === 'folk-hero') {
        charBgrDesc.innerHTML = "<span class='bgr-class'>You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.</span>";
    } else if (background === 'noble') {
        charBgrDesc.innerHTML = "<span class='bgr-class'>You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them.</span>";
    } else if (background === 'sage') {
        charBgrDesc.innerHTML = "<span class='bgr-class'>You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.</span>";
    } else if (background === 'soldier') {
        charBgrDesc.innerHTML = "<span class='bgr-class'>War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war</span>";
    }
}

// Calculate stats
function previewTraitsBtn() {
    // Ability scores
    strSpan.innerHTML = abilityGenHelp(strAbility);
    dexSpan.innerHTML = abilityGenHelp(dexAbility);
    conSpan.innerHTML = abilityGenHelp(conAbility);
    intSpan.innerHTML = abilityGenHelp(intAbility);
    wisSpan.innerHTML = abilityGenHelp(wisAbility);
    charSpan.innerHTML = abilityGenHelp(charAbility);
    // Modifiers
    strModSpan.innerHTML = modGenHelp(strSpan.innerHTML);
    dexModSpan.innerHTML = modGenHelp(dexSpan.innerHTML);
    conModSpan.innerHTML = modGenHelp(conSpan.innerHTML);
    intModSpan.innerHTML = modGenHelp(intSpan.innerHTML);
    wisModSpan.innerHTML = modGenHelp(wisSpan.innerHTML);
    charModSpan.innerHTML = modGenHelp(charSpan.innerHTML);
}

// Send character selections to an array
function createSheetArray() {
    // stats variables
    let newSheet = Object.assign({str: strSpan.innerHTML}, {dex: dexSpan.innerHTML}, {con: conSpan.innerHTML}, {int: intSpan.innerHTML}, {wis: wisSpan.innerHTML}, {char: charSpan.innerHTML}, {race: raceSelect.value}, {class: classSelect.value}, {saves: saves.innerHTML}, {hitDie: hitDie.innerHTML}, {primary: prAbility.innerHTML}, {background: charBgrSelect.value}, {name: nameInp.value}, {strMod: strModSpan.innerHTML}, {dexMod: dexModSpan.innerHTML}, {conMod: conModSpan.innerHTML}, {intMod: intModSpan.innerHTML}, {wisMod: wisModSpan.innerHTML}, {charMod: charModSpan.innerHTML});
    JSON.stringify(newSheet);
    charSheet.push(newSheet);
}

// HELPER FUNCTIONS
function classBonus(saveTrait, die, ability) {
    saves.innerHTML = saveTrait;
    hitDie.innerHTML = die;
    prAbility.innerHTML = ability;
}

function abilityGenHelp(bonus) {
    let traitNum = randomInt(2, 7) + randomInt(2, 7) + randomInt(2, 7);
    let abilityNum = traitNum + bonus;
    return `${abilityNum}`;
}

function modGenHelp(score) {
    let modNum;
    let numPos;
    if (`${score}` <= 7) {
        numPos = "";
        modNum = -2;
    } else if (`${score}` <= 9) {
        numPos = "";
        modNum = -1;
    } else if (`${score}` <= 11) {
        numPos = "+";
        modNum = 0;
    } else if (`${score}` <= 13) {
        numPos = "+";
        modNum = 1;
    } else if (`${score}` <= 15) {
        numPos = "+";
        modNum = 2;
    } else if (`${score}` <= 17) {
        numPos = "+";
        modNum = 3;
    } else {
        numPos = "+";
        modNum = 4;
    }
    return `${numPos}${modNum}`
}