var CatchTheDrop;
(function (CatchTheDrop) {
    class AcidRain extends CatchTheDrop.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            let gradient = CatchTheDrop.ctx.createLinearGradient(this.x, this.y, this.x, this.y + 40);
            gradient.addColorStop(0, "rgb(0, 255, 0)");
            gradient.addColorStop(1, "rgb(0, 200, 0)");
            CatchTheDrop.ctx.beginPath();
            CatchTheDrop.ctx.moveTo(this.x, this.y);
            CatchTheDrop.ctx.lineTo(this.x - 10, this.y + 20);
            CatchTheDrop.ctx.bezierCurveTo(this.x - 15, this.y + 40, this.x + 15, this.y + 40, this.x + 10, this.y + 20);
            CatchTheDrop.ctx.lineTo(this.x, this.y);
            CatchTheDrop.ctx.closePath();
            CatchTheDrop.ctx.fillStyle = gradient;
            CatchTheDrop.ctx.fill();
        }
    }
    CatchTheDrop.AcidRain = AcidRain;
})(CatchTheDrop || (CatchTheDrop = {}));
//# sourceMappingURL=Acidrain.js.map