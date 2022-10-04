//BUG: increase a player, save. If increase10, then it increases as a string (i.e 10 (saved) + 10 = 1010, not the expected 20)

// create needed constants
const rememberPlayer1Div = document.querySelector('.remember-player1');
const forgetPlayer1Div = document.querySelector('.forget-player1');
const rememberPlayer2Div = document.querySelector('.remember-player2');
const forgetPlayer2Div = document.querySelector('.forget-player2');
const form = document.querySelector('form');
const nameInputPlayer1 = document.querySelector('#entername-player1');
const nameInputPlayer2 = document.querySelector('#entername-player2');

const actions = Array.from(document.querySelectorAll('[data-action]'));

let player1 = localStorage.getItem('player1') || "Player 1";
let player2 = localStorage.getItem('player2') || "Player 2";

let counterPlayer1 = localStorage.getItem('counterPlayer1') || 0;
let counterPlayer2 = localStorage.getItem('counterPlayer2') || 0;

document.getElementById("name-player1").textContent = player1;
document.getElementById("name-player2").textContent = player2;

document.getElementById("counter-player1").textContent = counterPlayer1;
document.getElementById("counter-player2").textContent = counterPlayer2;

// Stop the form from submitting when a button is pressed
form.addEventListener('submit', (e) => e.preventDefault());


// define the nameDisplayCheck() function -> will prevent showing the 'remember' part on reloading
function nameDisplayCheck() {
    // check whether the 'name' data item is stored in web Storage
    if (localStorage.getItem('player1')) {
        // If it is, hide the 'remember' part of the form and show the 'forget' part
        forgetPlayer1Div.style.display = 'block';
        rememberPlayer1Div.style.display = 'none';
      } else {
        // if not, hide the 'forget' part of the form and show the 'remember' part
        forgetPlayer1Div.style.display = 'none';
        rememberPlayer1Div.style.display = 'block';
      }
    if (localStorage.getItem('player2')) {
        forgetPlayer2Div.style.display = 'block';
        rememberPlayer2Div.style.display = 'none';
      } else {
        forgetPlayer2Div.style.display = 'none';
        rememberPlayer2Div.style.display = 'block';
      }
    }  
nameDisplayCheck()

// Setting actions
actions.forEach(action => {
    action.addEventListener('click', () => {
        const type = action.dataset.action;

        switch (type) {
            case 'increase-player1':
                counterPlayer1++;
                break;
            case 'increase-player1-10':
                counterPlayer1 = 10 + counterPlayer1;
                break;
            case 'increase-player2':
                counterPlayer2++;
                break;
            case 'increase-player2-10':
                counterPlayer2 = 10 + counterPlayer2;
                break;
            case 'decrease-player1':
                counterPlayer1--;
                break;
            case 'decrease-player2':
                counterPlayer2--;
                break;
            case 'save':
                localStorage.setItem('counterPlayer1', counterPlayer1);
                localStorage.setItem('counterPlayer2', counterPlayer2);
                break;
            case 'clear':
                localStorage.clear();
                counterPlayer1 = 0;
                counterPlayer2 = 0;
                document.getElementById("name-player1").textContent = "Player 1";
                document.getElementById("name-player2").textContent = "Player 2";
                forgetPlayer1Div.style.display = 'none';
                forgetPlayer2Div.style.display = 'none';
                rememberPlayer1Div.style.display = 'block';
                rememberPlayer2Div.style.display = 'block';
                break;
            case 'submitname-player1':
                // store the entered name in web storage
                localStorage.setItem('player1', nameInputPlayer1.value);
                document.querySelector('#name-player1').textContent= localStorage.getItem('player1');
                // hide the 'remember' part of the form and show the 'forget' part
                forgetPlayer1Div.style.display = 'block';
                rememberPlayer1Div.style.display = 'none';
                break;
            case 'submitname-player2':
                localStorage.setItem('player2', nameInputPlayer2.value);
                document.querySelector('#name-player2').textContent= localStorage.getItem('player2');
                forgetPlayer2Div.style.display = 'block';
                rememberPlayer2Div.style.display = 'none';
                break;
        }
        document.getElementById("counter-player1").textContent = counterPlayer1;
        document.getElementById("counter-player2").textContent = counterPlayer2;
    });
});