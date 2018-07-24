var CatchTheDrop;
(function (CatchTheDrop) {
    class Bucket {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (CatchTheDrop.rightKey == true && this.x + 60 < CatchTheDrop.width) {
                this.x += 15;
            }
            else if (CatchTheDrop.leftKey == true && this.x > 0) {
                this.x -= 15;
            }
        }
        draw() {
            let gradient = CatchTheDrop.ctx.createLinearGradient(this.x, this.y, this.x, this.y + 60);
            gradient.addColorStop(0, "rgb(200, 200, 200)");
            gradient.addColorStop(1, "rgb(150, 150, 150)");
            CatchTheDrop.ctx.beginPath();
            CatchTheDrop.ctx.moveTo(this.x + 60, this.y);
            CatchTheDrop.ctx.lineTo(this.x + 50, this.y + 60);
            CatchTheDrop.ctx.lineTo(this.x + 10, this.y + 60);
            CatchTheDrop.ctx.lineTo(this.x, this.y);
            CatchTheDrop.ctx.closePath();
            CatchTheDrop.ctx.fillStyle = gradient;
            CatchTheDrop.ctx.fill();
            CatchTheDrop.ctx.beginPath();
            CatchTheDrop.ctx.moveTo(this.x, this.y);
            CatchTheDrop.ctx.quadraticCurveTo(this.x + 30, this.y - 5, this.x + 60, this.y);
            CatchTheDrop.ctx.moveTo(this.x, this.y);
            CatchTheDrop.ctx.quadraticCurveTo(this.x + 30, this.y + 15, this.x + 60, this.y);
            CatchTheDrop.ctx.fillStyle = "rgb(100, 100, 100)";
            CatchTheDrop.ctx.fill();
        }
    }
    CatchTheDrop.Bucket = Bucket;
})(CatchTheDrop || (CatchTheDrop = {}));
//# sourceMappingURL=Bucket.js.map