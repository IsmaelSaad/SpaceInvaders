function startGame() {
    viewport.start();
}

var viewport = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.context = this.canvas.getContext("2d");
        this.resize(); 
        window.addEventListener("resize", () => this.resize()); 
        
        const juego_col = document.getElementById("col_juego");
        juego_col.appendChild(this.canvas);
        this.frameNo = 0;
        this.interval = setInterval(updateGame, 20);
    },
    resize: function() {
        const maxWidth = window.innerWidth; 
        const maxHeight = window.innerHeight; 

        if (maxWidth / 16 > maxHeight / 9) {
            this.canvas.height = maxHeight;
            this.canvas.width = (maxHeight / 9) * 16;
        } else {
            this.canvas.width = maxWidth;
            this.canvas.height = (maxWidth / 16) * 9;
        }
        
    },
    ratioWindow: function() {
        var ratio = [window.innerWidth / WIDTH,  window.innerHeight / HEIGHT];
        return ratio;
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

var myEnemy = new object(50, 200, "./media/enemy.png");

var myEnemy2 = new object(500, 200, "./media/enemy.png");

function updateGame() { 

    // Antes del frame

    viewport.clear();
    viewport.frameNo++;

    // Después del frame

    myEnemy.drawObject(viewport.context, viewport.ratioWindow());
    myEnemy.detectCollision(myEnemy2);

}

function intervaloPermitido(n) {
    if ((viewport.frameNo / n) % 1 == 0) {return true;}
    return false;
}           