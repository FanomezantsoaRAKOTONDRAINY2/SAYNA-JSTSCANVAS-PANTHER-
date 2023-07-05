const container = document.querySelector('.les-actuer');
const flecheDroite = document.querySelector('#droite');
const flecheGauche = document.querySelector('#gauche');
const suit = document.querySelector('.cursair');


// initialisation
let page = 0;

flecheDroite.addEventListener('click', () => {
    page-- ;
    afficherMasquer();
    container.style.transform = "translate("+ page*975 +"px)";
});

flecheGauche.addEventListener('click', () => {
    page++ ;
    afficherMasquer();
    container.style.transform = "translate("+ page*975 +"px)";
    // container.style.transform = "translate("+ page*975 +"px)";
});

afficherMasquer();

// Affichage des flèches
function afficherMasquer() {
    if(page <= -5) {
        page = -4.5;
        flecheDroite.style.visibility = "hidden";
    }
    else if(page >= 0) {
        page = 0;
        flecheGauche.style.visibility = "hidden";
    }
    else {
        flecheGauche.style.visibility = "visible";
        flecheDroite.style.visibility = "visible";
    }
};
    // l'image qui suit le cursair

    window.addEventListener("mousemove", function (e){
        suit.style.left = e.clientX+"px";
        suit.style.top = e.clientY+"px";

    });

