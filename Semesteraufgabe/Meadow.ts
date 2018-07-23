namespace CatchTheDrop {

    export class Meadow {
        y: number;

        constructor(_y: number) {
            this.y = _y;
        }

        draw(): void {

            let gradient: CanvasGradient = ctx.createLinearGradient(0, height, 0, this.y);
            gradient.addColorStop(0, "rgb(0, 100, 0)");
            gradient.addColorStop(1, "rgb(0, 150, 0)");

            ctx.beginPath();
            ctx.moveTo(0, height);
            ctx.lineTo(0, this.y);
            for (let i: number = 0; i < width; i++) {
                ctx.lineTo(i, 40 * Math.sin(i * .0095) + this.y);
            }
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.fillStyle = "darkgreen";
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(0, height);
            ctx.lineTo(0, this.y);
            for (let i: number = 0; i < width; i++) {
                ctx.lineTo(i, 30 * Math.sin(i * -.0085) + this.y);
            }
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.closePath();

        }
    }
}