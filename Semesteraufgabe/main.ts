namespace CatchTheDrop {
    window.addEventListener("load", init);

    export let ctx: CanvasRenderingContext2D;
    export let height: number;
    export let width: number;
    let objects: MovingObjects[] = [];
    let imagedata: ImageData;
    
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
        
        for (let i: number = 0; i < 50; i++) {
        
            let smoke: Smoke = new Smoke(475, Math.random() * 350, Math.random() * (15 - 10) + 10);
            objects.push(smoke);
            
            let smoke2: Smoke = new Smoke(525, Math.random() * 350, Math.random() * (15 - 10) + 10);
            objects.push(smoke2);
        }


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
    }
}