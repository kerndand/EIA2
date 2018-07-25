var CatchTheDrop;
(function (CatchTheDrop) {
    window.addEventListener("load", init);
    CatchTheDrop.rightKey = false;
    CatchTheDrop.leftKey = false;
    let objects = [];
    let livesArray = [];
    let imagedata;
    let score = 0;
    let bucket = new CatchTheDrop.Bucket(270, 535);
    let pressed = 0;
    let startScreen = true;
    let endScreen = false;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        CatchTheDrop.ctx = canvas.getContext("2d");
        canvas.style.display = "block";
        canvas.style.margin = "0 auto";
        CatchTheDrop.height = canvas.height;
        CatchTheDrop.width = canvas.width;
        // Hintergrund
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
        // Interaktionsobjekte
        for (let i = 0; i < 3; i++) {
            let flower = new CatchTheDrop.Flower(440 + (i * 55), 30, Math.random() * 255, Math.random() * 255, Math.random() * 255);
            livesArray.push(flower);
        }
        for (let i = 0; i < 50; i++) {
            let smoke = new CatchTheDrop.Smoke(475, Math.random() * 350, Math.random() * (15 - 10) + 10);
            objects.push(smoke);
            let smoke2 = new CatchTheDrop.Smoke(525, Math.random() * 350, Math.random() * (15 - 10) + 10);
            objects.push(smoke2);
        }
        //Event-Listener
        document.addEventListener("keydown", movementByKey, false);
        document.addEventListener("keyup", movementByKeyRelease, false);
        canvas.addEventListener("click", handleClick, false);
        canvas.addEventListener("touchmove", movementByTouch, false);
        catchDrop();
        drawStartScreen();
    }
    // Funktion zum starten des Spiels
    function startGame() {
        if (pressed == 0) {
            createRain();
            animate();
        }
    }
    //Animationsfunktion
    function animate() {
        CatchTheDrop.ctx.putImageData(imagedata, 0, 0);
        if (livesArray.length > 0) {
            moveObjects();
            drawObjects();
        }
        else {
            gameOver();
        }
        window.setTimeout(animate, 10);
    }
    //Bewegungsfunktion f�r Objekte
    function moveObjects() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }
    //Zeichenfunktion f�r Objekte
    function drawObjects() {
        for (let i = 0; i < objects.length; i++)
            objects[i].draw();
        for (let i = 0; i < livesArray.length; i++)
            livesArray[i].draw();
        bucket.draw();
        showScore();
    }
    // Erzeugen der Tropfen
    function createRain() {
        window.setTimeout(createRain, 1000);
        let rainchance = Math.random();
        if (rainchance < .5) {
            let rain = new CatchTheDrop.Rain(Math.random() * CatchTheDrop.width, -40);
            objects.push(rain);
        }
        else {
            let acidrain = new CatchTheDrop.AcidRain(Math.random() * CatchTheDrop.width, -40);
            objects.push(acidrain);
        }
    }
    // Mausklick-Handler
    function handleClick(_event) {
        if (startScreen) {
            startGame();
            pressed = 1;
            startScreen = false;
        }
        else if (endScreen) {
            window.location.reload();
        }
    }
    // Tastatur-Handler
    function movementByKey(_event) {
        if (_event.keyCode == 39) {
            CatchTheDrop.rightKey = true;
            bucket.move();
        }
        else if (_event.keyCode == 37) {
            CatchTheDrop.leftKey = true;
            bucket.move();
        }
        if (_event.keyCode == 32) {
            if (startScreen) {
                startGame();
                pressed = 1;
                startScreen = false;
            }
            else if (endScreen) {
                window.location.reload();
            }
        }
    }
    function movementByKeyRelease(_event) {
        if (_event.keyCode == 39) {
            CatchTheDrop.rightKey = false;
        }
        else if (_event.keyCode == 37) {
            CatchTheDrop.leftKey = false;
        }
    }
    //Touchscreen-Handler
    function movementByTouch(_event) {
        if (_event.changedTouches[0].clientX > 0 && _event.changedTouches[0].clientX < CatchTheDrop.width) {
            bucket.x = _event.changedTouches[0].clientX - 60 / 2;
        }
    }
    // Funktion zum Schauen ob Tropfen aufgefangen wird
    function catchDrop() {
        window.setTimeout(catchDrop, 10);
        for (let i = 0; i < objects.length; i++) {
            let drop = objects[i];
            let hit = bucket.hit(drop.x, drop.y);
            let miss = bucket.miss(drop.y);
            let acid = objects[i] instanceof CatchTheDrop.AcidRain;
            if (hit) {
                if (acid) {
                    score++;
                }
                else {
                    if (score > 0) {
                        score--;
                    }
                }
                objects.splice(i, 1);
            }
            else if (miss) {
                if (acid) {
                    livesArray.splice(0, 1);
                }
                objects.splice(i, 1);
            }
        }
    }
    //Anzeigen des Scores
    function showScore() {
        CatchTheDrop.ctx.font = "40px Courier";
        CatchTheDrop.ctx.fillStyle = "rgb(0, 200, 250)";
        CatchTheDrop.ctx.fillText(score.toString(), 10, 35);
    }
    //Zeichnen des Startscreens
    function drawStartScreen() {
        CatchTheDrop.ctx.font = "25px Courier";
        CatchTheDrop.ctx.fillStyle = "rgb(0, 130, 250)";
        CatchTheDrop.ctx.fillText("Try to catch only the green acid drops", 5, 250);
        CatchTheDrop.ctx.fillText("Press space or click to start", 75, CatchTheDrop.height / 2);
    }
    //Endscreen
    function gameOver() {
        endScreen = true;
        if (score <= 30) {
            CatchTheDrop.ctx.font = "25px Courier";
            CatchTheDrop.ctx.textAlign = "center";
            CatchTheDrop.ctx.fillStyle = "rgb(0, 130, 250)";
            CatchTheDrop.ctx.fillText("GAME OVER", 290, 100);
            CatchTheDrop.ctx.fillText("You LOST", 290, 150);
            CatchTheDrop.ctx.fillText("You didn't catch enough", 290, 200);
            CatchTheDrop.ctx.fillText("acid drops to prevent", 290, 225);
            CatchTheDrop.ctx.fillText("the nature from dying", 290, 250);
            CatchTheDrop.ctx.fillText("YOUR SCORE: " + score.toString(), 290, 300);
            CatchTheDrop.ctx.fillText("Press space or click to try again", 290, 350);
        }
        else if (score > 30 && score <= 50) {
            CatchTheDrop.ctx.font = "25px Courier";
            CatchTheDrop.ctx.textAlign = "center";
            CatchTheDrop.ctx.fillStyle = "rgb(0, 130, 250)";
            CatchTheDrop.ctx.fillText("GAME OVER", 290, 100);
            CatchTheDrop.ctx.fillText("You WON - BRONZE", 290, 150);
            CatchTheDrop.ctx.fillText("You caught barely enough", 290, 200);
            CatchTheDrop.ctx.fillText("acid drops to prevent", 290, 225);
            CatchTheDrop.ctx.fillText("the nature from dying", 290, 250);
            CatchTheDrop.ctx.fillText("YOUR SCORE: " + score.toString(), 290, 300);
            CatchTheDrop.ctx.fillText("Press space or click to try again", 290, 350);
        }
        else if (score > 50 && score <= 75) {
            CatchTheDrop.ctx.font = "25px Courier";
            CatchTheDrop.ctx.textAlign = "center";
            CatchTheDrop.ctx.fillStyle = "rgb(0, 130, 250)";
            CatchTheDrop.ctx.fillText("GAME OVER", 290, 100);
            CatchTheDrop.ctx.fillText("You WON - SILVER", 290, 150);
            CatchTheDrop.ctx.fillText("You caught enough", 290, 200);
            CatchTheDrop.ctx.fillText("acid drops to prevent", 290, 225);
            CatchTheDrop.ctx.fillText("the nature from dying", 290, 250);
            CatchTheDrop.ctx.fillText("YOUR SCORE: " + score.toString(), 290, 300);
            CatchTheDrop.ctx.fillText("Press space or click to try again", 290, 350);
        }
        else if (score > 75) {
            CatchTheDrop.ctx.font = "25px Courier";
            CatchTheDrop.ctx.textAlign = "center";
            CatchTheDrop.ctx.fillStyle = "rgb(0, 130, 250)";
            CatchTheDrop.ctx.fillText("GAME OVER", 290, 100);
            CatchTheDrop.ctx.fillText("You WON - GOLD", 290, 150);
            CatchTheDrop.ctx.fillText("You caught more than enough", 290, 200);
            CatchTheDrop.ctx.fillText("acid drops to prevent", 290, 225);
            CatchTheDrop.ctx.fillText("the nature from dying", 290, 250);
            CatchTheDrop.ctx.fillText("YOUR SCORE: " + score.toString(), 290, 300);
            CatchTheDrop.ctx.fillText("Press space or click to try again", 290, 350);
        }
    }
})(CatchTheDrop || (CatchTheDrop = {}));
//# sourceMappingURL=main.js.map