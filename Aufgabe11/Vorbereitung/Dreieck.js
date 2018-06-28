var Vorbereitung;
(function (Vorbereitung) {
    class Dreieck extends Vorbereitung.DavidStar {
        constructor(_color) {
            super(_color);
        }
        draw() {
            Vorbereitung.crc2.fillStyle = this.color;
            Vorbereitung.crc2.beginPath();
            Vorbereitung.crc2.moveTo(this.x, this.y - 20);
            Vorbereitung.crc2.lineTo(this.x + 20, this.y + 10);
            Vorbereitung.crc2.lineTo(this.x - 20, this.y + 10);
            Vorbereitung.crc2.closePath();
            Vorbereitung.crc2.fill();
        }
        move() {
            this.x += Math.random() * 20 - 10;
            this.y += Math.random() * 20 - 10;
        }
    }
    Vorbereitung.Dreieck = Dreieck;
})(Vorbereitung || (Vorbereitung = {}));
//# sourceMappingURL=Dreieck.js.map