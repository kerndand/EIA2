/*
Aufgabe: 4 : Event - Memory
Name: Daniel Kern
Matrikel: 257171
Datum: 01.05.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", main);
    //Variablen deklarieren
    let cardArray = [];
    let cardsOpen = 0;
    let cardsOpenArray = [];
    let checkRest = [];
    let playerCounter = 1;
    let sliderAmount = 1;
    let playerPoints = 0;
    function main() {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("addplayer").addEventListener("click", addPlayer);
        document.getElementById("removeplayer").addEventListener("click", removePlayer);
        document.getElementById("sliderinfo").addEventListener("change", createSlider);
    }
    function addPlayer() {
        if (playerCounter < 4) {
            let player = document.createElement("input");
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Spielernamen eingeben");
            player.setAttribute("name", "player");
            player.setAttribute("maxlength", "15");
            player.setAttribute("id", "player");
            document.getElementById("playernames").appendChild(player);
            playerCounter++;
        }
    }
    function removePlayer() {
        document.getElementById("player").remove();
        playerCounter--;
    }
    function createSlider() {
        if (sliderAmount == 1) {
            let slider = document.createElement("input");
            slider.setAttribute("type", "range");
            slider.setAttribute("value", "5");
            slider.setAttribute("min", "5");
            slider.setAttribute("max", Aufgabe4.cards[document.getElementsByTagName("select").item(0).value].cardAmount);
            slider.setAttribute("step", "1");
            slider.setAttribute("id", "slider");
            document.getElementById("sliderbox").appendChild(slider);
            sliderAmount++;
            let sliderValue = document.createElement("p");
            sliderValue.setAttribute("id", "sliderValue");
            sliderValue.innerText = "Anzahl Kartenpaare: " + document.getElementById("slider").value;
            slider.oninput = function () {
                sliderValue.innerText = "Anzahl Kartenpaare: " + this.value;
            };
            document.getElementById("sliderbox").appendChild(sliderValue);
        }
        else {
            sliderUpdate();
        }
    }
    function sliderUpdate() {
        document.getElementById("slider").remove();
        document.getElementById("sliderValue").remove();
        sliderAmount--;
        createSlider();
    }
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
            if (!(cardsOpen > 2) && target.classList.contains("hidden") && target != cardsOpenArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    cardsOpenArray.push(target);
                }
            }
            else {
                cardsOpen--;
            }
            if (cardsOpen == 2) {
                window.setTimeout(compareCards, 2000);
            }
        }
    }
    function compareCards() {
        if (cardsOpenArray[0].innerHTML == cardsOpenArray[1].innerHTML) {
            for (let i = 0; i < 2; i++) {
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
            alert("Herzlichen Gl\u00fcckwunsch");
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
    function start() {
        document.getElementById("userinterface").style.display = "none";
        document.getElementById("scoreboard").style.display = "block";
        document.getElementById("game").style.display = "block";
        let inputs = document.getElementsByTagName("input");
        let numPairs = parseInt(document.getElementById("slider").value);
        for (let i = 0; i < playerCounter; i++) {
            let playerDiv = document.createElement("div");
            document.getElementById("scoreboard").appendChild(playerDiv);
            playerDiv.innerHTML = inputs[i].value + ": " + playerPoints + " Punkte";
        }
        //Karten erzeugen    
        for (let i = 0; i < numPairs; i++) {
            createCard(Aufgabe4.cards[document.getElementsByTagName("select").item(0).value].cardContent[i]);
            createCard(Aufgabe4.cards[document.getElementsByTagName("select").item(0).value].cardContent[i]);
        }
        //Aufruf der Shuffle Algorithmusses    
        shuffleArray(cardArray);
        for (let i = 0; i < cardArray.length; i++) {
            document.getElementById("playerbox").appendChild(cardArray[i]);
        }
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Aufgabe4.js.map