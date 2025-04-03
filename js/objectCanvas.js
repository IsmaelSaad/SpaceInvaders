function object(x, y, src) {
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = src;

    this.drawObject = function(context, ratio) {
        context.drawImage(this.img, this.x * ratio[0], this.y * ratio[1] , this.img.naturalWidth * ratio[0], this.img.naturalHeight * ratio[1]);
    }

    this.detectCollision = function(fobj) {
        let vertxForeign = [[fobj.x, fobj.y],
                            [fobj.x + fobj.img.naturalWidth, fobj.y], 
                            [fobj.x, fobj.y + fobj.img.naturalHeight],
                            [fobj.x + fobj.img.naturalWidth, fobj.y + fobj.img.naturalHeight]];
    }
}