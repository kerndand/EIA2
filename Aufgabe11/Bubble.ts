namespace Aufgabe11 {

    export class Bubbles extends MovingObjects {
        radius: number;

        constructor() {
            super();    
        }
        
        setPosition(): void {
            this.x = Math.random() * (500 - 450) + 450;
            this.y = Math.random() * 180;    
        }
        
        setColor(): void {
            this.r = 0;
            this.g = 0;
            this.b = 0;
        }

        move(): void {
            this.y -= 2;

            if (this.y < 0) {
                this.y = 200;
            }

        }

        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.strokeStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            crc2.stroke();

        }
    }

}