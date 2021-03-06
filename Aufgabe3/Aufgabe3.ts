/*
Aufgabe: 3 : Event - Memory
Name: Daniel Kern   
Matrikel: 257171
Datum: 21.04.18
    
Hiermit versichere ich, dass ich diesen Code (in Kooperation mit Maxim Schlegel) selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe3 {
    
//Variablen deklarieren
let numPairs: number;
let numPlayers: number;
let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
let cardArray: HTMLElement[] = []; 
let cardsOpen: number = 0;
let cardsOpenArray: HTMLElement[] = [];
let checkRest: HTMLElement[] = [];   
    
//Karte initialisieren     
function createCard(_cardContent: string): void {
        let card: HTMLElement = document.createElement("div");
        card.innerHTML = "<p>" + _cardContent + "</p>";
        card.setAttribute("class", "card hidden");
        cardArray.push(card);
        checkRest.push(card);
        card.addEventListener("click", clickHandler);      
}

function clickHandler(_event: Event): void {
    let target: HTMLElement = <HTMLElement>_event.target;
    if (target.classList.contains("card")) {
        cardsOpen++;
        if (!(cardsOpen > 2) && target.classList.contains("hidden") && target != cardsOpenArray[0]) {
            if (target.classList.contains("hidden")) {
            target.classList.remove("hidden");
            target.classList.add("open");
            cardsOpenArray.push(target);
            }  
        } else {
            cardsOpen--;
}
        if (cardsOpen == 2) {
            setTimeout(compareCards, 2000);    
        }
    } 
}  
   
function compareCards(): void {
    if (cardsOpenArray[0].innerHTML == cardsOpenArray[1].innerHTML) {
        for (let i: number = 0; i < 2; i++) {
            cardsOpenArray[i].classList.remove("open");
            cardsOpenArray[i].classList.add("taken");
        }
        checkRest.splice(0, 2);
    } else {
        for (let i: number = 0; i < cardsOpenArray.length; i++) {
            cardsOpenArray[i].classList.remove("open");
            cardsOpenArray[i].classList.add("hidden");    
        }
    }
    cardsOpenArray = [];
    cardsOpen = 0;
    checkWin();  
}

function checkWin(): void {
    if (checkRest.length == 0) {
        alert("Herzlichen Gl\u00fcckwunsch, du hast gewonnen!");    
    }   
}

//Durstenfeld-Shuffle
    function shuffleArray(_array: any[]): any[] {
    for (var i: number = _array.length - 1; i > 0; i--) {
        var j: number = Math.floor(Math.random() * (i + 1));
        var temp: number = _array[i];
        _array[i] = _array[j];
        _array[j] = temp;
    }
    return _array;
}

// Main Funktion zum Anzeigen der Spielerinfo und dem Memory
function main(): void {
    
//Popup f�r Kartenpaare
    gameBoard();
    function gameBoard(): void {
        numPairs = parseInt(prompt("Anzahl der Kartenpaare (von 5-8 Paaren)"), 10);
        if (numPairs < 5 || numPairs > 8) { 
            gameBoard();
        } 
    }    
//Karten erzeugen
    for (let i: number = 0; i < numPairs; i++) {
        createCard(cardContent[i]);
        createCard(cardContent[i]);
    }

//Aufruf der Shuffle Algorithmusses    
    shuffleArray(cardArray);
    
    for (let i: number = 0; i < cardArray.length; i++) {
      document.getElementById("playerbox").appendChild(cardArray[i]);
    }
 
//Spielerinformation
    
//Popup f�r Spieleranzahl
    playerList();
    function playerList(): void {
        numPlayers = parseInt(prompt("Spieleranzahl eingeben (max. 4 Spieler)"), 10);
        if (numPlayers < 1 || numPlayers > 4) { 
            playerList();
        }      
    }
    
    for ( let i: number = 0; i < numPlayers; i++) {
            spielerDiv(i + 1);
        }

//Anzeigen der Spielerboxen
    function spielerDiv(_numPlayers: number): void {
                    
        let playerDiv: HTMLDivElement = document.createElement("div");
        document.getElementById("scoreboard").appendChild(playerDiv);
   
        let player: HTMLParagraphElement = document.createElement("p");
        playerDiv.appendChild(player);
        player.innerHTML = "Spieler " + _numPlayers ;
                                  
        let points: HTMLParagraphElement = document.createElement("p");
        playerDiv.appendChild(points);
        points.innerHTML = "Punkte: 00";        
    } 
}    
//Event-Listener
document.addEventListener("DOMContentLoaded", main);
}
