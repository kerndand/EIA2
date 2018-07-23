namespace CatchTheDrop {

    export class NuclearPowerStation {

        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            let gradient: CanvasGradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y - 60);
            gradient.addColorStop(0, "rgb(125, 125, 125)");
            gradient.addColorStop(1, "rgb(200, 200, 200)");
            
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + 50, this.y);
            ctx.quadraticCurveTo(this.x + 35, this.y - 30, this.x + 40, this.y - 60);
            ctx.lineTo(this.x + 10, this.y - 60);
            ctx.quadraticCurveTo(this.x + 15, this.y - 30, this.x, this.y);
            ctx.fillStyle = gradient;
            ctx.fill();
            
            ctx.beginPath();
            ctx.moveTo(this.x + 50, this.y);
            ctx.lineTo(this.x + 100, this.y);
            ctx.quadraticCurveTo(this.x + 85, this.y - 30, this.x + 90, this.y - 60);
            ctx.lineTo(this.x + 60, this.y - 60);
            ctx.quadraticCurveTo(this.x + 65, this.y - 30, this.x + 50, this.y);
            ctx.fillStyle = gradient;
            ctx.fill();
        }
    }
}