namespace Aufgabe2 {
    
    let numPlayers: number = 1;
    let numPairs: number;
    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
    
// Spielerinfo    
    
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
            document.body.appendChild(playerDiv);
               
            let stylePlayerBox: CSSStyleDeclaration = playerDiv.style;
            stylePlayerBox.backgroundColor = "lightgray";
            stylePlayerBox.maxWidth = "20%";
            stylePlayerBox.overflow = "hidden";
            
            let player: HTMLParagraphElement = document.createElement("p");
            playerDiv.appendChild(player);
            player.innerHTML = "Spieler " + _numPlayers;
            
            let stylePlayer: CSSStyleDeclaration = player.style;
            stylePlayer.textAlign = "center";
        
            let points: HTMLParagraphElement = document.createElement("p");
            playerDiv.appendChild(points);
            points.innerHTML = "Punkte: 00";
        
            let stylePoints: CSSStyleDeclaration = points.style;
            stylePoints.textAlign = "center";
    }
    
// Memory    
    



}