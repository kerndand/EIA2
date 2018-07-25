namespace CatchTheDrop {

    export class Bucket {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }


        move(): void {
            if (rightKey == true && this.x + 60 < width) {
                this.x += 15;
            }

            else if (leftKey == true && this.x > 0) {
                this.x -= 15;
            }
        }

        draw(): void {

            let gradient: CanvasGradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + 60);
            gradient.addColorStop(0, "rgb(200, 200, 200)");
            gradient.addColorStop(1, "rgb(150, 150, 150)");

            ctx.beginPath();
            ctx.moveTo(this.x + 60, this.y);
            ctx.lineTo(this.x + 50, this.y + 60);
            ctx.lineTo(this.x + 10, this.y + 60);
            ctx.lineTo(this.x, this.y);
            ctx.closePath();
            ctx.fillStyle = gradient;
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.quadraticCurveTo(this.x + 30, this.y - 5, this.x + 60, this.y);
            ctx.moveTo(this.x, this.y);
            ctx.quadraticCurveTo(this.x + 30, this.y + 15, this.x + 60, this.y);
            ctx.fillStyle = "rgb(100, 100, 100)";
            ctx.fill();

        }

        hit(_x: number, _y: number): boolean {
            if (_x > this.x && _x < this.x + 60 && _y > this.y && _y < this.y + 60) {
                return true;
            }
            return false;
        }
        
        miss(_y: number): boolean {
            if (_y < 600) {
                return false;    
            } 
            return true;   
        }
    }

}