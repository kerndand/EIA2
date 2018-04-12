var Aufgabe2;
(function (Aufgabe2) {
    let numPlayers = 1;
    let numPairs;
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H"];
    // Spielerinfo    
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
        document.body.appendChild(playerDiv);
        let stylePlayerBox = playerDiv.style;
        stylePlayerBox.backgroundColor = "lightgray";
        stylePlayerBox.maxWidth = "20%";
        stylePlayerBox.overflow = "hidden";
        let player = document.createElement("p");
        playerDiv.appendChild(player);
        player.innerHTML = "Spieler " + _numPlayers;
        let stylePlayer = player.style;
        stylePlayer.textAlign = "center";
        let points = document.createElement("p");
        playerDiv.appendChild(points);
        points.innerHTML = "Punkte: 00";
        let stylePoints = points.style;
        stylePoints.textAlign = "center";
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map