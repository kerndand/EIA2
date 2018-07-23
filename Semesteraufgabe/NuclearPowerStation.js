var CatchTheDrop;
(function (CatchTheDrop) {
    class NuclearPowerStation {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            let gradient = CatchTheDrop.ctx.createLinearGradient(this.x, this.y, this.x, this.y - 60);
            gradient.addColorStop(0, "rgb(125, 125, 125)");
            gradient.addColorStop(1, "rgb(200, 200, 200)");
            CatchTheDrop.ctx.beginPath();
            CatchTheDrop.ctx.moveTo(this.x, this.y);
            CatchTheDrop.ctx.lineTo(this.x + 50, this.y);
            CatchTheDrop.ctx.quadraticCurveTo(this.x + 35, this.y - 30, this.x + 40, this.y - 60);
            CatchTheDrop.ctx.lineTo(this.x + 10, this.y - 60);
            CatchTheDrop.ctx.quadraticCurveTo(this.x + 15, this.y - 30, this.x, this.y);
            CatchTheDrop.ctx.fillStyle = gradient;
            CatchTheDrop.ctx.fill();
            CatchTheDrop.ctx.beginPath();
            CatchTheDrop.ctx.moveTo(this.x + 50, this.y);
            CatchTheDrop.ctx.lineTo(this.x + 100, this.y);
            CatchTheDrop.ctx.quadraticCurveTo(this.x + 85, this.y - 30, this.x + 90, this.y - 60);
            CatchTheDrop.ctx.lineTo(this.x + 60, this.y - 60);
            CatchTheDrop.ctx.quadraticCurveTo(this.x + 65, this.y - 30, this.x + 50, this.y);
            CatchTheDrop.ctx.fillStyle = gradient;
            CatchTheDrop.ctx.fill();
        }
    }
    CatchTheDrop.NuclearPowerStation = NuclearPowerStation;
})(CatchTheDrop || (CatchTheDrop = {}));
//# sourceMappingURL=NuclearPowerStation.js.map