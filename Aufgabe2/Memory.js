var Aufgabe2;
(function (Aufgabe2) {
    let numPairs;
    let numPlayers = 1;
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let cardArray = [];
    class Card {
        constructor(_cardContent) {
            this.cardContent = _cardContent;
            let randomStatus = Math.random() * 11;
            if (randomStatus <= 6) {
                this.cardStatus = "hidden";
            }
            else if (randomStatus > 6 && randomStatus <= 8) {
                this.cardStatus = "taken";
            }
            else if (randomStatus > 8) {
                this.cardStatus = "open";
            }
        }
        createCard() {
            this.card = document.createElement("div");
            this.card.innerText = this.cardContent;
            this.card.setAttribute("class", "card " + this.cardStatus);
            cardArray.push(this.card);
            return cardArray;
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
    function main() {
        numPairs = parseInt(prompt("Anzahl der Kartenpaare (von 5-8 Paaren)"), 10);
        if (numPairs < 5 || numPairs > 8) {
            numPairs = 8;
        }
        for (let i = 0; i < numPairs; i++) {
            let card = new Card(cardContent[i]);
            card.createCard();
            let pair = new Card(cardContent[i]);
            pair.createCard();
        }
        shuffleArray(cardArray);
        for (let i = 0; i < cardArray.length; i++) {
            document.getElementById("game").appendChild(cardArray[i]);
        }
        let eingabeSpieler = prompt("Spieleranzahl eingeben (max. 4 Spieler)" + "");
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
        for (let i = 1; i < numPlayers; i++) {
            spielerDiv(i);
        }
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
    document.addEventListener("DOMContentLoaded", main);
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Memory.js.map