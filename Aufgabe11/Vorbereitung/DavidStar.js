var Vorbereitung;
(function (Vorbereitung) {
    class DavidStar {
        constructor(_color) {
            this.setRandomPosition();
            this.color = _color;
        }
        setRandomPosition() {
            this.x = Math.random() * Vorbereitung.crc2.canvas.width;
            this.y = Math.random() * Vorbereitung.crc2.canvas.height;
        }
        // declare method without keyword function
        move() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }
        draw() {
            Vorbereitung.crc2.beginPath();
            Vorbereitung.crc2.moveTo(this.x, this.y - 20);
            Vorbereitung.crc2.lineTo(this.x + 20, this.y + 10);
            Vorbereitung.crc2.lineTo(this.x - 20, this.y + 10);
            Vorbereitung.crc2.closePath();
            Vorbereitung.crc2.moveTo(this.x, this.y + 20);
            Vorbereitung.crc2.lineTo(this.x + 20, this.y - 10);
            Vorbereitung.crc2.lineTo(this.x - 20, this.y - 10);
            Vorbereitung.crc2.closePath();
            Vorbereitung.crc2.fillStyle = this.color;
            Vorbereitung.crc2.stroke();
            Vorbereitung.crc2.fill();
        }
    }
    Vorbereitung.DavidStar = DavidStar;
})(Vorbereitung || (Vorbereitung = {}));
//# sourceMappingURL=DavidStar.js.map