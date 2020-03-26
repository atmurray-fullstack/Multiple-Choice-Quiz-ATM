

//Element variables
var h1Elem = document.querySelector('h2');
var a1 = document.getElementById('1');
var a2 = document.getElementById('2');
var a3 = document.getElementById('3');
var a4 = document.getElementById('4');
var rowQ = document.getElementById('scoreQuestTime');
var again = document.getElementById('again');
var player = document.getElementById('player');
var formAns = document.getElementById('answers');
var formReadyBut = document.getElementById('formReady');
var nameDiv = document.getElementById('nameDiv');
var scoreDis = document.getElementById('scoreDis');
var ansForm = document.getElementById('answers');
var valid = document.getElementById('valid');



//question array
const qAll = [
    ['question1', ['answer1-1', true], ['answer1-2', false], ['answer1-3', false], ['answer1-4', false]],
    ['question2', ['answer2-1', true], ['answer2-2', false], ['answer2-3', false], ['answer2-4', false]],
    ['question3', ['answer3-1', true], ['answer3-2', false], ['answer3-3', false], ['answer3-4', false]],
    ['question4', ['answer4-1', true], ['answer4-2', false], ['answer4-3', false], ['answer4-4', false]],
    ['question5', ['answer5-1', true], ['answer5-2', false], ['answer5-3', false], ['answer5-4', false]],
    ['question6', ['answer6-1', true], ['answer6-2', false], ['answer6-3', false], ['answer6-4', false]],
    ['question7', ['answer7-1', true], ['answer7-2', false], ['answer7-3', false], ['answer7-4', false]],
    ['question8', ['answer8-1', true], ['answer8-2', false], ['answer8-3', false], ['answer8-4', false]],
    ['question9', ['answer9-1', true], ['answer9-2', false], ['answer9-3', false], ['answer9-4', false]],
    ['question10', ['answer10-1', true], ['answer10-2', false], ['answer10-3', false], ['answer10-4', false]],
    ['question11', ['answer11-1', true], ['answer11-2', false], ['answer11-3', false], ['answer11-4', false]],
    ['question12', ['answer12-1', true], ['answer12-2', false], ['answer12-3', false], ['answer12-4', false]],
    ['question13', ['answer13-1', true], ['answer13-2', false], ['answer13-3', false], ['answer13-4', false]]


]
// answer value array
var playerArr = []
//array for player name
var playerName = "";
//time counter 
var counter = 60;
//random question array choose variable
var randomQ = 0;
var ready = false;
var score = 0;
scoreDis.innerText = 'Score: ' + score
//array to make sure questions are not repeated
var oldQ = [];

//create functions/////////
////////////////////////
function rando() {
    return Math.floor(Math.random() * qAll.length);
}

function countDown() {
    var playTime = setInterval(function () {
        counter--;

        document.getElementById('countDown').innerHTML = 'TIME REMAINING: ' + counter;
        if (counter <= 0) {
            clearInterval(playTime)
            alert('Times is up! Let\'s checkout your score')
            a1.style.display = 'none';
            a2.style.display = 'none';
            a3.style.display = 'none';
            a4.style.display = 'none';
            player.style.display = 'block';
            h1Elem.innerText = 'Put your name in!!'
            valid.style.display = 'none'


        }
    }, 1000);
}

function questionsSet() {
    if (ready) {
        randomQ = rando();
        noRepeat(randomQ);
        //set button value equal to answers
        a1.value = qAll[randomQ][1][0];
        a2.value = qAll[randomQ][2][0];
        a3.value = qAll[randomQ][3][0];
        a4.value = qAll[randomQ][4][0];
        //set h1 innerText equal to question
        h1Elem.innerText = qAll[randomQ][0];

    }
}


function noRepeat(x) {
    var reRun = false;
    if (oldQ.length === qAll.length) {
        counter = 0;
        oldQ=[];
    

    } else {
        for (let i = 0; i < oldQ.length; i++) {
            if (x === oldQ[i]) {
                reRun = true;
                break;
            }
        }
    }
    if (reRun === true) {
        randomQ = rando();
        randomQ = noRepeat(randomQ);
    }
    oldQ.push(randomQ);
    return randomQ;
}


//////////////////////////
//////////////////////////

//Initial Display settings

a1.style.display = 'none';
a2.style.display = 'none';
a3.style.display = 'none';
a4.style.display = 'none';
again.style.display = 'none';
player.style.display = 'none';
valid.style.display = 'none';



//Initial h1 game statement and local storage
h1Elem.innerText = 'You will have 60 seconds to answer as many questions as you can. Good Luck!!'
playerArr = JSON.parse(localStorage.getItem('players'))

if (playerArr === null) {
    localStorage.setItem('players', JSON.stringify([['Player', 0]]));
    // console.log(JSON.parse(localStorage.getItem('players')));
    playerArr = localStorage.getItem(JSON.parse(localStorage.getItem('players')))
    // console.log(playerArr)
}



formReadyBut.addEventListener('click', function (event) {
    event.stopPropagation()
    score = 0;
    counter = 60;
    formReadyBut.style.display = 'none';
    a1.style.display = 'block';
    a2.style.display = 'block';
    a3.style.display = 'block';
    a4.style.display = 'block';
    valid.style.display = 'block';
    countDown()
    ready = true;
    questionsSet(ready);

})

//event delegation event listener for answer form
formAns.addEventListener('click', function (event) {
    event.stopPropagation();
    var index = event.target.id;
    index = parseInt(index);


    if (qAll[randomQ][index][1]) {
        valid.innerText = 'Correct Answer';
        score++
        scoreDis.innerText = 'Score: ' + score;

    } else {
        counter = counter - 5;
        valid.innerText = 'Incorrect Answer => -5 Seconds';
    }


    randomQ = rando()

    noRepeat(randomQ);

    h1Elem.innerText = qAll[randomQ][0];
    a1.value = qAll[randomQ][1][0];
    a2.value = qAll[randomQ][2][0];
    a3.value = qAll[randomQ][3][0];
    a4.value = qAll[randomQ][4][0];

})

nameDiv.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        playerName = nameDiv.children[0].value;
        playerArr.push([playerName, score])
        for (let i = 0; i < playerArr.length; i++) {
            var newDiv = document.createElement('div');
            var n = playerArr[i][0];
            var s = playerArr[i][1];
            newDiv.innerText = n + ' ' + s
            console.log(newDiv.innerText)
            displayPlayers.appendChild(newDiv);
        }

        localStorage.setItem('players', JSON.stringify(playerArr));
        score = 0;
        scoreDis.innerText = 'Score: ' + score;
        player.value = 'Enter your name'
        playerArr = [];
        player.style.display = 'none';
        h1Elem.innerText = 'Are you ready to go again?! Come one give it a shot....'
        again.style.display = 'block';
    }

    again.addEventListener('click', function (event) {
        event.stopPropagation();
        h1Elem.innerText = 'You will have 60 seconds to answer as many questions as you can. Good Luck!!'
        playerArr = JSON.parse(localStorage.getItem('players'))
        displayPlayers.innerHTML = "";
        formReadyBut.style.display = 'block';
        again.style.display = 'none';
    })
})



