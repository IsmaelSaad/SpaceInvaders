function object(x, y, src) {
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = src;

    this.drawObject = function(context) {
        context.drawImage(this.img, this.x, this.y, this.img.naturalWidth, this.img.naturalHeight);
    }

    this.drawObjectFoo = function(context, x ,y) {
        context.drawImage(this.img, x, y, this.img.naturalWidth, this.img.naturalHeight);
    }

    this.detectCollision = function(fobj) {
        let vertxForeign = [[fobj.x, fobj.y],
                            [fobj.x + fobj.img.naturalWidth, fobj.y],
                            [fobj.x, fobj.y + fobj.img.naturalHeight],
                            [fobj.x + fobj.img.naturalWidth, fobj.y + fobj.img.naturalHeight]];
        let vertxObj = [[this.x, this.y],
                            [this.x + this.img.naturalWidth, this.y],
                            [this.x, this.y + this.img.naturalHeight],
                            [this.x + this.img.naturalWidth, this.y + this.img.naturalHeight]];
        var crash = true;
        if ((vertxObj[3][1] < vertxForeign[0][1]) || (vertxObj[0][1] > vertxForeign[3][1]) || (vertxObj[1][0] < vertxForeign[0][0]) || (vertxObj[0][0] > vertxForeign[1][0])) {
            crash = false;
        }
        return crash;
    }
}