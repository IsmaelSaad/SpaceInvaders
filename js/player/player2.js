function player2() {

    var egg = false;

    this.speed = 10;

    this.movementX = 0;

    this.updatePlayer = function(plyr1) { //Creamos una función donde pondremos todo lo que queramos que haga un update
        window.addEventListener('keydown', (event) => { // Ponemos un keydown, ya que si lo haciamos solo para que detectara una tecla no se movía seguido.
            if(event.key == 'ArrowRight') { // If para detectar si esta pulsando la tecla
                this.movementX = 1;
            } else if (event.key == 'ArrowLeft') {
                this.movementX = -1;
            }
            
            else if (event.key == 'm' && egg == false) { //easter egg
                alert("MONDONGO");
                egg = true;
            }
        });

        window.addEventListener('keyup', (event) => { // Para que se pare cuando dejes de pulsar la tecla
            if(event.key == 'ArrowRight') {
                this.movementX = 0;
            } else if (event.key == 'ArrowLeft') {
                this.movementX = 0;
            }
        });

        

        plyr1.x = plyr1.x + this.speed * this.movementX; // Calculos para mover al jugador (sumarle el valor a la pos. x)
    }
}

