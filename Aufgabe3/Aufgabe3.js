/*
Aufgabe: 3 : Evemt - Memory
Name: Daniel Kern
Matrikel: 257171
Datum: 20.04.18
    
Hiermit versichere ich, dass ich diesen Code (in Kooperation mit Maxim Schlegel) selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe2;
(function (Aufgabe2) {
    //Variablen deklarieren
    let numPairs;
    let numPlayers = 1;
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let cardArray = [];
    let cardsOpen = 0;
    let cardsOpenArray = [];
    let checkRest = [];
    //Karte initialisieren     
    function createCard(_cardContent) {
        let card = document.createElement("div");
        card.innerHTML = "<p>" + _cardContent + "</p>";
        card.setAttribute("class", "card hidden");
        cardArray.push(card);
        checkRest.push(card);
        card.addEventListener("click", clickHandler);
    }
    function clickHandler(_event) {
        let target = _event.target;
        if (target.classList.contains("card")) {
            cardsOpen++;
            if (!(cardsOpen > 2)) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    cardsOpenArray.push(target);
                }
            }
            if (cardsOpen == 2) {
                setTimeout(compareCards, 2000);
            }
        }
    }
    function compareCards() {
        if (cardsOpenArray[0].innerHTML == cardsOpenArray[1].innerHTML) {
            for (let i = 0; i < cardsOpenArray.length; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("taken");
            }
            checkRest.splice(0, 2);
        }
        else {
            for (let i = 0; i < cardsOpenArray.length; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("hidden");
            }
        }
        cardsOpenArray = [];
        cardsOpen = 0;
        checkWin();
    }
    function checkWin() {
        if (checkRest.length == 0) {
            alert("Herzlichen Gl\u00fcckwunsch, du hast gewonnen!");
        }
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
            createCard(cardContent[i]);
            createCard(cardContent[i]);
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
//# sourceMappingURL=Aufgabe3.js.map