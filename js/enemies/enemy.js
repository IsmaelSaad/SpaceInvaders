var enemy_pool = [];

let enemyOffsetX = 0; 

let enemyRespawnInterval = 40;

let enemyDirection = 1; 
let enemySpeed = 5;

function createEnemies() {
    var og_pos_1 = [150, 50];
    var og_pos_2 = [150, 170];
    var og_pos_3 = [300, 290];

    for (let i = 0; i < 11;i++) {
        enemy_pool.push(new object(og_pos_1[0] + og_pos_1[0] * i, og_pos_1[1], "./media/enemy.png"));
    }

    for (let i = 0; i < 11;i++) {
        enemy_pool.push(new object(og_pos_2[0] + og_pos_2[0] * i, og_pos_2[1], "./media/enemy.png"));
    }

    for (let i = 0; i < 5;i++) {
        enemy_pool.push(new object(og_pos_3[0] + og_pos_3[0] * i, og_pos_3[1], "./media/enemy.png"));
    }
}

function manageEnemies(bullet_pool, plyr) {
    for (let i = bullet_pool.length - 1; i >= 0; i--) {
        const bullet = bullet_pool[i].bull_obj;

        for (let j = enemy_pool.length - 1; j >= 0; j--) {
            const enemy = enemy_pool[j];

            
            if (!enemy.active) continue;

            if (
                bullet.x < enemy.x + enemy.img.width &&
                bullet.x + bullet.img.width > enemy.x &&
                bullet.y < enemy.y + enemy.img.height &&
                bullet.y + bullet.img.height > enemy.y
            ) {
                plyr.score += 10;
                enemy.killObject();         
                bullet_pool[i].kill();   
                break; 
            }
        }
    }
}

function moveEnemies() {
    let reachedEdge = false;

    // Chequeo anticipado para cambio de dirección
    for (let i = 0; i < enemy_pool.length; i++) {
        const enemy = enemy_pool[i];

        if (enemy.active) {
            let newX = enemy.initialX + enemyOffsetX + (enemyDirection * enemySpeed);
            if (newX + enemy.img.width >= viewport.canvas.width || newX <= 0) {
                reachedEdge = true;
                break;
            }
        }
    }

    if (reachedEdge) {
        enemyDirection *= -1;
    } else {
        enemyOffsetX += enemyDirection * enemySpeed;
    }

    for (let i = 0; i < enemy_pool.length; i++) {
        const enemy = enemy_pool[i];
        if (enemy.active) {
            enemy.x = enemy.initialX + enemyOffsetX;
        }
    }
}

