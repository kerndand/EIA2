namespace CatchTheDrop {
    window.addEventListener("load", init);

    export let ctx: CanvasRenderingContext2D;
    export let height: number;
    export let width: number;

    export let rightKey: boolean = false;
    export let leftKey: boolean = false;

    let objects: MovingObjects[] = [];
    let livesArray: Flower[] = [];
    let imagedata: ImageData;
    let score: number = 0;
    let bucket: Bucket = new Bucket(270, 535);
    let pressed: number = 0;
    let startScreen: boolean = true;
    let endScreen: boolean = false;


    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        ctx = canvas.getContext("2d");

        height = canvas.height;
        width = canvas.width;

        let sky: Sky = new Sky();
        sky.draw();

        let meadow: Meadow = new Meadow(height - 150);
        meadow.draw();

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

        for (let i: number = 0; i < 3; i++) {
            let flower: Flower = new Flower(440 + (i * 55), 30, Math.random() * 255, Math.random() * 255, Math.random() * 255);
            livesArray.push(flower);
        }

        for (let i: number = 0; i < 50; i++) {

            let smoke: Smoke = new Smoke(475, Math.random() * 350, Math.random() * (15 - 10) + 10);
            objects.push(smoke);

            let smoke2: Smoke = new Smoke(525, Math.random() * 350, Math.random() * (15 - 10) + 10);
            objects.push(smoke2);

        }
        document.addEventListener("keydown", movementByKey, false);
        document.addEventListener("keyup", movementByKeyRelease, false);
        canvas.addEventListener("click", handleClick, false);
        canvas.addEventListener("touchmove", movementByTouch, false);

        catchDrop();
        drawStartScreen();

    }

    function startGame(): void {
        if (pressed == 0) {
            createRain();
            animate();
        }
    }


    function animate(): void {
        ctx.putImageData(imagedata, 0, 0);

        if (livesArray.length > 0) {

            moveObjects();
            drawObjects();

        } else {
            gameOver();
        }

        window.setTimeout(animate, 10);
    }

    function moveObjects(): void {
        for (let i: number = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < objects.length; i++)
            objects[i].draw();

        for (let i: number = 0; i < livesArray.length; i++)
            livesArray[i].draw();

        bucket.draw();
        showScore();
    }

    function createRain(): void {
        window.setTimeout(createRain, 1000);

        let rainchance: number = Math.random();

        if (rainchance < .5) {
            let rain: Rain = new Rain(Math.random() * width, -40);
            objects.push(rain);
        } else {
            let acidrain: AcidRain = new AcidRain(Math.random() * width, -40);
            objects.push(acidrain);
        }
    }

    function handleClick(_event: MouseEvent): void {
        if (startScreen) {
            startGame();
            pressed = 1;
            startScreen = false;
        } else if (endScreen) {
            window.location.reload();
        }
    }

    function movementByKey(_event: KeyboardEvent): void {
        if (_event.keyCode == 39) {
            rightKey = true;
            bucket.move();
        }
        else if (_event.keyCode == 37) {
            leftKey = true;
            bucket.move();

        }

        if (_event.keyCode == 32) {
            if (startScreen) {
                startGame();
                pressed = 1;
                startScreen = false;
            } else if (endScreen) {
                window.location.reload();    
            }
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

        if (_event.changedTouches[0].clientX > 0 && _event.changedTouches[0].clientX < width) {
            bucket.x = _event.changedTouches[0].clientX - 60 / 2;
        }
    }

    function catchDrop(): void {
        window.setTimeout(catchDrop, 10);
        for (let i: number = 0; i < objects.length; i++) {
            let drop: MovingObjects = objects[i];
            let hit: boolean = bucket.hit(drop.x, drop.y);
            let miss: boolean = bucket.miss(drop.y);
            let acid: boolean = objects[i] instanceof AcidRain;

            if (hit) {
                if (acid) {
                    score++;
                } else {
                    if (score > 0) {
                        score--;
                    }
                }
                objects.splice(i, 1);
            } else if (miss) {
                if (acid) {
                    livesArray.splice(0, 1);
                    objects.splice(i, 1);
                }
            }
        }
    }

    function showScore(): void {
        ctx.font = "40px Courier";
        ctx.fillStyle = "rgb(0, 200, 250)";
        ctx.fillText(score.toString(), 10, 35);
    }

    function drawStartScreen(): void {
        ctx.font = "25px Courier";
        ctx.fillStyle = "rgb(0, 130, 250)";
        ctx.fillText("Try to catch only the green acid drops", 5, 250);
        ctx.fillText("Press space or click to start", 75, height / 2);
    }

    function gameOver(): void {
        endScreen = true;
        if (score <= 30) {
            ctx.font = "25px Courier";
            ctx.textAlign = "center";
            ctx.fillStyle = "rgb(0, 130, 250)";
            ctx.fillText("GAME OVER", 290, 100);
            ctx.fillText("You LOST", 290, 150);
            ctx.fillText("You didn't catch enough", 290, 200);
            ctx.fillText("acid drops to prevent", 290, 225);
            ctx.fillText("the nature from dying", 290, 250);
            ctx.fillText("YOUR SCORE: " + score.toString(), 290, 300);
            ctx.fillText("Press space or click to try again", 290, 350);
        } else if (score > 30 && score <= 50) {
            ctx.font = "25px Courier";
            ctx.textAlign = "center";
            ctx.fillStyle = "rgb(0, 130, 250)";
            ctx.fillText("GAME OVER", 290, 100);
            ctx.fillText("You WON - BRONZE", 290, 150);
            ctx.fillText("You caught barely enough", 290, 200);
            ctx.fillText("acid drops to prevent", 290, 225);
            ctx.fillText("the nature from dying", 290, 250);
            ctx.fillText("YOUR SCORE: " + score.toString(), 290, 300);
            ctx.fillText("Press space or click to try again", 290, 350);
        } else if (score > 50 && score <= 75) {
            ctx.font = "25px Courier";
            ctx.textAlign = "center";
            ctx.fillStyle = "rgb(0, 130, 250)";
            ctx.fillText("GAME OVER", 290, 100);
            ctx.fillText("You WON - SILVER", 290, 150);
            ctx.fillText("You caught enough", 290, 200);
            ctx.fillText("acid drops to prevent", 290, 225);
            ctx.fillText("the nature from dying", 290, 250);
            ctx.fillText("YOUR SCORE: " + score.toString(), 290, 300);
            ctx.fillText("Press space or click to try again", 290, 350);
        } else if (score > 75) {
            ctx.font = "25px Courier";
            ctx.textAlign = "center";
            ctx.fillStyle = "rgb(0, 130, 250)";
            ctx.fillText("GAME OVER", 290, 100);
            ctx.fillText("You WON - GOLD", 290, 150);
            ctx.fillText("You caught more than enough", 290, 200);
            ctx.fillText("acid drops to prevent", 290, 225);
            ctx.fillText("the nature from dying", 290, 250);
            ctx.fillText("YOUR SCORE: " + score.toString(), 290, 300);
            ctx.fillText("Press space or click to try again", 290, 350);
        }
    }

}