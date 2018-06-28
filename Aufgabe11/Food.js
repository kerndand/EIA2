var Aufgabe11;
(function (Aufgabe11) {
    class Food extends Aufgabe11.MovingObjects {
        constructor() {
            super();
        }
        setColor() {
            this.r = 90;
            this.g = 60;
            this.b = 0;
        }
        move() {
            if (this.y == 350) {
                this.y += 0;
            }
            else {
                this.y += 1;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Food = Food;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Food.js.map