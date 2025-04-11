
function updateScore(plyr, isP1) {
    if (isP1 == true) {
        var scoreP1 = document.getElementById('scoreP1');
        scoreP1.innerHTML = "SCORE: " + plyr.score;
    } else {
        var scoreP2 = document.getElementById('scoreP2');
        scoreP2.innerHTML = "SCORE: " + plyr.score;
    }
}