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
}



