var Aufgabe11;
(function (Aufgabe11) {
    class Fish extends Aufgabe11.MovingObjects {
        constructor() {
            super();
        }
        setPosition() {
            this.x = Math.random() * Aufgabe11.crc2.canvas.width;
            this.y = Math.random() * 180;
        }
        setColor() {
            this.r = Math.random() * 255;
            this.g = Math.random() * 255;
            this.b = Math.random() * 255;
        }
        move() {
            this.x += 2;
            if (this.x > 660) {
                this.x = -75;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.bezierCurveTo(this.x + 60, this.y + 55, this.x + 65, this.y - 35, this.x, this.y + 20);
            Aufgabe11.crc2.lineTo(this.x, this.y);
            Aufgabe11.crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
        }
    }
    Aufgabe11.Fish = Fish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Fish.js.map