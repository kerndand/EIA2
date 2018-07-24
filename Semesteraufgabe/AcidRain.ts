namespace CatchTheDrop {

    export class AcidRain extends MovingObjects {

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }


        draw(): void {
            
            let gradient: CanvasGradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + 40);
            gradient.addColorStop(0, "rgb(0, 255, 0)");
            gradient.addColorStop(1, "rgb(0, 200, 0)");
            
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x - 10, this.y + 20);
            ctx.bezierCurveTo(this.x - 15, this.y + 40, this.x + 15, this.y + 40, this.x + 10, this.y + 20);
            ctx.lineTo(this.x, this.y);
            ctx.closePath();
            ctx.fillStyle = gradient;
            ctx.fill();

        }
    }

}