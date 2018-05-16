/*
 * Create a list that holds all of your cards
 * Used getElementsByClassName as it has a faster load time than querySelector and it produces an html collection instead of a generic node list. 
 * The html collection will only contain any node element, which is more specific than a node list.
 */
let cardList = document.getElementsByClassName('card');

/* Used destructuring here to grab the items in the node list created above and place them into an array 
*so that that array can be looped over and it can be used in the shuffle function.*/

let allCards = [...cardList];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

 let shuffledCards = shuffle(allCards);

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


 /* Used a function expression here instead of a declaration since I am using the function as a callback inside of the for loop below. 
 *Used the "this" keyword to reference the individual cards in the for loop below. */

const displayCard = function() {
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};

/*
 * set up the event listener for each card. */
 for (let i = 0; i < allCards.length; i++) {
     allCards[i].addEventListener("click", displayCard);
 };

 