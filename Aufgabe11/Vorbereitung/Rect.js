var Vorbereitung;
(function (Vorbereitung) {
    class Rect extends Vorbereitung.DavidStar {
        constructor(_color) {
            super(_color);
        }
        draw() {
            Vorbereitung.crc2.fillStyle = this.color;
            Vorbereitung.crc2.fillRect(this.x - 20, this.y - 20, 40, 40);
        }
    }
    Vorbereitung.Rect = Rect;
})(Vorbereitung || (Vorbereitung = {}));
//# sourceMappingURL=Rect.js.map