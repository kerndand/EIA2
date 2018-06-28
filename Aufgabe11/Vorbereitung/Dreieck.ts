namespace Vorbereitung {
    export class Dreieck extends DavidStar {

        constructor(_color: string) {
            super(_color);
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 20);
            crc2.lineTo(this.x + 20, this.y + 10);
            crc2.lineTo(this.x - 20, this.y + 10);
            crc2.closePath();
            crc2.fill();
        }
        
        move(): void {
            this.x += Math.random() * 20 - 10;
            this.y += Math.random() * 20 - 10;
        }
    }
}