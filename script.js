//Element variables
var h1Elem = document.querySelector('h2');
var a1 = document.getElementById('1');
var a2 = document.getElementById('2');
var a3 = document.getElementById('3');
var a4 = document.getElementById('4');
var formAns = document.getElementById('answers');
var formReadyBut = document.getElementById('formReady');

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
var playerAns = [] || playerAns;

//array for player name
var playerName = [];

//time counter 
var counter = 60;

//random question array choose variable
var randomQ = 0;

var ready = false;

function rando() {
    return Math.floor(Math.random() * qAll.length);
}

function countDown() {
    var playTime = setInterval(function () {
        counter--;
        console.log(counter)
        document.getElementById('countDown').innerHTML = 'TIME REMAINING: ' + counter;
        if (counter <= 0) {
            clearInterval(playTime)
            alert('Times is up! Let\'s checkout your score')
        }
    }, 1000);
}

function questionsSet(){
    if (ready) {

        randomQ = rando();
    
        //set button value equal to answers
        a1.value = qAll[randomQ][1][0];
        a2.value = qAll[randomQ][2][0];
        a3.value = qAll[randomQ][3][0];
        a4.value = qAll[randomQ][4][0];
    
        //set h1 innerText equal to question
        h1Elem.innerText = qAll[randomQ][0];
    
    }
    
    
}





var score = 0;
scoreDis.innerText = 'Score: ' + score

//array to make sure questions are not repeated
var oldQ = [];


//Initial h1 game statement
h1Elem.innerText = 'You will have 60 seconds to answer as many questions as you can. Good Luck!!'
formReadyBut.addEventListener('click',function(){
    countDown()
    formReadyBut.style.display = 'none'
    ansForm.style.display = 'block'
    ready = true;
    questionsSet(ready);

})

//event delegation event listener for answer form
formAns.addEventListener('click', function (event) {
    var index = event.target.id;
    index = parseInt(index);
    playerAns.push(qAll[randomQ][index][1]);

    if (qAll[randomQ][index][1]) {
        valid.innerText = 'Correct Answer';
        score++
        scoreDis.innerText = 'Score: ' + score;

    } else {
        counter = counter - 5;
        valid.innerText = 'Incorrect Answer => -5 Seconds';
    }


    randomQ = rando()
    h1Elem.innerText = qAll[randomQ][0];
    a1.value = qAll[randomQ][1][0];
    a2.value = qAll[randomQ][2][0];
    a3.value = qAll[randomQ][3][0];
    a4.value = qAll[randomQ][4][0];

})

























// setInterval variable to make timer and display in <p> in 
// var playTime = setInterval(function () {
//     counter--;
//     console.log(counter)
//     document.getElementById('countDown').innerHTML = 'TIME REMAINING: ' + counter;
//     if (counter <= 0) {
//         clearInterval(playTime)
//         alert('Times is up! Let\'s checkout your score')
//     }
// }, 100);

// if (ready) {

//     randomQ = rando();

//     //set button value equal to answers
//     a1.value = qAll[randomQ][1][0];
//     a2.value = qAll[randomQ][2][0];
//     a3.value = qAll[randomQ][3][0];
//     a4.value = qAll[randomQ][4][0];

//     //set h1 innerText equal to question
//     h1Elem.innerText = qAll[randomQ][0];

// }


// //event delegation event listener
// formAns.addEventListener('click', function (event) {
//     var index = event.target.id;
//     index = parseInt(index);
//     playerAns.push(qAll[randomQ][index][1]);

//     if (qAll[randomQ][index][1]) {
//         valid.innerText = 'Correct Answer';
//         score++
//         scoreDis.innerText = 'Score: ' + score;

//     } else {
//         counter = counter - 5;
//         valid.innerText = 'Incorrect Answer => -5 Seconds';
//     }


//     randomQ = rando()
//     h1Elem.innerText = qAll[randomQ][0];
//     a1.value = qAll[randomQ][1][0];
//     a2.value = qAll[randomQ][2][0];
//     a3.value = qAll[randomQ][3][0];
//     a4.value = qAll[randomQ][4][0];

// })

