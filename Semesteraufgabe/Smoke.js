var CatchTheDrop;
(function (CatchTheDrop) {
    class Smoke extends CatchTheDrop.MovingObjects {
        constructor(_x, _y, _r) {
            super(_x, _y);
            this.radius = _r;
        }
        move() {
            this.y -= 2;
            if (this.y < 280) {
                this.y = 350;
            }
        }
        draw() {
            CatchTheDrop.ctx.beginPath();
            CatchTheDrop.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            CatchTheDrop.ctx.closePath();
            CatchTheDrop.ctx.fillStyle = "rgba(220, 220, 220, 0.3)";
            CatchTheDrop.ctx.fill();
        }
    }
    CatchTheDrop.Smoke = Smoke;
})(CatchTheDrop || (CatchTheDrop = {}));
//# sourceMappingURL=Smoke.js.map