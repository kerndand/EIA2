namespace Aufgabe11 {

    export class Food extends MovingObjects {
        
        constructor() {
            super();
        }
        
        setColor(): void {
            this.r = 90;
            this.g = 60;
            this.b = 0;
        }

        move(): void {
            if (this.y == 350) {
                this.y += 0;
            } else {
                this.y += 1;   
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            crc2.fill();
        }
    }

}