namespace CatchTheDrop {

    export class Cloud {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }


        draw(): void {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x - 30, this.y + 20, this.x - 50, this.y + 70, this.x + 50, this.y + 70);
            ctx.bezierCurveTo(this.x + 70, this.y + 100, this.x + 140, this.y + 100, this.x + 170, this.y + 70);
            ctx.bezierCurveTo(this.x + 220, this.y + 90, this.x + 240, this.y + 40, this.x + 210, this.y + 20);
            ctx.bezierCurveTo(this.x + 250, this.y - 20, this.x + 190, this.y - 50, this.x + 160, this.y - 30);
            ctx.bezierCurveTo(this.x + 140, this.y - 75, this.x + 70, this.y - 60, this.x + 70, this.y - 30);
            ctx.bezierCurveTo(this.x + 50, this.y - 60, this.x - 20, this.y - 50, this.x, this.y);
            ctx.closePath();
            ctx.fillStyle = "rgba(225, 225, 225, 0.9)";
            ctx.fill();
         
        }
    }

}