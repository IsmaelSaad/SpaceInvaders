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
        this.interval = setInterval(updateGame, 20);
    },

    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

var playerController1 = new player1();
var playerController2 = new player2();

var myEnemy = new object(50, 200, "./media/enemy.png");
var myEnemy2 = new object(500, 200, "./media/enemy.png");
var player1 = new object(200, 950, "./media/player1.png");
var player2 = new object(500, 950, "./media/player2.png");

function updateGame() {
    playerController1.updatePlayer(player1);
    playerController2.updatePlayer(player2);
    
    viewport.clear();
    viewport.frameNo++;

    player1.drawObject(viewport.context);
    player2.drawObject(viewport.context);

    myEnemy.drawObject(viewport.context);
    myEnemy.detectCollision(myEnemy2);
}

function intervaloPermitido(n) {
    return (viewport.frameNo / n) % 1 === 0;
}

