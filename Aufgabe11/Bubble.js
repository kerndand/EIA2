var Aufgabe11;
(function (Aufgabe11) {
    class Bubbles extends Aufgabe11.MovingObjects {
        constructor() {
            super();
        }
        setPosition() {
            this.x = Math.random() * (500 - 450) + 450;
            this.y = Math.random() * 180;
        }
        setColor() {
            this.r = 0;
            this.g = 0;
            this.b = 0;
        }
        move() {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 200;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.strokeStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.Bubbles = Bubbles;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Bubble.js.map