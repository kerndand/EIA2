namespace CatchTheDrop {

    export class Smoke extends MovingObjects {
        radius: number;

        constructor(_x: number, _y: number, _r: number) {
            super(_x, _y);
            this.radius = _r;
        }


        move(): void {
            this.y -= 1;

            if (this.y < 280) {
                this.y = 350;
            }

        }

        draw(): void {

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fillStyle = "rgba(220, 220, 220, 0.3)";
            ctx.fill();

        }
    }

}