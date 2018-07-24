namespace CatchTheDrop {
    window.addEventListener("load", init);

    export let ctx: CanvasRenderingContext2D;
    export let height: number;
    export let width: number;

    export let rightKey: boolean = false;
    export let leftKey: boolean = false;

    let objects: MovingObjects[] = [];
    let imagedata: ImageData;
    let bucket: Bucket = new Bucket(270, 535);


    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        ctx = canvas.getContext("2d");

        height = canvas.height;
        width = canvas.width;

        let sky: Sky = new Sky();
        sky.draw();

        let meadow: Meadow = new Meadow(height - 150);
        meadow.draw();

        for (let i: number = 0; i < 7; i++) {
            let flower: Flower = new Flower(Math.random() * width, Math.random() * (600 - 480) + 480, Math.random() * 255, Math.random() * 255, Math.random() * 255);
            flower.draw();
        }

        let sun: Sun = new Sun(360, 100, 60);
        sun.draw();

        let cloud: Cloud = new Cloud(0, 0);
        cloud.draw();

        let cloud2: Cloud = new Cloud(120, 100);
        cloud2.draw();

        let cloud3: Cloud = new Cloud(300, -10);
        cloud3.draw();

        let cloud4: Cloud = new Cloud(400, 130);
        cloud4.draw();

        let cloud5: Cloud = new Cloud(-50, 200);
        cloud5.draw();

        let powerstation: NuclearPowerStation = new NuclearPowerStation(450, 420);
        powerstation.draw();

        imagedata = ctx.getImageData(0, 0, 580, 600);

        for (let i: number = 0; i < 50; i++) {

            let smoke: Smoke = new Smoke(475, Math.random() * 350, Math.random() * (15 - 10) + 10);
            objects.push(smoke);

            let smoke2: Smoke = new Smoke(525, Math.random() * 350, Math.random() * (15 - 10) + 10);
            objects.push(smoke2);

        }

        document.addEventListener("keydown", movementByKey, false);
        document.addEventListener("keyup", movementByKeyRelease, false);

        canvas.addEventListener("touchmove", movementByTouch, false);
        // document.addEventListener("touchmove", moveByTouch);

        createRain();
        animate();

    }

    function animate(): void {
        window.setTimeout(animate, 10);

        ctx.putImageData(imagedata, 0, 0);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < objects.length; i++)
            objects[i].draw();

        bucket.draw();
    }

    function createRain(): void {
        window.setTimeout(createRain, 1500);

        let rainchance: number = Math.random();

        if (rainchance < .66) {
            let rain: Rain = new Rain(Math.random() * width, -40);
            objects.push(rain);
        } else {
            let acidrain: AcidRain = new AcidRain(Math.random() * width, -40);
            objects.push(acidrain);
        }
    }

    function movementByKey(_event: KeyboardEvent): void {
        if (_event.key == "ArrowRight") {
            rightKey = true;
            bucket.move();
        }
        else if (_event.key == "ArrowLeft") {
            leftKey = true;
            bucket.move();
        }
    }

    function movementByKeyRelease(_event: KeyboardEvent): void {
        if (_event.keyCode == 39) {
            rightKey = false;
        }
        else if (_event.keyCode == 37) {
            leftKey = false;
        }
    }

    function movementByTouch(_event: TouchEvent): void {

        if (_event.touches[0].clientX > 0 && _event.touches[0].clientX < width) {
            bucket.x = _event.changedTouches[0].clientX - 60 / 2;
        }
    }


}