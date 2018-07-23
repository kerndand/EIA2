var CatchTheDrop;
(function (CatchTheDrop) {
    class Sky {
        draw() {
            let gradient = CatchTheDrop.ctx.createLinearGradient(0, 0, 0, CatchTheDrop.height - 100);
            gradient.addColorStop(0, "rgb(0, 200, 250)");
            gradient.addColorStop(1, "white");
            CatchTheDrop.ctx.fillStyle = gradient;
            CatchTheDrop.ctx.fillRect(0, 0, CatchTheDrop.width, CatchTheDrop.height);
        }
    }
    CatchTheDrop.Sky = Sky;
})(CatchTheDrop || (CatchTheDrop = {}));
//# sourceMappingURL=Sky.js.map