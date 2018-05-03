namespace Aufgabe4 {

    export interface Card {
        cardContent: string[];
        cardColor: string;
        cardFont: string;
        cardAmount: string;
    }

    let deck: Card;

    export interface Cards {
        [cardName: string]: Card;
    };

    export let cards: Cards = {};
    deck = {
        cardContent: ["A", "B", "C", "D", "E", "F", "G", "H"],
        cardColor: "red",
        cardFont: "sans-serif",
        cardAmount: "8"
    };
    cards["letters"] = deck;
    
    deck = {
        cardContent: ["Hund", "Katze", "Maus", "Pferd", "Krake", "Affe", "Reh", "Kuh", "Schwein", "Luchs", "Huhn", "L\u00f6we", "Tiger"],
        cardColor: "blue",
        cardFont: "sans-serif",
        cardAmount: "13"
    };
    cards["animals"] = deck;
   
    deck = {
        cardContent: ["Peter", "Gisela", "Hans", "Gudrun", "Fritz", "Walter", "Horst", "Sabine", "Achim", "Elsa", "Mick", "Heidi", "Franz", "Frieda", "Karl", "Vera"],
        cardColor: "yellow",
        cardFont: "sans-serif",
        cardAmount: "16"
    };
    cards["names"] = deck;
    
    
    export interface Scoreboard {
        player: string;
        score: number;    
    }
    
    let scoreboard: Scoreboard[] = [];
}