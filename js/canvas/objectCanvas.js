function object(x, y, src) {
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = src;

    this.drawObject = function(context) {
        context.drawImage(this.img, this.x, this.y, this.img.naturalWidth, this.img.naturalHeight);
    }

    this.detectCollision = function(fobj) {
        let vertxForeign = [[fobj.x, fobj.y],
                            [fobj.x + fobj.img.naturalWidth, fobj.y], 
                            [fobj.x, fobj.y + fobj.img.naturalHeight],
                            [fobj.x + fobj.img.naturalWidth, fobj.y + fobj.img.naturalHeight]];
        
        
    }
}