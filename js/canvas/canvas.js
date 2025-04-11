const WIDTH = 1920;
const HEIGHT = 1080;

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

var gameFinish = new object(400, 0, "./media/gameover.png");

var enemy1 = new object(150, 50, "./media/enemy.png");

var gameOver = false;

function updateGame() {

    if (playerController1.lives == 0 || playerController2.lives == 0) {
        gameOver = true;
        viewport.clear();
    
        viewport.context.fillStyle = "black";
        viewport.context.font = "bold 48px runescape"; 
    
        if (playerController1.lives == 0) {
            viewport.context.fillText("¡P2 ha ganado!", WIDTH/2 - 350, HEIGHT - 100);
        } else {
            viewport.context.fillText("¡P1 ha ganado!", WIDTH/2 - 350, HEIGHT - 100);
        }
    
        gameFinish.drawObject(viewport.context);
        return;
    }
    
    if (playerController1.score == 200) {
        updateLives(playerController1, playerController2, true);
    } else if (playerController2.score == 200) {
        updateLives(playerController2, playerController1, false);
    }

    playerController1.updatePlayer(j1);
    playerController2.updatePlayer(j2);

    moveEnemies();

    updateScore(playerController1, true);
    updateScore(playerController2, false);
    
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

