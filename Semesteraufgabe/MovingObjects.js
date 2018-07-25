var CatchTheDrop;
(function (CatchTheDrop) {
    class MovingObjects {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            this.y += 1.5;
        }
        draw() {
            //
        }
    }
    CatchTheDrop.MovingObjects = MovingObjects;
})(CatchTheDrop || (CatchTheDrop = {}));
//# sourceMappingURL=MovingObjects.js.map