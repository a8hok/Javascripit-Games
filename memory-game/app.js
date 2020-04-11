document.addEventListener('DOMContentLoaded', () => {

    // cards array
    const cardArray = [{
            name: 'ben',
            img: 'images/ben.png'
        },
        {
            name: 'buff',
            img: 'images/buff.png'
        },
        {
            name: 'dex',
            img: 'images/dex.jpg'
        },
        {
            name: 'drag',
            img: 'images/drag.png'
        },
        {
            name: 'flin',
            img: 'images/filn.jpg'
        },
        {
            name: 'johny',
            img: 'images/johny.jpg'
        },
        {
            name: 'ben',
            img: 'images/ben.png'
        },
        {
            name: 'buff',
            img: 'images/buff.png'
        },
        {
            name: 'dex',
            img: 'images/dex.jpg'
        },
        {
            name: 'drag',
            img: 'images/drag.png'
        },
        {
            name: 'flin',
            img: 'images/filn.jpg'
        },
        {
            name: 'johny',
            img: 'images/johny.jpg'
        },
    ];

    // get grid element
    const grid = document.querySelector('.grid');
    let choosenId = [];
    let choosenElement = [];
    let score = 0;
    cardArray.sort(() => 0.5 - Math.random());
    // Create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/blank.jpg');
            card.setAttribute('data-id', i);
            card.setAttribute('class', 'blank-img')
            card.addEventListener('click', _flipCard);
            grid.appendChild(card);
        }
    }

    // Flip card
    function _flipCard() {
        choosenId.push(this.getAttribute('data-id'));
        choosenElement.push(this);
        this.setAttribute('src', cardArray[this.getAttribute('data-id')].img);
        if(choosenId.length === 2) {
            setTimeout(() => {
                if(!(cardArray[choosenId[0]].name === cardArray[choosenId[1]].name)) {
                    choosenElement[0].setAttribute('src', 'images/blank.jpg');
                    choosenElement[1].setAttribute('src', 'images/blank.jpg');
                } else {
                    ++score;
                }
                choosenId = [];
                choosenElement = [];
                _winningStatus(score);
            }, 500);
        }
    }

    function _winningStatus(score) {
        if(score === (cardArray.length/2)) {
            alert('You WON!!!');
            choosenId = [];
            choosenElement = [];
        }
    }

    function _handleRest() {
        location.reload();
    }

    const resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', _handleRest);

    createBoard();
});