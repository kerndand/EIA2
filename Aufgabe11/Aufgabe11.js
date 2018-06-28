var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let objects = [];
    let n = 9;
    let imagedata;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        canvas.style.border = "1px solid black";
        drawGround();
        for (let i = 0; i < 10; i++) {
            let a = Math.random() * Aufgabe11.crc2.canvas.width;
            let b = Math.random() * (360 - 250) + 250;
            let c = Math.random() * (10 - 5) + 5;
            drawStones(a, b, c);
        }
        drawGrass2(460, 270);
        drawAnchor(250, 180);
        drawGrass1(120, 250);
        drawTrident(60, 260);
        drawChest(500, 300);
        drawGrass1(540, 320);
        drawGrass2(108, 360);
        drawGrass3(260, 300);
        drawGrass4(240, 300);
        drawGrass4(400, 340);
        drawGrass3(360, 320);
        drawGrass1(640, 360);
        drawWater();
        imagedata = Aufgabe11.crc2.getImageData(0, 0, 640, 360);
        for (let i = 0; i < n; i++) {
            let fish = new Aufgabe11.Fish();
            objects.push(fish);
            let bubble = new Aufgabe11.Bubbles();
            bubble.radius = Math.random() * 10;
            objects.push(bubble);
        }
        canvas.addEventListener("click", insertNewObjects);
        animate();
    }
    function insertNewObjects(_event) {
        let mouseX = _event.clientX;
        let mouseY = _event.clientY;
        for (let i = 0; i < 3; i++) {
            let food = new Aufgabe11.Food();
            food.x = mouseX + Math.random() * 50 - 2;
            food.y = mouseY;
            objects.push(food);
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        Aufgabe11.crc2.putImageData(imagedata, 0, 0);
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
    function drawAnchor(_x, _y) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.arc(_x, _y, 10, 0, 2 * Math.PI);
        Aufgabe11.crc2.moveTo(_x, _y + 10);
        Aufgabe11.crc2.lineTo(_x + 30, _y + 10);
        Aufgabe11.crc2.lineTo(_x + 25, _y + 20);
        Aufgabe11.crc2.lineTo(_x + 5, _y + 20);
        Aufgabe11.crc2.lineTo(_x + 5, _y + 70);
        Aufgabe11.crc2.quadraticCurveTo(_x + 10, _y + 85, _x + 35, _y + 70);
        Aufgabe11.crc2.lineTo(_x + 25, _y + 65);
        Aufgabe11.crc2.lineTo(_x + 50, _y + 60);
        Aufgabe11.crc2.lineTo(_x + 55, _y + 80);
        Aufgabe11.crc2.lineTo(_x + 45, _y + 75);
        Aufgabe11.crc2.quadraticCurveTo(_x, _y + 110, _x - 40, _y + 75);
        Aufgabe11.crc2.lineTo(_x - 50, _y + 80);
        Aufgabe11.crc2.lineTo(_x - 45, _y + 60);
        Aufgabe11.crc2.lineTo(_x - 20, _y + 65);
        Aufgabe11.crc2.lineTo(_x - 30, _y + 70);
        Aufgabe11.crc2.quadraticCurveTo(_x - 10, _y + 85, _x - 5, _y + 70);
        Aufgabe11.crc2.lineTo(_x - 5, _y + 20);
        Aufgabe11.crc2.lineTo(_x - 25, _y + 20);
        Aufgabe11.crc2.lineTo(_x - 30, _y + 10);
        Aufgabe11.crc2.lineTo(_x, _y + 10);
        Aufgabe11.crc2.fillStyle = "rgb(128, 128, 128)";
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.stroke();
    }
    function drawTrident(_x, _y) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.lineTo(_x, _y - 100);
        Aufgabe11.crc2.quadraticCurveTo(_x - 40, _y - 100, _x - 40, _y - 140);
        Aufgabe11.crc2.lineTo(_x - 50, _y - 140);
        Aufgabe11.crc2.lineTo(_x - 35, _y - 155);
        Aufgabe11.crc2.lineTo(_x - 20, _y - 140);
        Aufgabe11.crc2.lineTo(_x - 30, _y - 140);
        Aufgabe11.crc2.quadraticCurveTo(_x - 30, _y - 110, _x, _y - 110);
        Aufgabe11.crc2.lineTo(_x, _y - 140);
        Aufgabe11.crc2.lineTo(_x - 10, _y - 140);
        Aufgabe11.crc2.lineTo(_x + 5, _y - 155);
        Aufgabe11.crc2.lineTo(_x + 20, _y - 140);
        Aufgabe11.crc2.lineTo(_x + 10, _y - 140);
        Aufgabe11.crc2.lineTo(_x + 10, _y - 110);
        Aufgabe11.crc2.quadraticCurveTo(_x + 40, _y - 110, _x + 40, _y - 140);
        Aufgabe11.crc2.lineTo(_x + 30, _y - 140);
        Aufgabe11.crc2.lineTo(_x + 45, _y - 155);
        Aufgabe11.crc2.lineTo(_x + 60, _y - 140);
        Aufgabe11.crc2.lineTo(_x + 50, _y - 140);
        Aufgabe11.crc2.quadraticCurveTo(_x + 50, _y - 100, _x + 10, _y - 100);
        Aufgabe11.crc2.lineTo(_x + 10, _y);
        Aufgabe11.crc2.lineTo(_x, _y);
        Aufgabe11.crc2.fillStyle = "rgb(255, 200, 0)";
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.stroke();
    }
    function drawChest(_x, _y) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.lineTo(_x + 70, _y);
        Aufgabe11.crc2.lineTo(_x + 70, _y - 50);
        Aufgabe11.crc2.lineTo(_x, _y - 50);
        Aufgabe11.crc2.lineTo(_x, _y);
        Aufgabe11.crc2.lineTo(_x - 50, _y - 40);
        Aufgabe11.crc2.lineTo(_x - 50, _y - 90);
        Aufgabe11.crc2.lineTo(_x, _y - 50);
        Aufgabe11.crc2.moveTo(_x - 50, _y - 90);
        Aufgabe11.crc2.lineTo(_x + 20, _y - 90);
        Aufgabe11.crc2.lineTo(_x + 70, _y - 50);
        Aufgabe11.crc2.lineTo(_x + 10, _y - 80);
        Aufgabe11.crc2.lineTo(_x - 40, _y - 120);
        Aufgabe11.crc2.lineTo(_x + 20, _y - 90);
        Aufgabe11.crc2.moveTo(_x + 20, _y - 90);
        Aufgabe11.crc2.lineTo(_x + 20, _y - 50);
        Aufgabe11.crc2.lineTo(_x, _y - 50);
        Aufgabe11.crc2.lineTo(_x - 50, _y - 90);
        Aufgabe11.crc2.moveTo(_x + 20, _y - 50);
        Aufgabe11.crc2.lineTo(_x + 70, _y - 50);
        Aufgabe11.crc2.lineTo(_x + 20, _y - 75);
        Aufgabe11.crc2.fillStyle = "rgb(64, 39, 0)";
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.strokeStyle = "rgb(103, 56, 0)";
        Aufgabe11.crc2.stroke();
    }
    function drawGround() {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(0, 360);
        Aufgabe11.crc2.lineTo(0, 225);
        for (let i = 0; i < 640; i++) {
            Aufgabe11.crc2.lineTo(i, 15 * Math.sin(i * .015) + 225);
        }
        Aufgabe11.crc2.lineTo(640, 360);
        Aufgabe11.crc2.lineTo(0, 360);
        Aufgabe11.crc2.fillStyle = "rgb(175, 151, 0)";
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.closePath();
    }
    function drawWater() {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.lineTo(0, 360);
        Aufgabe11.crc2.lineTo(640, 360);
        Aufgabe11.crc2.lineTo(640, 0);
        Aufgabe11.crc2.lineTo(0, 0);
        Aufgabe11.crc2.fillStyle = "rgba(0, 185, 185, 0.25)";
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.closePath();
    }
    function drawGrass1(_x, _y) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.quadraticCurveTo(_x - 90, _y - 160, _x + 30, _y - 150);
        Aufgabe11.crc2.quadraticCurveTo(_x - 50, _y - 140, _x + 20, _y);
        Aufgabe11.crc2.lineTo(_x, _y);
        Aufgabe11.crc2.fillStyle = "rgb(2, 163, 0)";
        Aufgabe11.crc2.fill();
    }
    function drawGrass2(_x, _y) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.quadraticCurveTo(_x - 80, _y - 170, _x - 90, _y - 150);
        Aufgabe11.crc2.quadraticCurveTo(_x - 60, _y - 200, _x + 20, _y);
        Aufgabe11.crc2.lineTo(_x, _y);
        Aufgabe11.crc2.fillStyle = "rgb(2, 163, 0)";
        Aufgabe11.crc2.fill();
    }
    function drawGrass3(_x, _y) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.quadraticCurveTo(_x - 30, _y - 130, _x + 60, _y - 140);
        Aufgabe11.crc2.quadraticCurveTo(_x - 40, _y - 150, _x - 20, _y);
        Aufgabe11.crc2.lineTo(_x, _y);
        Aufgabe11.crc2.fillStyle = "rgb(2, 143, 0)";
        Aufgabe11.crc2.fill();
    }
    function drawGrass4(_x, _y) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.quadraticCurveTo(_x - 30, _y - 120, _x - 80, _y - 120);
        Aufgabe11.crc2.quadraticCurveTo(_x - 40, _y - 150, _x + 20, _y);
        Aufgabe11.crc2.lineTo(_x, _y);
        Aufgabe11.crc2.fillStyle = "rgb(2, 143, 0)";
        Aufgabe11.crc2.fill();
    }
    function drawStones(_x, _y, _r) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fillStyle = "rgb(100, 100, 100)";
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.stroke();
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Aufgabe11.js.map