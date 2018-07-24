var CatchTheDrop;
(function (CatchTheDrop) {
    class Flower {
        constructor(_x, _y, _r, _g, _b) {
            this.x = _x;
            this.y = _y;
            this.r = _r;
            this.g = _g;
            this.b = _b;
        }
        draw() {
            CatchTheDrop.ctx.beginPath();
            CatchTheDrop.ctx.moveTo(this.x, this.y);
            CatchTheDrop.ctx.bezierCurveTo(this.x - 20, this.y - 30, this.x + 20, this.y - 30, this.x, this.y);
            CatchTheDrop.ctx.bezierCurveTo(this.x + 30, this.y - 20, this.x + 30, this.y + 20, this.x, this.y);
            CatchTheDrop.ctx.bezierCurveTo(this.x + 20, this.y + 30, this.x - 20, this.y + 30, this.x, this.y);
            CatchTheDrop.ctx.bezierCurveTo(this.x - 30, this.y + 20, this.x - 30, this.y - 20, this.x, this.y);
            CatchTheDrop.ctx.closePath();
            CatchTheDrop.ctx.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            CatchTheDrop.ctx.fill();
        }
    }
    CatchTheDrop.Flower = Flower;
})(CatchTheDrop || (CatchTheDrop = {}));
//# sourceMappingURL=Flower.js.map