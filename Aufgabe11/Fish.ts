namespace Aufgabe11 {

    export class Fish extends MovingObjects {
        
        constructor() {
            super();    
        }
        
        setPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * 180;    
        }
        
        setColor(): void {
            this.r = Math.random() * 255;
            this.g = Math.random() * 255;
            this.b = Math.random() * 255;
        }
        
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
    
}