namespace CatchTheDrop {

     export class MovingObjects {
        x: number;
        y: number;
        
        constructor(_x: number, _y: number) {
            this.x = _x; 
            this.y = _y;  
        }
        
        
        move(): void {
            this.y += 1.5;
        }
        
        draw(): void {
            //
        }
    }

}
