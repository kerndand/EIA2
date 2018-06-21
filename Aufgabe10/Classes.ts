namespace Aufgabe10 {

    export class Fish {
        x: number;
        y: number;
        r: number;
        g: number;
        b: number;

        // declare method without keyword function
        move(): void {
            this.x += 2;
            
            if (this.x > 660) {
                this.x = -75;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x + 60, this.y + 55, this.x + 65, this.y - 35, this.x, this.y + 20);
            crc2.lineTo(this.x, this.y);
            crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            crc2.fill();
            crc2.closePath();
        }
    }

    export class Bubbles {
        x: number;
        y: number;
        r: number;

        // declare method without keyword function

        move(): void {
            this.y -= 2;
            
            if (this.y < 0) {
                this.y = 200;
            }
          
        }

        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.strokeStyle = "rgb(0, 0, 0)";
            crc2.stroke();

        }
    }


}