namespace Aufgabe2 {

let numPairs: number;
let numPlayers: number = 1;
let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
let cardArray: HTMLElement[] = []; 


    
    
class Card {
    cardContent: string;
    cardStatus: string;
    card: HTMLElement;
      
    constructor (_cardContent: string) {
        this.cardContent = _cardContent;
         
        let randomStatus: number = Math.random() * 101;
                
        if (randomStatus <= 55) {
            this.cardStatus = "hidden";
        } else if (randomStatus > 55 && randomStatus <= 77) {
            this.cardStatus = "taken";
        }else if (randomStatus > 77) {
            this.cardStatus = "open";
        }
    }     
    createCard(): HTMLElement[] {
        this.card = document.createElement("div");
        this.card.innerText = this.cardContent;
        this.card.setAttribute("class", "card " + this.cardStatus);
        cardArray.push(this.card);
        return cardArray;
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

function main(): void {
   
    numPairs = parseInt(prompt("Anzahl der Kartenpaare (von 5-8 Paaren)"), 10);
    if (numPairs < 5 || numPairs > 8) { 
        numPairs = 8;
    }
    
    for (let i: number = 0; i < numPairs; i++) {
    let card: Card = new Card(cardContent[i]);
    card.createCard();

    let pair: Card = new Card(cardContent[i]);
    pair.createCard();
    }
    
    shuffleArray(cardArray);
    
    for (let i: number = 0; i < cardArray.length; i++) {
      document.getElementById("mittig").appendChild(cardArray[i]);
    }
    
    let eingabeSpieler: string = prompt("Spieleranzahl eingeben (max. 4 Spieler)" + "");
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
                location.reload();
            }
            
    for ( let i: number = 1; i < numPlayers; i++) {
        spielerDiv(i);
    }     
            
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
document.addEventListener("DOMContentLoaded", main);
}