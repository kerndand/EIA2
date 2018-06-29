namespace Aufgabe11 {
    window.addEventListener("load", init);
    let objects: MovingObjects[] = [];
    let n: number = 9;
    export let crc2: CanvasRenderingContext2D;
    let imagedata: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.style.border = "1px solid black";

        drawGround();

        for (let i: number = 0; i < 10; i++) {
            let a: number = Math.random() * crc2.canvas.width;
            let b: number = Math.random() * (360 - 250) + 250;
            let c: number = Math.random() * (10 - 5) + 5;
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

        imagedata = crc2.getImageData(0, 0, 640, 360);

        for (let i: number = 0; i < n; i++) {
            let fish: Fish = new Fish();
            objects.push(fish);

            let bubble: Bubbles = new Bubbles();
            bubble.radius = Math.random() * 10;
            objects.push(bubble);
        }

        canvas.addEventListener("click", insertNewObjects);
        animate();
    }

    function insertNewObjects(_event: MouseEvent): void {
        let mouseX: number = _event.clientX;
        let mouseY: number = _event.clientY;

        for (let i: number = 0; i < 3; i++) {
            let food: Food = new Food();
            if (i == 1) {
                food.x = mouseX;
                food.y = mouseY;
                objects.push(food);
            } else {
                food.x = mouseX + Math.random() * 40 - 2;
                food.y = mouseY + Math.random() * 30 - 2;
                objects.push(food);
            }
        }
    }

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.putImageData(imagedata, 0, 0);

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
    }


    function drawAnchor(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, 10, 0, 2 * Math.PI);
        crc2.moveTo(_x, _y + 10);
        crc2.lineTo(_x + 30, _y + 10);
        crc2.lineTo(_x + 25, _y + 20);
        crc2.lineTo(_x + 5, _y + 20);
        crc2.lineTo(_x + 5, _y + 70);
        crc2.quadraticCurveTo(_x + 10, _y + 85, _x + 35, _y + 70);
        crc2.lineTo(_x + 25, _y + 65);
        crc2.lineTo(_x + 50, _y + 60);
        crc2.lineTo(_x + 55, _y + 80);
        crc2.lineTo(_x + 45, _y + 75);
        crc2.quadraticCurveTo(_x, _y + 110, _x - 40, _y + 75);
        crc2.lineTo(_x - 50, _y + 80);
        crc2.lineTo(_x - 45, _y + 60);
        crc2.lineTo(_x - 20, _y + 65);
        crc2.lineTo(_x - 30, _y + 70);
        crc2.quadraticCurveTo(_x - 10, _y + 85, _x - 5, _y + 70);
        crc2.lineTo(_x - 5, _y + 20);
        crc2.lineTo(_x - 25, _y + 20);
        crc2.lineTo(_x - 30, _y + 10);
        crc2.lineTo(_x, _y + 10);
        crc2.fillStyle = "rgb(128, 128, 128)";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }

    function drawTrident(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 100);
        crc2.quadraticCurveTo(_x - 40, _y - 100, _x - 40, _y - 140);
        crc2.lineTo(_x - 50, _y - 140);
        crc2.lineTo(_x - 35, _y - 155);
        crc2.lineTo(_x - 20, _y - 140);
        crc2.lineTo(_x - 30, _y - 140);
        crc2.quadraticCurveTo(_x - 30, _y - 110, _x, _y - 110);
        crc2.lineTo(_x, _y - 140);
        crc2.lineTo(_x - 10, _y - 140);
        crc2.lineTo(_x + 5, _y - 155);
        crc2.lineTo(_x + 20, _y - 140);
        crc2.lineTo(_x + 10, _y - 140);
        crc2.lineTo(_x + 10, _y - 110);
        crc2.quadraticCurveTo(_x + 40, _y - 110, _x + 40, _y - 140);
        crc2.lineTo(_x + 30, _y - 140);
        crc2.lineTo(_x + 45, _y - 155);
        crc2.lineTo(_x + 60, _y - 140);
        crc2.lineTo(_x + 50, _y - 140);
        crc2.quadraticCurveTo(_x + 50, _y - 100, _x + 10, _y - 100);
        crc2.lineTo(_x + 10, _y);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgb(255, 200, 0)";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }

    function drawChest(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 70, _y);
        crc2.lineTo(_x + 70, _y - 50);
        crc2.lineTo(_x, _y - 50);
        crc2.lineTo(_x, _y);
        crc2.lineTo(_x - 50, _y - 40);
        crc2.lineTo(_x - 50, _y - 90);
        crc2.lineTo(_x, _y - 50);
        crc2.moveTo(_x - 50, _y - 90);
        crc2.lineTo(_x + 20, _y - 90);
        crc2.lineTo(_x + 70, _y - 50);
        crc2.lineTo(_x + 10, _y - 80);
        crc2.lineTo(_x - 40, _y - 120);
        crc2.lineTo(_x + 20, _y - 90);
        crc2.moveTo(_x + 20, _y - 90);
        crc2.lineTo(_x + 20, _y - 50);
        crc2.lineTo(_x, _y - 50);
        crc2.lineTo(_x - 50, _y - 90);
        crc2.moveTo(_x + 20, _y - 50);
        crc2.lineTo(_x + 70, _y - 50);
        crc2.lineTo(_x + 20, _y - 75);

        crc2.fillStyle = "rgb(64, 39, 0)";
        crc2.fill();
        crc2.closePath();
        crc2.strokeStyle = "rgb(103, 56, 0)";
        crc2.stroke();
    }

    function drawGround(): void {
        crc2.beginPath();
        crc2.moveTo(0, 360);
        crc2.lineTo(0, 225);
        for (let i: number = 0; i < 640; i++) {
            crc2.lineTo(i, 15 * Math.sin(i * .015) + 225);
        }
        crc2.lineTo(640, 360);
        crc2.lineTo(0, 360);
        crc2.fillStyle = "rgb(175, 151, 0)";
        crc2.fill();
        crc2.closePath();
    }

    function drawWater(): void {
        crc2.beginPath();
        crc2.lineTo(0, 360);
        crc2.lineTo(640, 360);
        crc2.lineTo(640, 0);
        crc2.lineTo(0, 0);
        crc2.fillStyle = "rgba(0, 185, 185, 0.25)";
        crc2.fill();
        crc2.closePath();
    }

    function drawGrass1(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 90, _y - 160, _x + 30, _y - 150);
        crc2.quadraticCurveTo(_x - 50, _y - 140, _x + 20, _y);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgb(2, 163, 0)";
        crc2.fill();
    }

    function drawGrass2(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 80, _y - 170, _x - 90, _y - 150);
        crc2.quadraticCurveTo(_x - 60, _y - 200, _x + 20, _y);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgb(2, 163, 0)";
        crc2.fill();
    }

    function drawGrass3(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 30, _y - 130, _x + 60, _y - 140);
        crc2.quadraticCurveTo(_x - 40, _y - 150, _x - 20, _y);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgb(2, 143, 0)";
        crc2.fill();
    }

    function drawGrass4(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 30, _y - 120, _x - 80, _y - 120);
        crc2.quadraticCurveTo(_x - 40, _y - 150, _x + 20, _y);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgb(2, 143, 0)";
        crc2.fill();
    }

    function drawStones(_x: number, _y: number, _r: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "rgb(100, 100, 100)";
        crc2.fill();
        crc2.stroke();
    }
}