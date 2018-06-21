var Aufgabe10;
(function (Aufgabe10) {
    class Bubbles {
        // declare method without keyword function
        move() {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 200;
            }
        }
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.strokeStyle = "rgb(0, 0, 0)";
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.Bubbles = Bubbles;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Bubble.js.map