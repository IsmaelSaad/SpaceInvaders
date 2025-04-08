function player() {
    var egg = false;

    this.speed = 5;

    this.movementX = 0;

    this.updatePlayer = function(plyr) { //Creamos una función donde pondremos todo lo que queramos que haga un update
        window.addEventListener('keypress', (event) => {

            if(event.key == 'd') {
                //plyr.x = plyr.x + 0.5;
                //console.log(plyr.x);
                this.movementX = 1;
            } else if (event.key == 'm' && egg == false) { //easter egg
                alert("MONDONGO");
                egg = true;
            }
        });

        window.addEventListener('keyup', (event) => {

            if(event.key == 'd') {
                this.movementX = 0;
            }
        });

             plyr.x = plyr.x + this.speed * this.movementX;
                console.log(plyr.x);


    }
}

