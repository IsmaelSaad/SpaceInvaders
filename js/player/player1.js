var bullet_pool_p1 = [];
let lastAction_p1 = Date.now();

function player1() {
    var egg = false;
    this.speed = 10;
    this.movementX = 0;

    window.addEventListener('keydown', (event) => {
        if (event.key == 'd') {
            this.movementX = 1;
        } else if (event.key == 'a') {
            this.movementX = -1;
        } else if (event.key == 'm' && egg == false) {
            alert("MONDONGO");
            egg = true;
        }

        if (event.key == 'w') {
            const now = Date.now();
            const elapsed = now - lastAction_p1;
            if (elapsed >= 250) {
                bullet_pool_p1.push(new Bullet1(j1.x, j1.y, "./media/rayo.png"));
                lastAction_p1 = now;
            }
        }
    });

    window.addEventListener('keyup', (event) => {
        if (event.key == 'd' || event.key == 'a') {
            this.movementX = 0;
        }
    });

    this.updatePlayer = function(plyr1) {
        plyr1.x = plyr1.x + this.speed * this.movementX;
    }

    class Bullet1 {
        constructor(x, y, src) {
            this.bull_obj = new object(x + 25, y - 50, src);
        }

        update(ctx) {
            this.bull_obj.y -= 25;
            this.bull_obj.drawObject(ctx, this.bull_obj.x, this.bull_obj.y, this.bull_obj.img.naturalWidth * 0.5, this.bull_obj.img.naturalHeight * 0.5);
        }

        kill() {}
    }
}
