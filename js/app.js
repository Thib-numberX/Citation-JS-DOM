// --- Events ---
// une liste d'évènements est mise à disposition par JS et le navigateur
// par exemple, l'évènement "click"
// Quand l'évènement arrive/survient, JS exécute toutes les fonctions attachées à cet évènement
// => l'exécution de la fonction attachée est désynchronisée

// On place notre code dans un module
const app = {
    // Propriété "counter"
    currentQuoteIndex: 0,
    // Méthode appelée au chargement du DOM
    init: function() {
        // attache la méthode app.handleClickOnDisplayAddFormButton à l'évènement "click" sur le bouton "ajouter une citation"
        document.getElementById('btnDisplayAddForm').addEventListener('click', app.handleClickOnDisplayAddFormButton);

        // TODO afficher la première citation de fail
        
        // mettre le texte dans le DOM, donc créer un text content pour le mettre dans l'élément enfant de blockquote et avoir accès au tableau

        // 1 cibler l'élément en question

        let paraquoteElement = document.querySelector('#quote');
        let authorElement = document.querySelector('#author');
        // console.log(paraquoteElement); Ok j'ai mon élément ciblé.
        console.log(authorElement);
        // 2 Récupérer le text depuis le tableau
        let currentText= quotes[app.currentQuoteIndex]['quote'];
        let currentAuthor= quotes[app.currentQuoteIndex]['author'];
        //console.log(currentText); j'ai mon texte.


        //3 il faut maintenant mettre le texte dans la DOM
        paraquoteElement.textContent = currentText;
        //ok, le texte ce met à l'endroit voulu
        authorElement.textContent = currentAuthor;

        // TODO attacher la méthode app.handleClickOnNextButton à l'évènement "click" sur le bouton "next" (id="nav-next")

        //1 cibler les boutons

        let sliderButtons = document.querySelectorAll('.btnSlider');
        // console.log(sliderButtons); ok j'ai bien les buttons

        //2 décomposer chaque boutons depuis l'étape1
        let buttonFirst = sliderButtons[0];
        let buttonPrevious = sliderButtons[1];
        let buttonNext = sliderButtons[2];
        let buttonLast = sliderButtons[3];
        // console.log(buttonNext); On cible bien tous les buttons indépendemment 

        //3 poser un écouteur d'event au click sur les boutons : ok
        buttonFirst.addEventListener('click',app.handleClickOnFirstButton);
        buttonPrevious.addEventListener('click',app.handleClickOnPreviousButton);
        buttonNext.addEventListener('click',app.handleClickOnNextButton);
        buttonLast.addEventListener('click',app.handleClickOnLastButton);

        // ! le bouton ajouté du formulaire
        // je cible le bouton d'envoi du formulaire
        let buttonFormAdd = document.querySelector('.btnSubmit');
        console.log(buttonFormAdd);

        // je pose un event sur ce btn
        buttonFormAdd.addEventListener('click', app.handleButtonAdd);



        
    },

    //! ici la partie pour l'ajout des citations dans le tableau
    // Méthode gérant le click pour afficher le form d'ajout
    handleClickOnDisplayAddFormButton: function(evt) {
        console.log('click to display form');

        document.getElementById('divAddQuote').classList.remove('d-none');
                
       
    },

    // handleNewCitation : function (evt){

    //     // Je cible la citation
    //     let newCitation = document.querySelector(".newCitation");
    //     console.log(newCitation);
    //     //je pose un event pour récupérer ce qui est écrit
    //     newCitation.addEventListener('input',app.handleNewCitation);

    //     console.log(evt);
    //     // ici j'ai ce qui est écrit dans citation
    //     let NewCitation = evt.target.value;
    //     console.log(NewCitation);
    //     return NewCitation;

    // },

    // handleNewAuthor : function (evt){
    //     // Je cible l'auteur
    //     let newAuthor = document.querySelector(".newAuthor");
    //     console.log(newAuthor);
    //     //je pose un event pour récupérer ce qui est écrit
    //     newAuthor.addEventListener('input',app.handleNewAuthor);
    //     //ici j'ai ce qui est écrit dans author
    //     let NewAuthor = evt.target.value;
    //     console.log(NewAuthor);
    //     return NewAuthor;
    // },

    handleButtonAdd : function(evt){

        evt.preventDefault();

        let newCitation = document.querySelector(".newCitation");
        console.log(newCitation);
        // newCitation.addEventListener('input')
        let NewCitation = newCitation.value;
        console.log(NewCitation);

        let newAuthor = document.querySelector(".newAuthor");
        console.log(newAuthor);
        // newAuthor.addEventListener('input')
        let NewAuthor = newAuthor.value;
        console.log(NewAuthor);

        quotes.push({['quote']: NewCitation, ['author'] : NewAuthor});
    },


    //! fin pour l'ajout dans le tableau



    // Méthode permettant de modifier le DOM pour afficher la quote "courante"
    displayCurrentQuote: function(index) {
        // TODO se baser sur app.currentQuoteIndex pour afficher la quote "courante"

        let paraquoteElement = document.querySelector('#quote');
        // console.log(blockquoteElement); Ok j'ai mon élément ciblé.
        // 2 Récupérer le text depuis le tableau
        let currentText= quotes[index]['quote'];
        //console.log(currentText); j'ai mon texte.

        //3 il faut maintenant mettre le texte dans la DOM
        paraquoteElement.textContent = currentText;
    },
    // Je crée une méthode dédiée à la gestion du click sur le bouton "First"
    handleClickOnFirstButton: function() {
      console.log('click on first');

      let newIndex = 0;
      console.log(newIndex);

      //ici je stocke la valeur
      app.currentQuoteIndex = newIndex;
      //ici je l'envoie à la function
      app.displayCurrentQuote(newIndex);
      console.log(newIndex)

    },
    // Je crée une méthode dédiée à la gestion du click sur le bouton "Previous"
    handleClickOnPreviousButton: function() {
        console.log('click on previous');
        //1 on rajoute +1 à l'index current
        let newIndex = app.currentQuoteIndex-1;
        console.log(newIndex);
        // on met une condition pour revenir à 0 dès qu'on est au bout du tableau
        if(newIndex < 0){
            newIndex = app.currentQuoteIndex = 0;
        }
        //ici je stocke la valeur
        app.currentQuoteIndex = newIndex;
        //ici je l'envoie à la function
        app.displayCurrentQuote(newIndex);
        console.log(newIndex)
  
      },
      // Je crée une méthode dédiée à la gestion du click sur le bouton "Next"
    handleClickOnNextButton: function() {
        console.log('click on next');
        //1 on rajoute +1 à l'index current
        let newIndex = app.currentQuoteIndex+1;
        console.log(newIndex);
        // on met une condition pour revenir à 0 dès qu'on est au bout du tableau
        if(newIndex > quotes.length-1){
            newIndex = app.currentQuoteIndex = 0;
        }
        //ici je stocke la valeur
        app.currentQuoteIndex = newIndex;
        //ici je l'envoie à la function
        app.displayCurrentQuote(newIndex);
        console.log(newIndex)
  
      },
      // Je crée une méthode dédiée à la gestion du click sur le bouton "Last"
    handleClickOnLastButton: function() {
        console.log('click on last');
        let newIndex = quotes.length-1;

        //on stocke la valeur
        app.currentQuoteIndex = newIndex;
        app.displayCurrentQuote(newIndex);
        console.log(newIndex)

      },
  };
  
  // Appel "synchronisé" de la méthode init
  // app.init();
  
  // Permet d'exécuter notre code une fois le DOM chargé
  // => lorsque l'event DOMContentLoaded survient => la méthode app.init est appelée
  // donc app.init n'est pas exécuter lorsque JS lit cette ligne de code
  document.addEventListener('DOMContentLoaded', app.init); // ici, ne jamais mettre les (), sinon, la fonction/méthode sera aussitôt exécutée
  
  // Attention à la syntaxe, on ne doit pas mettre les () après la fonction, sinon elle est appelée aussitôt
  // Explications :
  // envoie de l'eau, au lancement du détecteur
  // document.addEventListener('fuméeDetectée', envoyerDeLeau());
  // Lorsque de la fumée sera détectée, envoie de l'eau
  // document.addEventListener('fuméeDetectée', envoyerDeLeau);
