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
var j1 = new object(200, 950, "./media/player1.png");
var j2 = new object(500, 950, "./media/player2.png");


function updateGame() {
    playerController1.updatePlayer(j1);
    playerController2.updatePlayer(j2);
    
    viewport.clear();
    viewport.frameNo++;

    for (let i = bullet_pool_p1.length -1; i >= 0; i--) {
        bullet_pool_p1[i].update(viewport.context);
    }

    for (let i = bullet_pool_p2.length -1; i >= 0; i--) {
        bullet_pool_p2[i].update(viewport.context);
    }

    j1.drawObject(viewport.context);

    j2.drawObject(viewport.context);
}

