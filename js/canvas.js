function startGame() {
    viewport.start();
}

var viewport = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.context = this.canvas.getContext("2d");
        const juego_col = document.getElementById("col_juego");
        juego_col.appendChild(this.canvas);
    }
}