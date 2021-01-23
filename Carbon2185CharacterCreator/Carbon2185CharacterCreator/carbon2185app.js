var characterObject;

window.onload = function () {
    var charName = document.getElementById("nameInput");
    var charOrigin = document.getElementById("originSelect");
    var charSubOrigin = document.getElementById("subOriginSelect");
    var charClass = document.getElementById("classSelect");
    var charBackground = document.getElementById("backgroundSelect");
    var charContractTerms = document.getElementById("contractTermsSelect");
    characterObject = {
        name: charName.value,
        origin: charOrigin.value,
        subOrigin: charSubOrigin.value,
        class: charClass.value,
        background: charBackground.value,
        contractTerms: charContractTerms.value
    };

    charName.onchange = function () {
        characterObject.name = charName.value;
    }
    charOrigin.onchange = function () {
        characterObject.origin = this.value;
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
    charContractTerms.onchange = function () {
        characterObject.contractTerms = this.value;
    }
    var rollButton = document.getElementById("abilityScoreButton");
    var abilityScoreRoll = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min) + 5;
    }
    rollButton.onclick = function () {
        characterObject.charStrScore = abilityScoreRoll(2, 13);
        document.getElementById("strengthScore").innerHTML = characterObject.charStrScore;
        
        characterObject.charDexScore = abilityScoreRoll(2, 13);
        document.getElementById("dexterityScore").innerHTML = characterObject.charDexScore;

        characterObject.charConScore = abilityScoreRoll(2, 13);
        document.getElementById("constitutionScore").innerHTML = characterObject.charConScore;

        characterObject.charIntScore = abilityScoreRoll(2, 13);
        document.getElementById("intelligenceScore").innerHTML = characterObject.charIntScore;

        characterObject.charTecScore = abilityScoreRoll(2, 13);
        document.getElementById("technologyScore").innerHTML = characterObject.charTecScore;

        characterObject.charPeoScore = abilityScoreRoll(2, 13);
        document.getElementById("peopleScore").innerHTML = characterObject.charPeoScore;

    }
}



