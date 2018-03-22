// Hallo

document.addEventListener("DOMContentLoaded", function(): void{
   
    var eingabe: string = prompt("Geben Sie hier bitte Ihren Namen ein");
    var hallo: HTMLElement = document.getElementById("greet");
    hallo.innerHTML = "Hallo " + eingabe;
    
});
