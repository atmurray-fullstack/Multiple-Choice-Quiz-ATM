//Element variables
var h1Elem = document.querySelector('h1');
var a1 = document.getElementById('answer-1');
var a2 = document.getElementById('answer-2');
var a3 = document.getElementById('answer-3');
var a4 = document.getElementById('answer-4');
//answers form
var ansForm = document.getElementById('answers');
var valid = document.getElementById('valid');



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
var playerName = [];

//time counter 
var counter = 60;

//random question array choose variable
var randomQ = 0;


//confirm ready variable
var ready = confirm('Are you ready?');

//array to make sure questions are not repeated
var oldQ = [];








//setInterval variable to make timer and display in <p> in 
// var playTime = setInterval(function () {
//     counter--;
//     console.log(counter)
//     document.getElementById('countDown').innerHTML = 'TIME REMAINING: ' + counter;
//     if (counter == 0) {
//         clearInterval(playTime)
//         alert('Times is up! Let\'s checkout your score')
//     }
// }, 100);

if (ready) {

    randomQ = Math.floor(Math.random() * qAll.length);

    //set button value equal to answers
    a1.value = qAll[randomQ][1][0];
    a2.value = qAll[randomQ][2][0];
    a3.value = qAll[randomQ][3][0];
    a4.value = qAll[randomQ][4][0];

    //set h1 innerText equal to question
    h1Elem.innerText = qAll[randomQ][0];

}

//Event listener for answer button 1

a1.addEventListener('click', function () {
    console.log(a1.value);
    playerAns.push(qAll[randomQ][1][1]);
    console.log(qAll[randomQ][1][1])
    console.log(playerAns)

if(qAll[randomQ][1][1]){
    valid.innerText = 'Correct Answer';
}else {
    valid.innerText = 'Incorrect Answer';
}


    randomQ = Math.floor(Math.random() * qAll.length)
    h1Elem.innerText = qAll[randomQ][0];
    a1.value = qAll[randomQ][1][0];
    a2.value = qAll[randomQ][2][0];
    a3.value = qAll[randomQ][3][0];
    a4.value = qAll[randomQ][4][0];


})

//event listeners for answer button 2
a2.addEventListener('click', function () {
    console.log(a2.value);
    playerAns.push(qAll[randomQ][2][1]);
    console.log(qAll[randomQ][2][1])
    console.log(playerAns)

if(qAll[randomQ][2][1]){
    valid.innerText = 'Correct Answer';
}else {
    valid.innerText = 'Incorrect Answer';
}


    randomQ = Math.floor(Math.random() * qAll.length)
    h1Elem.innerText = qAll[randomQ][0];
    a1.value = qAll[randomQ][1][0];
    a2.value = qAll[randomQ][2][0];
    a3.value = qAll[randomQ][3][0];
    a4.value = qAll[randomQ][4][0];


})


//event listener for button 3
a3.addEventListener('click', function () {
    console.log(a3.value);
    playerAns.push(qAll[randomQ][3][1]);
    console.log(qAll[randomQ][3][1])
    console.log(playerAns)

if(qAll[randomQ][3][1]){
    valid.innerText = 'Correct Answer';
}else {
    valid.innerText = 'Incorrect Answer';
}


    randomQ = Math.floor(Math.random() * qAll.length)
    h1Elem.innerText = qAll[randomQ][0];
    a1.value = qAll[randomQ][1][0];
    a2.value = qAll[randomQ][2][0];
    a3.value = qAll[randomQ][3][0];
    a4.value = qAll[randomQ][4][0];


})

//event listener for button 4
a4.addEventListener('click', function () {
    console.log(a4.value);
    playerAns.push(qAll[randomQ][4][1]);
    console.log(qAll[randomQ][4][1])
    console.log(playerAns)

if(qAll[randomQ][4][1]){
    valid.innerText = 'Correct Answer';
}else {
    valid.innerText = 'Incorrect Answer';
}


    randomQ = Math.floor(Math.random() * qAll.length)
    h1Elem.innerText = qAll[randomQ][0];
    a1.value = qAll[randomQ][1][0];
    a2.value = qAll[randomQ][2][0];
    a3.value = qAll[randomQ][3][0];
    a4.value = qAll[randomQ][4][0];


})