namespace Aufgabe11 {

    export class Food extends MovingObjects {

        border: number;

        constructor() {
            super();
            this.border = Math.random() * (360 - 290) + 290;
        }

        setColor(): void {
            this.r = 90;
            this.g = 60;
            this.b = 0;
        }

        move(): void {
            this.y += 1;
            
            if (this.y > this.border) {
                this.y = this.border;    
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