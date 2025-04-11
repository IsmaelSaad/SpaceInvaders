class object {
    constructor(x, y, src) {
        this.x = x;
        this.y = y;
        this.initialX = x;
        this.img = new Image();
        this.img.src = src;
        this.active = true;
    }
    

    drawObject(ctx, x = this.x, y = this.y, w = this.img.width, h = this.img.height) {
        if (this.active) {
            ctx.drawImage(this.img, x, y, w, h);
        }
    }

    killObject() {
        this.active = false;
    }


    detectCollision(fobj) {
        let leftA = this.x;
        let rightA = this.x + this.img.naturalWidth;
        let topA = this.y;
        let bottomA = this.y + this.img.naturalHeight;
    
        let leftB = fobj.x;
        let rightB = fobj.x + fobj.img.naturalWidth;
        let topB = fobj.y;
        let bottomB = fobj.y + fobj.img.naturalHeight;
        
        
        if (fobj.active == true) {
            if ((rightA < leftB || leftA > rightB || bottomA < topB || topA > bottomB) ) {
                return false;
            }
        }
        
        return true;
    }
    
}