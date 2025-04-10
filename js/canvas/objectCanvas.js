function object(x, y, src) {
    this.x = x;
    this.y = y;
    this.active = true;
    this.img = new Image();
    this.img.src = src;

    this.drawObject = function(context, x ,y) {
        if (x != null && y != null) {
            this.x = x;
            this.y = y;
        }
        if (this.active)
            context.drawImage(this.img, this.x, this.y, this.img.naturalWidth, this.img.naturalHeight);
    }

    this.killObject = function (kill) {
        this.active = false;
    }

    this.detectCollision = function(fobj) {
        let leftA = this.x;
        let rightA = this.x + this.img.naturalWidth;
        let topA = this.y;
        let bottomA = this.y + this.img.naturalHeight;
    
        let leftB = fobj.x;
        let rightB = fobj.x + fobj.img.naturalWidth;
        let topB = fobj.y;
        let bottomB = fobj.y + fobj.img.naturalHeight;
    
        if (rightA < leftB || leftA > rightB || bottomA < topB || topA > bottomB) {
            return false;
        }
    
        return true;
    }
    
}