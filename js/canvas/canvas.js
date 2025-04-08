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

var myEnemy = new object(50, 200, "./media/enemy.png");
var myEnemy2 = new object(500, 200, "./media/enemy.png");

function updateGame() { 
    viewport.clear();
    viewport.frameNo++;

    myEnemy.drawObject(viewport.context);
    mouse.drawObjectFoo(viewport.context, mx, my);
    myEnemy.detectCollision(myEnemy2);
}

function intervaloPermitido(n) {
    return (viewport.frameNo / n) % 1 === 0;
}

