/*
Aufgabe: 3 : DynHTML - Memory
Name: Daniel Kern
Matrikel: 257171
Datum: 14.04.18
    
Hiermit versichere ich, dass ich diesen Code (in Kooperation mit Maxim Schlegel) selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe2;
(function (Aufgabe2) {
    //Variablen deklarieren
    let numPairs;
    let numPlayers = 1;
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let cardArray = [];
    //Random Zuweisung der Kartenstati
    function randomStatus() {
        let randomStatus = Math.random() * 101;
        if (randomStatus <= 55) {
            return "hidden";
        }
        else if (randomStatus > 55 && randomStatus <= 77) {
            return "taken";
        }
        else if (randomStatus > 77) {
            return "open";
        }
    }
    //Karte initialisieren     
    function createCard(_cardContent, _status) {
        let card = document.createElement("div");
        card.innerText = _cardContent;
        card.setAttribute("class", "card " + _status);
        cardArray.push(card);
    }
    //Durstenfeld-Shuffle
    function shuffleArray(_array) {
        for (var i = _array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }
    // Main Funktion zum Anzeigen der Spielerinfo und dem Memory
    function main() {
        //Popup f�r Kartenpaare
        gameBoard();
        function gameBoard() {
            numPairs = parseInt(prompt("Anzahl der Kartenpaare (von 5-8 Paaren)"), 10);
            if (numPairs < 5 || numPairs > 8) {
                gameBoard();
            }
        }
        //Karten erzeugen
        for (let i = 0; i < numPairs; i++) {
            createCard(cardContent[i], randomStatus());
            createCard(cardContent[i], randomStatus());
        }
        //Aufruf der Shuffle Algorithmusses    
        shuffleArray(cardArray);
        for (let i = 0; i < cardArray.length; i++) {
            document.getElementById("playerbox").appendChild(cardArray[i]);
        }
        //Spielerinformation
        //Popup f�r Spieleranzahl
        playerList();
        function playerList() {
            let eingabeSpieler = prompt("Spieleranzahl eingeben (max. 4 Spieler)" + "");
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
            for (let i = 1; i < numPlayers; i++) {
                spielerDiv(i);
            }
        }
        //Anzeigen der Spielerboxen
        function spielerDiv(_numPlayers) {
            let playerDiv = document.createElement("div");
            document.getElementById("scoreboard").appendChild(playerDiv);
            let player = document.createElement("p");
            playerDiv.appendChild(player);
            player.innerHTML = "Spieler " + _numPlayers;
            let points = document.createElement("p");
            playerDiv.appendChild(points);
            points.innerHTML = "Punkte: 00";
        }
    }
    //Event-Listener
    document.addEventListener("DOMContentLoaded", main);
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map