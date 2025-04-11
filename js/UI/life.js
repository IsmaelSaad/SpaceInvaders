
function updateLives(plyr1, plyr2, isP1) {
    if (isP1 == true) {
        var healthP1 = document.getElementById('j2_l' +  plyr2.lives);
        healthP1.style.backgroundColor = 'black';
        plyr2.lives -= 1;
        plyr1.wins += 1;
        plyr1.score = 0;
    } else {
        var healthP2 = document.getElementById('j1_l' +  plyr2.lives);
        healthP2.style.backgroundColor = 'black';
        plyr2.lives -= 1;
        plyr1.wins += 1;
        plyr1.score = 0;
    }
}