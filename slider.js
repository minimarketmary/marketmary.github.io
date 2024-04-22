// Sélection des éléments HTML avec les IDs correspondants
const carouselBoutonGauche = document.getElementById("carousel-bouton-gauche");
const carouselBoutonDroite = document.getElementById("carousel-bouton-droite");

// Initialisation des variables
let item = null; // L'élément actuellement affiché
let elementValue = 0; // La valeur de l'élément actuellement affiché (index)

// Gestionnaire d'événement pour le bouton gauche du carrousel
carouselBoutonGauche.addEventListener('click', function() {
    if (elementValue > 0) { // Vérifie si l'élément actuel n'est pas le premier
        elementValue -= 1;
        item = "carousel-item-" + elementValue;
        document.getElementById(item).style.display = "block";
        carouselBoutonDroite.style.display = "block";
        carouselBoutonGauche.style.display = "block";
        if (elementValue === 0) { // Si nous sommes revenus au premier élément
            carouselBoutonGauche.style.display = "none";
        }
        
        for (let i = 0; i < 4; i++) { // Boucle pour masquer les autres éléments (0, 1, 2)
            if (i !== elementValue) { // Si l'élément n'est pas celui que nous voulons afficher
                document.getElementById("carousel-item-" + i).style.display = "none";
            }
        }
    }
});

// Gestionnaire d'événement pour le bouton droit du carrousel
carouselBoutonDroite.addEventListener('click', function() {
    if (elementValue < 3) { // Vérifie si l'élément actuel n'est pas le dernier
        elementValue += 1; 
        item = "carousel-item-" + elementValue;
        document.getElementById(item).style.display = "block";
        carouselBoutonDroite.style.display = "block";
        carouselBoutonGauche.style.display = "block";
        if (elementValue === 3) { // Si nous sommes arrivés au dernier élément
            carouselBoutonDroite.style.display = "none";
        }
        
        for (let i = 0; i < 4; i++) { // Boucle pour masquer les autres éléments (0, 1, 2)
            if (i !== elementValue) { // Si l'élément n'est pas celui que nous voulons afficher
                document.getElementById("carousel-item-" + i).style.display = "none";
            }
        }
    }
});