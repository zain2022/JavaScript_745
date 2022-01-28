
let count = 0;

let countDOM = document.getElementById('count-el');
console.log(countDOM);

let savePreviousEntries = document.getElementById('save-previous-entries');
console.log(savePreviousEntries);

window.addEventListener('DOMContentLoaded', (event) => {
    savePreviousEntries.textContent = 'Prevoius entries: ';
});

function increment() {
    // count += 1;
    count++;
    // document.getElementById("count-dom").innerText = count; // same with innerHTML
    countDOM.innerText = count;
    console.log(count);
}

function decrement() {
    count--;
    countDOM.innerText = count;
}

function save() {
    // savePreviousEntries.textContent = 'Prevoius entries: ';
    let countStr = count + ' - ';
    savePreviousEntries.textContent += countStr; // innerText ignoring the last space.
    console.log(count);
    count = 0
    countDOM.innerText = count;
}

function reset(){
    count = 0
    countDOM.innerText = count;
    savePreviousEntries.innerText = 'Previous entries: ';
}

// // Welcome Message
// let welcomeDOM = document.getElementById('welcome-dom');
// let name = 'Zain';
// let greeting = ' Welcome in the passenger app.';

// welcomeDOM.innerHTML = name + '⭐️' + ', ' + greeting;
// // function greet() {
// // }

// Intro
// document.getElementById("count").innerText = 5;

// let myAge = 26;
// console.log(myAge);

// let firstBatch = 5;
// let count = firstBatch;
// console.log(count);

// function increment(){
//     console.log("The button was clicked.")
// }

// function countDown(){
//     console.log("countDown() was called");
// }

// countDown();