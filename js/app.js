document.addEventListener('DOMContentLoaded', () => {
  // cards options
  const cardsArray = [
    {
      name: 'fries',
      img: '/images/fries.png',
    },
    {
      name: 'fries',
      img: '/images/fries.png',
    },
    {
      name: 'cheeseburger',
      img: '/images/cheeseburger.png',
    },
    {
      name: 'cheeseburger',
      img: '/images/cheeseburger.png',
    },
    {
      name: 'hotdog',
      img: '/images/hotdog.png',
    },
    {
      name: 'hotdog',
      img: '/images/hotdog.png',
    },
    {
      name: 'ice-cream',
      img: '/images/ice-cream.png',
    },
    {
      name: 'ice-cream',
      img: '/images/ice-cream.png',
    },
    {
      name: 'milkshake',
      img: '/images/milkshake.png',
    },
    {
      name: 'milkshake',
      img: '/images/milkshake.png',
    },
    {
      name: 'pizza',
      img: '/images/pizza.png',
    },
    {
      name: 'pizza',
      img: '/images/pizza.png',
    },
  ];

  cardsArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const results = document.querySelector('#results');
  const header = document.querySelector('h3');

  let cardsChosenId = [];
  let cardsWon = [];
  let cardsChosen = [];

  //create board

  const createBoard = () => {
    for (let i = 0; i < cardsArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', '/images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  };

  // === check for matches
  const checkForMatch = () => {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
      alert('Yeeeh!! You found a match');
      cards[optionOneId].setAttribute('src', '/images/white.png');
      cards[optionTwoId].setAttribute('src', '/images/white.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', '/images/blank.png');
      cards[optionTwoId].setAttribute('src', '/images/blank.png');
      alert(' Oops! Sorry, try again !!');
    }
    cardsChosen = [];
    cardsChosenId = [];
    results.innerHTML = cardsWon.length;

    if (cardsWon.length === cardsArray.length / 2) {
      results.innerHTML = 'Congratulations!! You have found them all!! ';
      header.innerHTML = results.innerHTML;
    }
  };

  // === Flipping the card

  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardsArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
