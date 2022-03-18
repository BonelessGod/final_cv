// Ce script est une adaptation du script de w3school pour réduire le header lorsque l'utilisateur descend sur la page
// Effectuer un scrolling sur la page appelle la fonction scrollFunction

window.onscroll = function() {scrollFunction()};

// Les deux variables ci-dessous définissent le nombre de pixel descendu avant de réduite le header.
// Le premier est destiné aux petits écrans (moins de 1024px de largeur) et le deuxième pour les plus grand (plus de 1024px)

const scrollShrinkCap = 30;
const scrollShrinkCapDesktop = 30;

// Début de la fonction scrollFunction

function scrollFunction() {

/* 
    J'ai imbriqué deux conditions: 
    
    - La première permet de cibler selon la taille d'écran
    - La deuxième, imbriqué dans la première, permet 
    de prendre en compte le scrolling dans la page
    
    Le résultat de la condition est la modification de style des éléments du header selon la circonstance
*/

  if(window.matchMedia("(min-width: 1024px)").matches) {

    if (document.documentElement.scrollTop >= scrollShrinkCapDesktop){

      document.getElementById("headerContentImage").style.width = "10%";
      document.getElementById("headerContentTitleZone").style.transform = "scale(0.8)";
      document.getElementById("headerContentImage").style.transform = "rotate(360deg)";
      document.getElementById("headerContentImage").style.transition = "300ms";

    } else {

      document.getElementById("headerContentImage").style.width = "20%";
      document.getElementById("headerContentTitleZone").style.transform = "scale(1)";
      document.getElementById("headerContentImage").style.transform = "";

    }

  } else {

    if (document.documentElement.scrollTop > scrollShrinkCap){

      document.getElementById("headerContentImage").style.width = "25%";
      document.getElementById("headerContentTitleZone").style.transform = "scale(0.8)";
      document.getElementById("headerContentImage").style.transform = "rotate(360deg)";
      document.getElementById("headerContentImage").style.transition = "300ms";

    } else {

      document.getElementById("headerContentImage").style.width = "50%";
      document.getElementById("headerContentTitleZone").style.transform = "scale(1)";
      document.getElementById("headerContentImage").style.transform = "";

    }

  }

}
