namespace CatchTheDrop {

    export class Flower {
        x: number;
        y: number;
        r: number;
        g: number;
        b: number;

        constructor(_x: number, _y: number, _r: number, _g: number, _b: number) {
            this.x = _x;
            this.y = _y;
            this.r = _r;
            this.g = _g;
            this.b = _b;
        }


        draw(): void {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x - 20, this.y - 30, this.x + 20, this.y - 30, this.x, this.y);
            ctx.bezierCurveTo(this.x  + 30, this.y - 20, this.x + 30, this.y + 20, this.x, this.y);
            ctx.bezierCurveTo(this.x + 20, this.y + 30, this.x - 20, this.y + 30, this.x, this.y);
            ctx.bezierCurveTo(this.x - 30, this.y  + 20, this.x - 30, this.y - 20, this.x, this.y);
            ctx.closePath();
            ctx.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            ctx.fill();
            ctx.stroke();

        }
    }

}