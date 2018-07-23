var CatchTheDrop;
(function (CatchTheDrop) {
    class Meadow {
        constructor(_y) {
            this.y = _y;
        }
        draw() {
            let gradient = CatchTheDrop.ctx.createLinearGradient(0, CatchTheDrop.height, 0, this.y);
            gradient.addColorStop(0, "rgb(0, 100, 0)");
            gradient.addColorStop(1, "rgb(0, 150, 0)");
            CatchTheDrop.ctx.beginPath();
            CatchTheDrop.ctx.moveTo(0, CatchTheDrop.height);
            CatchTheDrop.ctx.lineTo(0, this.y);
            for (let i = 0; i < CatchTheDrop.width; i++) {
                CatchTheDrop.ctx.lineTo(i, 40 * Math.sin(i * .0095) + this.y);
            }
            CatchTheDrop.ctx.lineTo(CatchTheDrop.width, CatchTheDrop.height);
            CatchTheDrop.ctx.lineTo(0, CatchTheDrop.height);
            CatchTheDrop.ctx.fillStyle = "darkgreen";
            CatchTheDrop.ctx.fill();
            CatchTheDrop.ctx.closePath();
            CatchTheDrop.ctx.beginPath();
            CatchTheDrop.ctx.moveTo(0, CatchTheDrop.height);
            CatchTheDrop.ctx.lineTo(0, this.y);
            for (let i = 0; i < CatchTheDrop.width; i++) {
                CatchTheDrop.ctx.lineTo(i, 30 * Math.sin(i * -.0085) + this.y);
            }
            CatchTheDrop.ctx.lineTo(CatchTheDrop.width, CatchTheDrop.height);
            CatchTheDrop.ctx.lineTo(0, CatchTheDrop.height);
            CatchTheDrop.ctx.fillStyle = gradient;
            CatchTheDrop.ctx.fill();
            CatchTheDrop.ctx.closePath();
        }
    }
    CatchTheDrop.Meadow = Meadow;
})(CatchTheDrop || (CatchTheDrop = {}));
//# sourceMappingURL=Meadow.js.map