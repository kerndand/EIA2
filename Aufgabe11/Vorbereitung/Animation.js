var Vorbereitung;
(function (Vorbereitung) {
    window.addEventListener("load", init);
    let stars = [];
    let n = 25;
    //let rects: Rect[] = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Vorbereitung.crc2 = canvas.getContext("2d");
        console.log(Vorbereitung.crc2);
        canvas.addEventListener("click", insertNewObject);
        for (let i = 0; i < n; i++) {
            let star = new Vorbereitung.DavidStar("#00ffff");
            stars.push(star);
            let rect = new Vorbereitung.Rect("#ff0000");
            stars.push(rect);
            let dreieck = new Vorbereitung.Dreieck("#ffff00");
            stars.push(dreieck);
        }
        animate();
    }
    function insertNewObject(_event) {
        let mouseX = _event.clientX;
        let mouseY = _event.clientY;
        let random = Math.random() * 13;
        if (random < 5) {
            let star = new Vorbereitung.DavidStar("#00ffff");
            stars.push(star);
        }
        else if (random < 9) {
            let rect = new Vorbereitung.Rect("#ff0000");
            stars.push(rect);
        }
        else {
            let dreieck = new Vorbereitung.Dreieck("#ffff00");
            stars.push(dreieck);
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        Vorbereitung.crc2.clearRect(0, 0, Vorbereitung.crc2.canvas.width, Vorbereitung.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(Vorbereitung || (Vorbereitung = {}));
//# sourceMappingURL=Animation.js.map