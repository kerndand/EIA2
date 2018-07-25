var CatchTheDrop;
(function (CatchTheDrop) {
    class Sun {
        constructor(_x, _y, _radius) {
            this.x = _x;
            this.y = _y;
            this.radius = _radius;
        }
        draw() {
            let gradient = CatchTheDrop.ctx.createRadialGradient(this.x, this.y, 10, this.x, this.y, this.radius);
            gradient.addColorStop(0, "yellow");
            gradient.addColorStop(1, "rgb(255, 198, 0)");
            CatchTheDrop.ctx.beginPath();
            CatchTheDrop.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            CatchTheDrop.ctx.fillStyle = gradient;
            CatchTheDrop.ctx.fill();
        }
    }
    CatchTheDrop.Sun = Sun;
})(CatchTheDrop || (CatchTheDrop = {}));
//# sourceMappingURL=Sun.js.map