var CatchTheDrop;
(function (CatchTheDrop) {
    window.addEventListener("load", init);
    let objects = [];
    let imagedata;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        CatchTheDrop.ctx = canvas.getContext("2d");
        CatchTheDrop.height = canvas.height;
        CatchTheDrop.width = canvas.width;
        let sky = new CatchTheDrop.Sky();
        sky.draw();
        let meadow = new CatchTheDrop.Meadow(CatchTheDrop.height - 150);
        meadow.draw();
        let sun = new CatchTheDrop.Sun(360, 100, 60);
        sun.draw();
        let cloud = new CatchTheDrop.Cloud(0, 0);
        cloud.draw();
        let cloud2 = new CatchTheDrop.Cloud(120, 100);
        cloud2.draw();
        let cloud3 = new CatchTheDrop.Cloud(300, -10);
        cloud3.draw();
        let cloud4 = new CatchTheDrop.Cloud(400, 130);
        cloud4.draw();
        let cloud5 = new CatchTheDrop.Cloud(-50, 200);
        cloud5.draw();
        let powerstation = new CatchTheDrop.NuclearPowerStation(450, 420);
        powerstation.draw();
        imagedata = CatchTheDrop.ctx.getImageData(0, 0, 580, 600);
        for (let i = 0; i < 50; i++) {
            let smoke = new CatchTheDrop.Smoke(475, Math.random() * 350, Math.random() * (15 - 10) + 10);
            objects.push(smoke);
            let smoke2 = new CatchTheDrop.Smoke(525, Math.random() * 350, Math.random() * (15 - 10) + 10);
            objects.push(smoke2);
        }
        animate();
    }
    function animate() {
        window.setTimeout(animate, 10);
        CatchTheDrop.ctx.putImageData(imagedata, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < objects.length; i++)
            objects[i].draw();
    }
})(CatchTheDrop || (CatchTheDrop = {}));
//# sourceMappingURL=main.js.map