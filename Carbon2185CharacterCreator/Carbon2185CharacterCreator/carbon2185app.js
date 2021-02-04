var characterObject;
/*TODO:
Test classes for Origin, continue work on player classes
Ability score increase/Regular Joe AS choice
AC/HP stuff
Present Character Sheet
Level Up function
BONUS TODO:
Equipment management/stats
POST/GET methods for multiple characters
*/
window.onload = function () {
    //skill array for each career
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
    //skills for each character class
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

    var rollFunction = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    ///////////////////TODO SUBCLASS & ABILITY SCORE CHANGES/////////////////////
    function chooseSubclass(subclass1, subclass2, subclass3) {
        var subclassDiv = document.getElementById("subclassContainer");
        subclassDiv.style = "display: block"
        subclassText = document.createTextNode("Choose your subclass:");
        subclassDiv.appendChild(subclassText);
        if (subclass3) {
            var option1Button = document.createElement("button");
            option1Button.innerHTML = `${subclass1.title}`;
            subclassDiv.appendChild(option1Button);
            var option2Button = document.createElement("button");
            option2Button.innerHTML = `${subclass2.title}`;
            subclassDiv.appendChild(option2Button);
            var option3Button = document.createElement("button");
            option3Button.innerHTML = `${subclass3.title}`;
            subclassDiv.appendChild(option3Button);
        } else {
            var option1Button = document.createElement("button");
            option1Button.innerHTML = `${subclass1.title}`;
            var option2Button = document.createElement("button");
            option2Button.innerHTML = `${subclass2.title}`;
        };
    };
    function abilityScoreIncrease() {
        var abilityPoints = 2;
        abilityDiv = document.getElementById("ASIncreaseContainer");
        checkboxes = abilityDiv.querySelectorAll("input[type=checkbox]");
        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('change', function (e) {
                //check if box is checked, if so decrement skillPoints, otherwise increment
                if (e.target.checked) {
                    console.log("box checked")
                    abilityPoints--;
                } else {
                    console.log("box unchecked")
                    abilityPoints++;
                    enableAllCheckboxes(checkboxes);
                }

                if (characterObject.skillPoints == 0) {
                    disableRemainingCheckboxes(checkboxes);
                }
                label.innerText = characterObject.skillPoints + " points remaining";
            });
        });
        function enableAllCheckboxes(checkboxes) {
            checkboxes.forEach(function (c) {
                c.disabled = false;

            });
        }

        function disableRemainingCheckboxes(checkboxes) {
            checkboxes.forEach(function (c) {
                if (!c.checked) {
                    c.disabled = true;
                }

            });
        }
    }
    var charName = document.getElementById("nameInput");
    var charOrigin = document.getElementById("originSelect");
    var charBackground = document.getElementById("backgroundSelect");
    charAvailableSkills = [];
    //character object declaration
    characterObject = {
        name: charName.value,
        level: 0,
        levelUpFunction: function (classObject) {
            characterObject.level++;
            characterObject.hitPoints
        },


        origin: "",
        class: {
            primary: {},
            subClass: {},
            features: []
        },
        armorClass: 10,
        proficiencyBonus: 2,
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
    //class object declarations
    
        daimyoObject = {
            title: "Daimyo",
            classSkillPoints: 2,
            classSkills: ["Athletics", "Intimidation", "Perception", "Persuasion", "Presence",
                "Vehicles (Aircraft)", "Vehicles (Land)"],
            hitDie: 12,
            hitDieRoll: function () {
                return rollFunction(1, 13) + characterObject.charConMod;
            },
            proficiencies: {
                armor: ["Medium Armor", "Heavy Armor"],
                weapons: ["Melee weapons", "Pistols", "Submachine guns", "Shotguns", "Heavy weapons"],
                savingThrows: ["Fortitude"]
            },
            resources: {
                furyCount: 2
            },
            subclassOptions: {
                sugo: {
                    title: "Sugo",
                    level3: {
                        ballisticFury: "Ballistic fury text"
                    },
                    level6: {
                        furiousFocus: "Furious focus text"
                    },
                    level10: {
                        feverPitch: "Fever Pitch Text"
                    }
                },
                sengoku: {
                    title: "Sengoku",
                    3: {},
                    6: {},
                    10: {}

                }
            },
            level1: {
                features: {
                    fury: "fury text"
                }
            },
            level2: {
                features: {
                    dangerSense: "Danger Sense text",
                    rallyingCry: "Rallying Cry Text"
                }
            },
            level3: {
                //choose subclass function
            },
            level4: {
                //ASI function
            },
        };
    //class testing
    class Career {
        constructor(title, injuryDC, minWageRoll, maxWageRoll, wage, skillArray) {
            this.title = title;
            this.injuryDC = injuryDC;
            this.wage = wage;
            this.availableSkills = skillArray;
            this.minWageRoll = minWageRoll;
            this.maxWageRoll = maxWageRoll;
            this.proficiencies = "One tool or language of your choice";
        };
        injuryCheck() {
            const injuryRoll = rollFunction(2, 13) + Math.ceil(characterObject.charIntMod / 2);
            if (injuryRoll > this.injuryDC) {
                characterObject.contractTermsServed.terms += 1;
                characterObject.skillPoints += 1;
                characterObject.traits.push(this.proficiencies);
                if (!characterObject.contractTermsServed.careers.includes(this.title)) {
                    characterObject.contractTermsServed.careers.push(this.title);
                };
                document.getElementById("termsServed").innerHTML = characterObject.contractTermsServed.terms;
                characterObject.wonlongBalance += rollFunction(this.minWageRoll, this.maxWageRoll) * this.wage;
                this.availableSkills.forEach(element => {
                    if (!charAvailableSkills.includes(element)) {
                        charAvailableSkills.push(element);
                    };
                });
            } else {
                document.getElementById("injury").innerHTML = "INJURED";
                //contractTermsButton.disabled = true;
            };
        };
    };
    class PlayerClass {
        constructor(title, skillpoints, skillArray, hitDieMax,) {
            this.title = title;
            this.skillPoints = skillpoints;
            this.classSkills = skillArray;
            this.hitDieMax = hitDieMax;
        };
        hitDieRoll() {
            return rollFunction(1, hitDieMax) + characterObject.charConMod;
        };
    };
    //Player class instance declarations
    daimyoClass = new PlayerClass("Daimyo", 2, daimyoSkills, 13);
    //career class instance declarations
    const corpDroneCareer = new Career("Corporate Drone", 6, 2, 9, 10000, corpDroneSkills);
    const criminalCareer = new Career("Criminal", 7, 2, 9, 8000, criminalSkills);
    const entertainerCareer = new Career("Entertainer", 6, 3, 13, 6000, entertainerSkills);
    const explorerCareer = new Career("Explorer", 7, 2, 9, 15000, explorerSkills);
    const laborerCareer = new Career("Laborer", 5, 2, 9, 9000, laborerSkills);
    const lawCareer = new Career("Law Enforcement", 7, 3, 13, 8000, lawEnforcementSkills);
    const merchantCareer = new Career("Merchant", 7, 2, 9, 15000, merchantSkills);
    const militaryCareer = new Career("Military", 8, 3, 13, 10000, militarySkills);
    const technicianCareer = new Career("Technician", 6, 2, 9, 7000, technicianSkills);
    const unskilledWorkerCareer = new Career("Unskilled Worker", 4, 2, 9, 6000, unskilledWorkerSkills);

    //apply starting stats and features for each origin
    function assignOrigin() {
        for (var skillCount = 0; skillCount < charAvailableSkills.length; skillCount++) {
            charAvailableSkills = [];
        };
        switch (charOrigin.value) {

            case "bruiserBadlander":
                characterObject.origin = "Bruiser Badlander";
                characterObject.speed = 30;
                characterObject.charDexScore += 1;
                characterObject.charStrScore += 2;
                charAvailableSkills.push("Intimidation");
                characterObject.proficientSkills.push("Intimidation")
                characterObject.traits.push("bruiserPlaceholderText");
                break;
            case "scavengerBadlander":
                characterObject.origin = "Scavenger Badlander";
                characterObject.speed = 30;
                characterObject.charDexScore += 1;
                characterObject.charTecScore += 2;
                charAvailableSkills.push("Mechanics");
                characterObject.proficientSkills.push("Mechanics")
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
                characterObject.origin = "Regular Joe";
                characterObject.speed = 30;
                characterObject.skillPoints += 2;
                allSkills.forEach(skill => {
                    if (!charAvailableSkills.includes(skill)) {
                        charAvailableSkills.push(skill);
                    };
                });
                characterObject.charPeoScore += 2;
                characterObject.traits.push("RegJoe placeholder text");
                //Ability Score increase choice
                break;
            case "houstonDynamicsSynth":
                characterObject.origin = "Houston Dynamics Synth";
                characterObject.speed = 30;
                characterObject.charConScore += 2;
                characterObject.charDexScore += 2;
                characterObject.armorClass = 13 + charDexMod;
                characterObject.traits.push("HDSynth placeholder text");
                break;
            case "shenzenSolutionsSynth":
                characterObject.origin = "Houston Dynamics Synth";
                characterObject.speed = 30;
                characterObject.charConScore += 2;
                characterObject.charPeoScore += 1;
                characterObject.armorClass = 13 + charDexMod;
                characterObject.traits.push("SSSynth placeholder text");
                break;
            case "visserRoboticsSynth":
                characterObject.origin = "Houston Dynamics Synth";
                characterObject.speed = 30;
                characterObject.charConScore += 2;
                characterObject.charStrcore += 1;
                characterObject.armorClass = 13 + charDexMod;
                characterObject.traits.push("VRSynth placeholder text");
                break;
        };
        //calculate modifiers from scores
        characterObject.charStrMod = Math.floor((characterObject.charStrScore - 10) / 2);
        characterObject.charDexMod = Math.floor((characterObject.charDexScore - 10) / 2);
        characterObject.charConMod = Math.floor((characterObject.charConScore - 10) / 2);
        characterObject.charIntMod = Math.floor((characterObject.charIntScore - 10) / 2);
        characterObject.charTecMod = Math.floor((characterObject.charTecScore - 10) / 2);
        characterObject.charPeoMod = Math.floor((characterObject.charPeoScore - 10) / 2);
    };
    //test parameter version
    //////////////////////////TODO continue testing class assignment via function/parameter///////////////////////
    //////////////////////////TODO: REGULAR JOE AS CHOICES///////////////////////////////////
    function assignClassTest(classObject) {
        characterObject.class = classObject;
        characterObject.level++;
        characterObject.skillPoints += classObject.classSkillPoints;
        classObject.classSkills.forEach(skill => {
            if (!charAvailableSkills.includes(skill)) {
                charAvailableSkills.push(skill);
            }
        })
    };

    charName.onchange = function () {
        characterObject.name = charName.value;
    };

    var contractTermsButton = document.getElementById("addTermButton");
    //function to assign contract term - rolls for injury, adds skills and wages if passed
    //prevents further contract terms if failed
    contractTermsButton.onclick = function () {
        switch (charBackground.value) {
            case "corpDrone":
                corpDroneCareer.injuryCheck();
                break;

            case "criminal":
                criminalCareer.injuryCheck();
                break;

            case "entertainer":
                entertainerCareer.injuryCheck();
                break;

            case "explorer":
                explorerCareer.injuryCheck();
                break;

            case "laborer":
                laborerCareer.injuryCheck();
                break;

            case "lawEnforcement":
                lawCareer.injuryCheck();
                break;

            case "merchant":
                merchantCareer.injuryCheck();
                break;

            case "military":
                militaryCareer.injuryCheck();
                break;

            case "technician":
                technicianCareer.injuryCheck();
                break;

            case "unskilledWorker":
                unskilledWorkerCareer.injuryCheck();
                break;

            default:

                break;

        };

    };
    var rollButton = document.getElementById("abilityScoreButton");
    //Ability Score generation
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
        document.getElementById("abilityButton").style = "display: block";

    };
    //switch from ability score screen to origin screen
    document.getElementById("abilityButton").onclick = function () {
        document.getElementById("abilityScoreContainer").style = "display: none";
        document.getElementById("originContainer").style = "display: block";
    };
    //switch from origin screen to career screen
    document.getElementById("originButton").onclick = function () {
        assignOrigin();
        assignClassTest(daimyoObject);
        document.getElementById("originContainer").style = "display: none";
        document.getElementById("contractTermContainer").style = "display: block";
    };
    //hide career screen, show skill screen, skill selection
    document.getElementById("careerButton").onclick = function () {
        charAvailableSkills.sort();
        document.getElementById("contractTermContainer").style = "display: none";
        //create checkbox element for each skill in availableSkills
        var skillDiv = document.getElementById("skillSection");
        for (var skillCounter = 0; skillCounter < charAvailableSkills.length; skillCounter++) {
            var checkbox = document.createElement("input");
            var label = document.createElement("label");
            checkbox.type = "checkbox";
            checkbox.className = "skillOption";
            checkbox.value = charAvailableSkills[skillCounter];
            if (characterObject.proficientSkills.includes(checkbox.value)) {
                checkbox.checked = true;
                checkbox.disabled = true;
            }
            skillDiv.appendChild(checkbox);
            skillDiv.appendChild(label);
            label.appendChild(document.createTextNode(charAvailableSkills[skillCounter]));
        };
        //display skill choice screen
        document.getElementById("skillContainer").style = "display: block";
        document.getElementById("skillSelectLabel").innerHTML = `Select ${characterObject.skillPoints} skills:`;

        skillDiv = document.getElementById("skillContainer")
        skillOptions = skillDiv.getElementsByTagName("INPUT");
        //returns all checkboxes to a nodeList
        checkboxes = document.querySelectorAll("input[type=checkbox]");
        label = document.getElementById("skillSelectLabel");
        //run function on each checkbox
        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('change', function (e) {
                //check if box is checked, if so decrement skillPoints, otherwise increment
                if (e.target.checked) {
                    console.log("box checked")
                    characterObject.skillPoints--;
                } else {
                    console.log("box unchecked")
                    characterObject.skillPoints++;
                    enableAllCheckboxes(checkboxes);
                }

                if (characterObject.skillPoints == 0) {
                    disableRemainingCheckboxes(checkboxes);
                }
                label.innerText = characterObject.skillPoints + " points remaining";
            });
        });
        function enableAllCheckboxes(checkboxes) {
            checkboxes.forEach(function (c) {
                c.disabled = false;
                if (characterObject.proficientSkills.includes(c.value)) {
                    c.disabled = true;
                }
            });
        }

        function disableRemainingCheckboxes(checkboxes) {
            checkboxes.forEach(function (c) {
                if (!c.checked) {
                    c.disabled = true;
                }

            });
        }
    };

    //sends all selected skills to the proficientSkills array in characterObject
    var getSelectedSkills = () => {
        var selectedSkills = new Array();
        for (var i = 0; i < skillOptions.length; i++) {
            if (skillOptions[i].checked) {
                selectedSkills.push(skillOptions[i].value);
                console.log(`added ${skillOptions[i].value} to selectedSkills`)
            }
        }
        selectedSkills.forEach(skill => {
            characterObject.proficientSkills.push(skill);
        })
    }
    document.getElementById("submitButton").onclick = () => {
        getSelectedSkills;
        document.getElementById("skillContainer").style = "display: none";
        document.getElementById("sheetContainer").style = "display: block";
    }
    
    document.getElementById("testButton").onclick = () => {
        document.getElementById("ASIncreaseContainer").style = "display: block";
        var abilityPoints = 2
        var checkboxes = document.getElementById("ASIncreaseContainer").querySelectorAll("input [type=checkbox]");
        
    }
}


