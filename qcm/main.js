function score () {
    const bonne_reponse_1 = document.querySelector('input[id="bonne_reponse_1"]');
    const bonne_reponse_2 = document.querySelector('input[id="bonne_reponse_2"]');
    const bonne_reponse_3 = document.querySelector('input[id="bonne_reponse_3"]');
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
    document.getElementById('resultat').innerHTML = total;
    var element = document.getElementsById('score');
    element.classList.remove('affichage');
};