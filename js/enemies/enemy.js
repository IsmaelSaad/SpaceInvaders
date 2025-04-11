var enemy_pool = [];

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

function manageEnemies(bullet_pool) {
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
                
                enemy.killObject();         
                bullet_pool[i].kill();   
                break; 
            }
        }
    }
}
