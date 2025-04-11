var bullet_pool_p2 = [];
let lastAction_p2 = Date.now();

function player2() {
    var egg = false;
    this.speed = 10;
    this.movementX = 0;

    window.addEventListener('keydown', (event) => {
        if (event.key == 'ArrowRight') {
            this.movementX = 1;
        } else if (event.key == 'ArrowLeft') {
            this.movementX = -1;
        } else if (event.key == 'm' && egg == false) {
            alert("MONDONGO");
            egg = true;
        }

        if (event.key == 'ArrowUp') {
            const now = Date.now();
            const elapsed = now - lastAction_p2;
            if (elapsed >= 250) {
                bullet_pool_p2.push(new Bullet(j2.x, j2.y, "./media/rayo.png"));
                lastAction_p2 = now;
            }
        }
    });

    window.addEventListener('keyup', (event) => {
        if (event.key == 'ArrowRight' || event.key == 'ArrowLeft') {
            this.movementX = 0;
        }
    });

    this.updatePlayer = function(plyr2) {
        plyr2.x = plyr2.x + this.speed * this.movementX;
    }

    class Bullet {
        constructor(x, y, src) {
            this.bull_obj = new object(x + 25, y - 50, src);
        }

        update(ctx) {
            if (this.bull_obj.y > -25) {
                this.bull_obj.y -= 25;
                this.bull_obj.drawObject(ctx, this.bull_obj.x, this.bull_obj.y, this.bull_obj.img.naturalWidth * 0.5, this.bull_obj.img.naturalHeight * 0.5);
            } else {
                this.kill();
            }
            
        }

        kill() {
            this.bull_obj.killObject();
        }
    }
}
