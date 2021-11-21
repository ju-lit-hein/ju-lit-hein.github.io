function score () {
    const bonne_reponse_1 = document.querySelector('input[id="radio-1"]');
    const bonne_reponse_2 = document.querySelector('input[id="radio-4"]');
    const bonne_reponse_3 = document.querySelector('input[id="radio-8"]');
    const bonne_reponse_4 = document.querySelector('input[id="radio-12"]');
    let total = 0;
    if (bonne_reponse_1.checked) {
        total++;
    };
    if (bonne_reponse_2.checked) {
        total++;
    };
    if (bonne_reponse_3.checked) {
        total++;
    };
    if (bonne_reponse_4.checked) {
        total++;
    };
    document.getElementById('resultat').innerHTML = "Votre score est de " + total + "/4.";
};