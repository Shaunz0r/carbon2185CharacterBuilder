var characterObject;

window.onload = function () {

    var rollFunction = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    allSkills = ["Acrobatics", "Athletics", "Bureaucracy", "Computing", "Deception", "Engineering",
        "Gambling", "Hacking", "History", "Intimidation", "Investigation", "Mechanics", "Medicine", "Navigation",
        "Perception", "Performance", "Persuasion", "Presence", "Religion", "Robotics", "Sense Motive",
        "Sleight of Hand", "Stealth", "Stretwise", "Tracking", "Vehicles (Aircraft)", "Vehicles (Land)"];

    var charName = document.getElementById("nameInput");
    var charOrigin = document.getElementById("originSelect");
    var charClass = document.getElementById("classSelect");
    var charBackground = document.getElementById("backgroundSelect");
    //character object declaration
    characterObject = {
        name: charName.value,
        origin: "",
        class: {
            primary: "",
            subClass: ""
        },
        wonlongBalance: 0,
        contractTermsServed: {
            careers: [],
            terms: 0
        },
        originSkills: [],
        classSkills: [],
        proficientSkills: [],
        traits: [],
        skillPoints: 0
    };

    function assignOrigin() {
        var skillCount;
        for (skillCount = 0; skillCount < characterObject.originSkills.length; skillCount++) {
            characterObject.originSkills.pop()
        };
        switch (charOrigin.value) {
            case "bruiserBadlander":
                characterObject.origin = "Bruiser Badlander";
                characterObject.speed = 30;
                characterObject.charDexScore += 1;
                characterObject.charStrScore += 2;
                characterObject.originSkills.push("Intimidation");
                characterObject.traits.push("bruiserPlaceholderText");
                break;
            case "scavengerBadlander":
                characterObject.origin = "Scavenger Badlander";
                characterObject.speed = 30;
                characterObject.charDexScore += 1;
                characterObject.charTecScore += 2;
                characterObject.proficientSkills.push("Mechanics");
                characterObject.originSkills.push("Mechanics");
                characterObject.traits.push("scavengerPlaceholderText");
                break;
            case "gutterPunk":
                characterObject.origin = "Gutter Punk";
                characterObject.speed = 35;
                characterObject.charDexScore += 1;
                characterObject.charStrScore += 2;
                characterObject.skillPoints += 1;
                allSkills.forEach(skill => {
                    if (!charAvailableSkills.includes(skill)) {
                        charAvailableSkills.push(skill);
                    };
                });
                characterObject.traits.push("gutterPunkPlaceholderText");
                break;
            case "highFlyerKorpKid":
                characterObject.origin = "High Flyer Korporate Kid";
                characterObject.speed = 30;
                characterObject.charTecScore += 1;
                characterObject.charIntScore += 2;
                characterObject.traits.push("HFKKPlaceholderText");
                break;
            case "sleekerKorpKid":
                characterObject.origin = "Sleeker Korporate Kid";
                characterObject.speed = 30;
                characterObject.charTecScore += 1;
                characterObject.charIntScore += 2;
                characterObject.traits.push("SKKPlaceholderText");
                break;
            case "regularJoe":


        };
        characterObject.charStrMod = Math.floor((characterObject.charStrScore - 10) / 2);
        characterObject.charDexMod = Math.floor((characterObject.charDexScore - 10) / 2);
        characterObject.charConMod = Math.floor((characterObject.charConScore - 10) / 2);
        characterObject.charIntMod = Math.floor((characterObject.charIntScore - 10) / 2);
        characterObject.charTecMod = Math.floor((characterObject.charTecScore - 10) / 2);
        characterObject.charPeoMod = Math.floor((characterObject.charPeoScore - 10) / 2);
    };

    corpDroneSkills = ["Bureaucracy", "Computing", "Deception", "Engineering",
        "Hacking", "Perception", "Persuasion", "Sense Motive"];
    criminalSkills = ["Deception", "Hacking", "Intimidation", "Performance",
        "Presence", "Sense Motive", "Sleight of Hand", "Streetwise"];
    entertainerSkills = ["Acrobatics", "Bureaucracy", "Gambling", "Performance",
        "Presence", "Religion", "Sense Motive", "Streetwise"];
    explorerSkills = ["Engineering", "Investigation", "Mechanics", "Navigation",
        "Streetwise", "Tracking", "Vehicles (Aircraft)", "Vehicles(Land)"];
    laborerSkills = ["Acrobatics", "Athletics", "Engineering", "Gambling",
        "Mechanics", "Perception", "Robotics", "Vehicles (Land)"];
    lawEnforcementSkills = ["Athletics", "Intimidation", "Investigation", "Perception",
        "Presence", "Streetwise", "Tracking", "Vehicles (Land)"];
    merchantSkills = ["Deception", "Gambling", "Navigation", "Perception",
        "Persuasion", "Presence", "Sense Motive", "Streetwise"];
    militarySkills = ["Acrobatics", "Athletics", "Medicine", "Navigation",
        "Perception", "Tracking", "Vehicles (Aircraft)", "Vehicles (Land)"];
    technicianSkills = ["Gambling", "Hacking", "Investigation", "Mechanics",
        "Navigation", "Perception", "Persuasion", "Presence"];
    unskilledWorkerSkills = ["Athletics", "Computers", "Gambling", "Mechanics",
        "Perception", "Persuasion", "Sense Motive", "Vehicles (Land)"];
    daimyoSkills = ["Athletics", "Intimidation", "Perception", "Persuasion", "Presence",
        "Vehicles (Aircraft)", "Vehicles (Land)"];
    docSkills = ["Bureaucracy", "Gambling", "History", "Mechanics", "Medicine", "Perception",
        "Persuasion", "Religion", "Sense Motive"];
    enforcerSkills = ["Acrobatics", "Athletics", "Intimidation", "Navigation", "Perception",
        "Sense Motive", "Vehicles (Land)"];
    hackerSkills = ["Computing", "Hacking", "Medicine", "Sense Motive", "Stealth",
        "Vehicles (Aircraft)", "Vehicles (Land)"];
    investigatorSkills = ["Athletics", "Bureaucracy", "Computing", "Deception", "Gambling", "Hacking",
        "Intimidation", "Investigation", "Perception", "Persuasion", "Presence", "Sense Motive", "Sleight of Hand",
        "Stealth", "Streetwise", "Tracking"];
    scoundrelSkills = ["Acrobatics", "Athletics", "Deception", "Hacking", "Investigation", "Perception",
        "Performance", "Persuasion", "Religion", "Sense Motive", "Sleight of Hand", "Stealth"];

    charAvailableSkills = [];
    charAvailableSkills.onchange = function () {
        var skillDiv = document.getElementById("skillSection");
        for (var skillCounter = 0; skillCounter < charAvailableSkills.length; skillCounter++) {
            var checkbox = document.createElement("input");
            var label = document.createElement("label");
            checkbox.type = "checkbox";
            checkbox.value = charAvailableSkills[skillCounter];
            skillDiv.appendChild(checkbox);
            skillDiv.appendChild(label);
            label.appendChild(document.createTextNode(charAvailableSkills[skillCounter]));
        };
    };

    charName.onchange = function () {
        characterObject.name = charName.value;
    }
    charOrigin.onchange = function () {
        assignOrigin();
    };
    charClass.onchange = function () {
        characterObject.class = this.value;
    }


    var contractTermsButton = document.getElementById("addTermButton");
    contractTermsButton.onclick = function () {
        switch (charBackground.value) {
            case "corpDrone":
                var injuryDC = 6
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod / 2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
                    characterObject.skillPoints += 1;
                    if (!characterObject.contractTermsServed.careers.includes("Corporate Drone")) {
                        characterObject.contractTermsServed.careers.push("Corporate Drone");
                    };
                    document.getElementById("termsServed").innerHTML = characterObject.contractTermsServed.terms;
                    characterObject.wonlongBalance += rollFunction(2, 9) * 10000;
                    corpDroneSkills.forEach(element => {
                        if (!charAvailableSkills.includes(element)) {
                            charAvailableSkills.push(element);
                        };
                    });
                } else {
                    document.getElementById("injury").innerHTML = "INJURED";
                    //contractTermsButton.disabled = true;
                };
                break;

            case "criminal":
                var injuryDC = 7;
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod / 2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
                    characterObject.skillPoints += 1;
                    if (!characterObject.contractTermsServed.careers.includes("Criminal")) {
                        characterObject.contractTermsServed.careers.push("Criminal");
                    };
                    document.getElementById("termsServed").innerHTML = characterObject.contractTermsServed.terms;
                    characterObject.wonlongBalance += rollFunction(2, 9) * 8000;
                    criminalSkills.forEach(element => {
                        if (!charAvailableSkills.includes(element)) {
                            charAvailableSkills.push(element);
                        };
                    });
                } else {
                    document.getElementById("injury").innerHTML = "INJURED";
                    //contractTermsButton.disabled = true;
                };
                break;

            case "entertainer":
                var injuryDC = 6;
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod / 2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
                    characterObject.skillPoints += 1;
                    if (!characterObject.contractTermsServed.careers.includes("Entertainer")) {
                        characterObject.contractTermsServed.careers.push("Entertainer");
                    };
                    document.getElementById("termsServed").innerHTML = characterObject.contractTermsServed.terms;
                    characterObject.wonlongBalance += rollFunction(3, 13) * 6000;
                    entertainerSkills.forEach(element => {
                        if (!charAvailableSkills.includes(element)) {
                            charAvailableSkills.push(element);
                        };
                    });
                } else {
                    document.getElementById("injury").innerHTML = "INJURED";
                    //contractTermsButton.disabled = true;
                };
                break;

            case "explorer":
                var injuryDC = 7;
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod / 2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
                    characterObject.skillPoints += 1;
                    if (!characterObject.contractTermsServed.careers.includes("Explorer")) {
                        characterObject.contractTermsServed.careers.push("Explorer");
                    };
                    document.getElementById("termsServed").innerHTML = characterObject.contractTermsServed.terms;
                    characterObject.wonlongBalance += rollFunction(2, 9) * 15000;
                    explorerSkills.forEach(element => {
                        if (!charAvailableSkills.includes(element)) {
                            charAvailableSkills.push(element);
                        };
                    });
                } else {
                    document.getElementById("injury").innerHTML = "INJURED";
                    //contractTermsButton.disabled = true;
                };
                break;

            case "laborer":
                var injuryDC = 5;
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod / 2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
                    characterObject.skillPoints += 1;
                    if (!characterObject.contractTermsServed.careers.includes("Laborer")) {
                        characterObject.contractTermsServed.careers.push("Laborer")
                    };
                    document.getElementById("termsServed").innerHTML = characterObject.contractTermsServed.terms;
                    characterObject.wonlongBalance += rollFunction(2, 9) * 9000;
                    laborerSkills.forEach(element => {
                        if (!charAvailableSkills.includes(element)) {
                            charAvailableSkills.push(element);
                        };
                    });
                } else {
                    document.getElementById("injury").innerHTML = "INJURED";
                    //contractTermsButton.disabled = true;
                };
                break;

            case "lawEnforcement":
                var injuryDC = 7;
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod / 2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
                    characterObject.skillPoints += 1;
                    if (!characterObject.contractTermsServed.careers.includes("Law Enforcement")) {
                        characterObject.contractTermsServed.careers.push("Law Enforcement");
                    };
                    document.getElementById("termsServed").innerHTML = characterObject.contractTermsServed.terms;
                    characterObject.wonlongBalance += rollFunction(3, 13) * 8000;
                    lawEnforcementSkills.forEach(element => {
                        if (!charAvailableSkills.includes(element)) {
                            charAvailableSkills.push(element);
                        };
                    });
                } else {
                    document.getElementById("injury").innerHTML = "INJURED";
                    //contractTermsButton.disabled = true;
                };
                break;

            case "merchant":
                var injuryDC = 7;
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod / 2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
                    characterObject.skillPoints += 1;
                    if (!characterObject.contractTermsServed.careers.includes("Merchant")) {
                        characterObject.contractTermsServed.careers.push("Merchant");
                    };
                    document.getElementById("termsServed").innerHTML = characterObject.contractTermsServed.terms;
                    characterObject.wonlongBalance += rollFunction(2, 9) * 15000;
                    merchantSkills.forEach(element => {
                        if (!charAvailableSkills.includes(element)) {
                            charAvailableSkills.push(element);
                        };
                    });
                } else {
                    document.getElementById("injury").innerHTML = "INJURED";
                    //contractTermsButton.disabled = true;
                };
                break;

            case "military":
                var injuryDC = 8;
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod / 2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
                    characterObject.skillPoints += 1;
                    if (!characterObject.contractTermsServed.careers.includes("Military")) {
                        characterObject.contractTermsServed.careers.push("Military");
                    };
                    document.getElementById("termsServed").innerHTML = characterObject.contractTermsServed.terms;
                    characterObject.wonlongBalance += rollFunction(3, 13) * 10000;
                    militarySkills.forEach(element => {
                        if (!charAvailableSkills.includes(element)) {
                            charAvailableSkills.push(element);
                        };
                    });
                } else {
                    document.getElementById("injury").innerHTML = "INJURED";
                    //contractTermsButton.disabled = true;
                };
                break;

            case "technician":
                var injuryDC = 6;
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod / 2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
                    characterObject.skillPoints += 1;
                    if (!characterObject.contractTermsServed.careers.includes("Technician")) {
                        characterObject.contractTermsServed.careers.push("Technician");
                    };
                    document.getElementById("termsServed").innerHTML = characterObject.contractTermsServed.terms;
                    characterObject.wonlongBalance += rollFunction(2, 9) * 7000;
                    technicianSkills.forEach(element => {
                        if (!charAvailableSkills.includes(element)) {
                            charAvailableSkills.push(element);
                        };
                    });
                } else {
                    document.getElementById("injury").innerHTML = "INJURED";
                    //contractTermsButton.disabled = true;
                };
                break;

            case "unskilledWorker":
                var injuryDC = 4;
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod / 2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
                    characterObject.skillPoints += 1;
                    if (!characterObject.contractTermsServed.careers.includes("Unskilled Worker")) {
                        characterObject.contractTermsServed.careers.push("Unskilled Worker");
                    };
                    document.getElementById("termsServed").innerHTML = characterObject.contractTermsServed.terms;
                    characterObject.wonlongBalance += rollFunction(2, 9) * 6000;
                    unskilledWorkerSkills.forEach(element => {
                        if (!charAvailableSkills.includes(element)) {
                            charAvailableSkills.push(element);
                        };
                    });
                } else {
                    document.getElementById("injury").innerHTML = "INJURED";
                    //contractTermsButton.disabled = true;
                };
                break;

            default:

                break;

        };

    };
    var rollButton = document.getElementById("abilityScoreButton");
    rollButton.onclick = function () {
        characterObject.charStrScore = rollFunction(2, 13) + 5;
        document.getElementById("strengthScore").innerHTML = characterObject.charStrScore;
        if (characterObject.charStrMod >= 0) {
            document.getElementById("strengthMod").innerHTML = "+" + characterObject.charStrMod;
        } else {
            document.getElementById("strengthMod").innerHTML = characterObject.charStrMod;
        };


        characterObject.charDexScore = rollFunction(2, 13) + 5;
        document.getElementById("dexterityScore").innerHTML = characterObject.charDexScore;
        if (characterObject.charDexMod >= 0) {
            document.getElementById("dexterityMod").innerHTML = "+" + characterObject.charDexMod;
        } else {
            document.getElementById("dexterityMod").innerHTML = characterObject.charDexMod;
        };

        characterObject.charConScore = rollFunction(2, 13) + 5;
        document.getElementById("constitutionScore").innerHTML = characterObject.charConScore;
        if (characterObject.charConMod >= 0) {
            document.getElementById("constitutionMod").innerHTML = "+" + characterObject.charConMod;
        } else {
            document.getElementById("constitutionMod").innerHTML = characterObject.charConMod;
        };

        characterObject.charIntScore = rollFunction(2, 13) + 5;
        document.getElementById("intelligenceScore").innerHTML = characterObject.charIntScore;
        if (characterObject.charIntMod >= 0) {
            document.getElementById("intelligenceMod").innerHTML = "+" + characterObject.charIntMod;
        } else {
            document.getElementById("intelligenceMod").innerHTML = characterObject.charIntMod;
        };


        characterObject.charTecScore = rollFunction(2, 13) + 5;
        document.getElementById("technologyScore").innerHTML = characterObject.charTecScore;
        if (characterObject.charTecMod >= 0) {
            document.getElementById("technologyMod").innerHTML = "+" + characterObject.charTecMod;
        } else {
            document.getElementById("technologyMod").innerHTML = characterObject.charTecMod;
        };


        characterObject.charPeoScore = rollFunction(2, 13) + 5;
        document.getElementById("peopleScore").innerHTML = characterObject.charPeoScore;
        if (characterObject.charPeoMod >= 0) {
            document.getElementById("peopleMod").innerHTML = "+" + characterObject.charPeoMod;
        } else {
            document.getElementById("peopleMod").innerHTML = characterObject.charPeoMod;
        };


    };
    document.getElementById("abilityButton").onclick = function () {
        document.getElementById("abilityScoreContainer").style = "display: none";
        document.getElementById("originContainer").style = "display: block";
    };
    document.getElementById("originButton").onclick = function () {
        document.getElementById("originContainer").style = "display: none";
        document.getElementById("contractTermContainer").style = "display: block";
    };
    document.getElementById("careerButton").onclick = function () {
        document.getElementById("contractTermContainer").style = "display: none";
        document.getElementById("skillContainer").style = "display: block";
        document.getElementById("skillSelectLabel").innerHTML = `Select ${characterObject.skillPoints} skills:`;
    };
    document.getElementsByClassName("skillOption").onclick = function (event) {
        characterObject.skillPoints -= 1;
        if (characterObject.skillPoints === 0) {
            document.getElementsByClassName("skillOption").disabled = true;
        }
    }
}
//////////////////////////TODO: FIX SKILLPOINTS & SKILL SELECTION///////////////////////////////////


