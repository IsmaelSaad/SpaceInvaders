var mx = 0;
var my = 0;

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
var mouse = new object(mx, my, "./media/enemy.png");

var playerController1 = new player1();
var playerController2 = new player2();

var myEnemy = new object(50, 200, "./media/enemy.png");
var myEnemy2 = new object(500, 200, "./media/enemy.png");
var j1 = new object(200, 950, "./media/player1.png");
var j2 = new object(500, 950, "./media/player2.png");

function updateGame() {
    playerController1.updatePlayer(j1);
    playerController2.updatePlayer(j2);
    
    viewport.clear();
    viewport.frameNo++;

    j1.drawObject(viewport.context);
    j2.drawObject(viewport.context);

    myEnemy.drawObject(viewport.context);
}

function intervaloPermitido(n) {
    return (viewport.frameNo / n) % 1 === 0;
}

