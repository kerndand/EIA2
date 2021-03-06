/*
Aufgabe: 3 : DynHTML - Memory
Name: Daniel Kern   
Matrikel: 257171
Datum: 14.04.18
    
Hiermit versichere ich, dass ich diesen Code (in Kooperation mit Maxim Schlegel) selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe2 {
//Variablen deklarieren
let numPairs: number;
let numPlayers: number = 1;
let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
let cardArray: HTMLElement[] = []; 


//Random Zuweisung der Kartenstati
function randomStatus(): string {      
        
    let randomStatus: number = Math.random() * 101;
                
    if (randomStatus <= 55) {
        return "hidden";
    } else if (randomStatus > 55 && randomStatus <= 77) {
        return "taken";
    } else if (randomStatus > 77) {
        return "open";
    }
    } 
    
//Karte initialisieren     
function createCard(_cardContent: string, _status: string): void {
        let card: HTMLElement = document.createElement("div");
        card.innerText = _cardContent;
        card.setAttribute("class", "card " + _status);
        cardArray.push(card);
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
        createCard(cardContent[i], randomStatus());
        createCard(cardContent[i], randomStatus());
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
        let eingabeSpieler: string = prompt("Spieleranzahl eingeben (max. 4 Spieler)" + "");
    
    //Initialisierung der verschiedenen F�lle der Spieleranzahl
        switch (eingabeSpieler) {
                case "1": 
                    numPlayers += 1;
                    break; 
                        
                case "2":
                    numPlayers += 2;
                    break;
                        
                case "3":
                    numPlayers += 3;
                    break;
                        
                case "4":
                    numPlayers += 4;
                    break;
                        
                default: 
                    playerList();
                }
    
                
        for ( let i: number = 1; i < numPlayers; i++) {
            spielerDiv(i);
        }
    }        

//Anzeigen der Spielerboxen
    function spielerDiv(_numPlayers: number): void {
                    
        let playerDiv: HTMLDivElement = document.createElement("div");
        document.getElementById("scoreboard").appendChild(playerDiv);
   
        let player: HTMLParagraphElement = document.createElement("p");
        playerDiv.appendChild(player);
        player.innerHTML = "Spieler " + _numPlayers;
                                  
        let points: HTMLParagraphElement = document.createElement("p");
        playerDiv.appendChild(points);
        points.innerHTML = "Punkte: 00";        
    } 
}    
//Event-Listener
document.addEventListener("DOMContentLoaded", main);
}
