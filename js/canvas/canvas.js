function startGame() {
    viewport.start();
}

var viewport = {
    canvas: document.createElement("canvas"),
    
    start: function() {
        this.context = this.canvas.getContext("2d");

        this.canvas.width = 1920;
        this.canvas.height = 1080;

        const juego_col = document.getElementById("col_juego");
        juego_col.appendChild(this.canvas);
        this.frameNo = 0;

        createEnemies();

        this.interval = setInterval(updateGame, 20);
    },

    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

var playerController1 = new player1();
var playerController2 = new player2();
var j1 = new object(200, 950, "./media/player1.png");
var j2 = new object(1600, 950, "./media/player2.png");

var enemy1 = new object(150, 50, "./media/enemy.png");

function updateGame() {
    playerController1.updatePlayer(j1);
    playerController2.updatePlayer(j2);

    moveEnemies();
    
    viewport.clear();
    viewport.frameNo++;

    for (let i = bullet_pool_p1.length -1; i >= 0; i--) {
        bullet_pool_p1[i].update(viewport.context);
    }

    for (let i = bullet_pool_p2.length -1; i >= 0; i--) {
        bullet_pool_p2[i].update(viewport.context);
    }

    manageEnemies(bullet_pool_p1, playerController1);

    manageEnemies(bullet_pool_p2, playerController2);

    j1.drawObject(viewport.context);
    j2.drawObject(viewport.context);

    for (let i = enemy_pool.length -1; i >= 0; i--) {
        enemy_pool[i].drawObject(viewport.context);
    }

    if (viewport.frameNo % enemyRespawnInterval === 0) {
    // filtrar enemigos inactivos
    let inactiveEnemies = enemy_pool.filter(e => !e.active);
    
    if (inactiveEnemies.length > 0) {
        // filtra enemigos cuya posición reactivada estaría dentro del canvas
        const visibleCandidates = inactiveEnemies.filter(e => {
            const projectedX = e.initialX + enemyOffsetX;
            return projectedX >= 0 && projectedX + e.img.width <= viewport.canvas.width;
        });
    
        if (visibleCandidates.length > 0) {
            const randomIndex = Math.floor(Math.random() * visibleCandidates.length);
            const enemyToRespawn = visibleCandidates[randomIndex];
            enemyToRespawn.x = enemyToRespawn.initialX + enemyOffsetX;
            enemyToRespawn.active = true;
        }
    }
    
}

}

