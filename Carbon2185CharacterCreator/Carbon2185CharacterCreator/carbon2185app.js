var characterObject;

window.onload = function () {
    //character object declaration
    characterObject = {
        name: charName.value,
        origin: "",
        subOrigin: "",
        class: {primary: "",
                subClass: ""},
        wonlongBalance: 0,
        contractTermsServed: {careers: [],
                              terms: 0},
        proficientSkills: [],
        traits: []
    };
    var rollFunction = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    var assignOrigin = originName => {
        characterObject.origin = originName;
    }
    var charName = document.getElementById("nameInput");
    var charOrigin = document.getElementById("originSelect");
    var charSubOrigin = document.getElementById("subOriginSelect");
    var charClass = document.getElementById("classSelect");
    var charBackground = document.getElementById("backgroundSelect");
    
    function assignOrigin() {
        switch(charSubOrigin.value){
            case "bruiserBadlander":
                characterObject.origin = "Bruiser Badlander";
                characterObject.speed = 30;
                characterObject.charDexScore += 1;
                characterObject.charStrScore += 2;
                characterObject.proficientSkills.push("Intimidation");
                characterObject.traits.push("bruiserPlaceholderText");
                break;
            case "scavengerBadlander":
                characterObject.origin = "Scavenger Badlander";
                characterObject.speed = 30;
                characterObject.charDexScore += 1;
                characterObject.charTecScore += 2;
                characterObject.proficientSkills.push("Mechanics");
                characterObject.traits.push("scavengerPlaceholderText");
                break;  
            case "gutterPunk":
                characterObject.origin = "Gutter Punk";
                characterObject.speed = 35;
                characterObject.charDexScore += 1;
                characterObject.charStrScore += 2;
///////////////////////////TODO SELECT ORIGIN SKILL///////////////////////////////////////////////////
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
               
    };
    function assignOrigin(originObject) {
        characterObject
    }
    allSkills = ["Acrobatics", "Athletics", "Bureaucracy", "Computing", "Deception", "Engineering", 
    "Gambling", "Hacking", "History", "Intimidation", "Investigation", "Mechanics", "Medicine", "Navigation", 
    "Perception", "Performance", "Persuasion", "Presence", "Religion", "Robotics", "Sense Motive", 
    "Sleight of Hand", "Stealth", "Stretwise", "Tracking", "Vehicles (Aircraft)", "Vehicles (Land)"];
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
    

    charName.onchange = function () {
        characterObject.name = charName.value;
        document.getElementById("nameDisplay").innerHTML = charName.value;
    }
    charOrigin.onchange = function (originName) {
        
    }
    charSubOrigin.onchange = function () {
        characterObject.subOrigin = this.value;
    }
    charClass.onchange = function () {
        characterObject.class = this.value;
    }
    charBackground.onchange = function () {
        characterObject.background = this.value;
    }
    /*charContractTerms.onchange = function () {
        characterObject.contractTerms = this.value;
    }*/
    /* SKIDMORE'S DEPENDENT DROPDOWN CODE
    charSubOrigin.length = 0;
        var options = ["Bruiser", "Scavenger"];

        for (let i = 0; i < options.length; i++) {
            charSubOrigin.options[charSubOrigin.options.length] = new Option(options[i], options[i]);
        } */
    var contractTermsButton = document.getElementById("addTermButton");
    contractTermsButton.onclick = function () {
        switch (charBackground.value) {
            case "corpDrone":
                var injuryDC = 6
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod/2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
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
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod/2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
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
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod/2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
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
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod/2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
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
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod/2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
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
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod/2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
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
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod/2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
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
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod/2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
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
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod/2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
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
                var injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod/2);
                if (injuryRoll > injuryDC) {
                    characterObject.contractTermsServed.terms += 1;
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

        }

    }
    var rollButton = document.getElementById("abilityScoreButton");
    
    
    var addContractTerm = (career) => {
        switch (career) {
            case "corpDrone":

                break;
            case "criminal":

                break;
            case "entertainer":

                break;
            case "explorer":

                break;
            case "laborer":
                break;
            case "lawEnforcement":

                break;
            case "merchant":

                break;
            case "military":

                break;
            case "technician":

                break;
            case "unskilledWorker":

                break;
            default:

                break;

        }
    }
    rollButton.onclick = function () {
        characterObject.charStrScore = rollFunction(2, 13)+5;
        characterObject.charStrMod = Math.floor((characterObject.charStrScore - 10) / 2);
        document.getElementById("strengthScore").innerHTML = characterObject.charStrScore;
        if (characterObject.charStrMod >= 0) {
            document.getElementById("strengthMod").innerHTML = "+" + characterObject.charStrMod;
        } else {
            document.getElementById("strengthMod").innerHTML = characterObject.charStrMod;
        }


        characterObject.charDexScore = rollFunction(2, 13)+5;
        characterObject.charDexMod = Math.floor((characterObject.charDexScore - 10) / 2);
        document.getElementById("dexterityScore").innerHTML = characterObject.charDexScore;
        if (characterObject.charDexMod >= 0) {
            document.getElementById("dexterityMod").innerHTML = "+" + characterObject.charDexMod;
        } else {
            document.getElementById("dexterityMod").innerHTML = characterObject.charDexMod;
        }

        characterObject.charConScore = rollFunction(2, 13)+5;
        characterObject.charConMod = Math.floor((characterObject.charConScore - 10) / 2);
        document.getElementById("constitutionScore").innerHTML = characterObject.charConScore;
        if (characterObject.charConMod >= 0) {
            document.getElementById("constitutionMod").innerHTML = "+" + characterObject.charConMod;
        } else {
            document.getElementById("constitutionMod").innerHTML = characterObject.charConMod;
        }

        characterObject.charIntScore = rollFunction(2, 13)+5;
        characterObject.charIntMod = Math.floor((characterObject.charIntScore - 10) / 2);
        document.getElementById("intelligenceScore").innerHTML = characterObject.charIntScore;
        if (characterObject.charIntMod >= 0) {
            document.getElementById("intelligenceMod").innerHTML = "+" + characterObject.charIntMod;
        } else {
            document.getElementById("intelligenceMod").innerHTML = characterObject.charIntMod;
        }


        characterObject.charTecScore = rollFunction(2, 13)+5;
        characterObject.charTecMod = Math.floor((characterObject.charTecScore - 10) / 2);
        document.getElementById("technologyScore").innerHTML = characterObject.charTecScore;
        if (characterObject.charTecMod >= 0) {
            document.getElementById("technologyMod").innerHTML = "+" + characterObject.charTecMod;
        } else {
            document.getElementById("technologyMod").innerHTML = characterObject.charTecMod;
        }


        characterObject.charPeoScore = rollFunction(2, 13)+5;
        characterObject.charPeoMod = Math.floor((characterObject.charPeoScore - 10) / 2);
        document.getElementById("peopleScore").innerHTML = characterObject.charPeoScore;
        if (characterObject.charPeoMod >= 0) {
            document.getElementById("peopleMod").innerHTML = "+" + characterObject.charPeoMod;
        } else {
            document.getElementById("peopleMod").innerHTML = characterObject.charPeoMod;
        }


    }
}



