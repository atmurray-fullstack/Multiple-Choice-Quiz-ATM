

//immutable variables

//question array
const qAll = [
    ['question1', ['answer1-1', true], ['answer1-2', false], ['answer1-3', false], ['answer1-4', false]],
    ['question2', ['answer2-1', true], ['answer2-2', false], ['answer2-3', false], ['answer2-4', false]],
    ['question3', ['answer3-1', true], ['answer3-2', false], ['answer3-3', false], ['answer3-4', false]],
    ['question4', ['answer4-1', true], ['answer4-2', false], ['answer4-3', false], ['answer4-4', false]],
    ['question5', ['answer5-1', true], ['answer5-2', false], ['answer5-3', false], ['answer5-4', false]]

]
// answer value array
var playerAns = [] || playerAns;
//array for player name
playerName = [];
//time counter 
counter = 60;



//setInterval variable to make timer
var playTime = setInterval(function () {
    counter--;
    console.log(counter)
    document.getElementById('countDown').innerHTML = 'TIME REMAINING: '+counter;
    if (counter == 0) {
        clearInterval(playTime)
    }
}, 1000);