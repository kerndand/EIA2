var Aufgabe10;
(function (Aufgabe10) {
    class Fish {
        // declare method without keyword function
        move() {
            this.x += 2;
            if (this.x > 660) {
                this.x = -75;
            }
        }
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.bezierCurveTo(this.x + 60, this.y + 55, this.x + 65, this.y - 35, this.x, this.y + 20);
            Aufgabe10.crc2.lineTo(this.x, this.y);
            Aufgabe10.crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
        }
    }
    Aufgabe10.Fish = Fish;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Fish.js.map