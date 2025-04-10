function bullet(plyr) {
    this.created = false;
    const separation = 10;

    this.createBullet = function() {
        var bullet_c = new object(plyr.x, plyr.y + separation);
    }

    this.killBullet = function() {
        bullet_c.killObject();
    }

    updateBullet = function(ctx) {
        bullet_c.drawObject(ctx);
        bullet_c.y += 0.5;
    }
}

