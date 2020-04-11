const grid = document.querySelector('.grid');
const scoreEle = document.querySelector('#score');
const timeLeftEle = document.querySelector('#time-left');
const allSqure = document.querySelectorAll('.squre');
let timeLeft = timeLeftEle.textContent;
let result = 0;
// function _createLayout() {
//     for(let i=0; i<9; i++) {
//         const createEle = document.createElement('div');
//         createEle.setAttribute('id', i);
//         createEle.setAttribute('class', 'squre');
//         grid.appendChild(createEle);
//     } 
// }

// _createLayout();

function randomSqure() {
    allSqure.forEach(element => {
        element.classList.remove('mole-img');
    });
    const randomPosition = Math.floor(Math.random() * 8);
    const ele = allSqure[randomPosition];
    ele.classList.add('class', 'mole-img');
    hitPosition = ele.id;
}

allSqure.forEach(ele => {
    ele.addEventListener('mouseup', () => {
        if(ele.id === hitPosition) {
            result = result + 1;
            scoreEle.textContent = result;
        }
    });
});

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSqure, 600);
}
moveMole();

function _countown() {
    timeLeft--;
    timeLeftEle.textContent = timeLeft;
    if(timeLeft === 0) {
        clearInterval(timerId);
        alert('Game Over');
        location.reload();
    }
}

timerId = setInterval(_countown, 1000);
