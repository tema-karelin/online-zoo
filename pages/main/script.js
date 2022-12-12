const LANDING_BREACKPOINTS = [1600, 1000, 640, 320];
//CHECK PAGE WIDTH
let currentWidth = document.documentElement.clientWidth;
let userWidth;
// console.log("текущая ширина: ", currentWidth);
window.addEventListener('resize', sizeDependences);
function sizeDependences() {
    let clientWidth = document.documentElement.clientWidth;

    if (clientWidth>=LANDING_BREACKPOINTS[0]) {
      userWidth = 'xl';
      console.log('extra large screen: ' + clientWidth);
    }
    if (clientWidth>=LANDING_BREACKPOINTS[1]&&clientWidth<LANDING_BREACKPOINTS[0]) {
      userWidth = 'lg';
      console.log('large desktop screen: ' + clientWidth);
    }
    if (clientWidth>=LANDING_BREACKPOINTS[2]&&clientWidth<LANDING_BREACKPOINTS[1]) {
      userWidth = 'md';
      console.log('medium screen: ' + clientWidth);
    }
    if (clientWidth<LANDING_BREACKPOINTS[2]) {
      userWidth = 'sm';
      console.log('small screen: ' + clientWidth);
    }
};
sizeDependences();


//!!!!!!!!!!!!!!
//Fill animals in pets section
const petsOnPageQuantity = {
  xl: 6,
  lg: 6,
  md: 4,
  sm: 4,
}
let pets = [
  { name: "giant pandas",
    region: "Native to Southwest China",
    foodType: "herbivorous",
    image: "../../assets/images/animals/panda.jpg",
  },
  { name: "Eagles",
    region: "Native to South America",
    foodType: "predator",
    image: "../../assets/images/animals/eagle.jpg",
  },
  { name: "Gorillas",
    region: "Native to Congo",
    foodType: "herbivorous",
    image: "../../assets/images/animals/gorilla.jpg",
  },
  { name: "Two-toed Sloth",
    region: "Mesoamerica, South America",
    foodType: "herbivorous",
    image: "../../assets/images/animals/sloth.jpg",
  },
  { name: "cheetahs",
    region: "Native to Africa",
    foodType: "predator",
    image: "../../assets/images/animals/cheetahs.jpg",
  },
  { name: "Penguins",
    region: "Native to Antarctica",
    foodType: "predator",
    image: "../../assets/images/animals/penguin.jpg",
  },
  { name: "Alligators",
    region: "Native to Southeastern United States",
    foodType: "predator",
    image: "../../assets/images/animals/alligator.jpg",
  },
  { name: "minions",
    region: "Your heart :)",
    foodType: "herbivorous",
    image: "../../assets/images/animals/minions.png",
  }
];

//creating pet cards

let petCardsParent = document.querySelectorAll('.pets-container');
let petCards = document.querySelectorAll('.pet-card-container');

for (let i = 0; i<petCardsParent.length; i++) {
  for (let j = 1; j<petsOnPageQuantity[userWidth]; j++) {
    let petCardClone = petCards[i].cloneNode(true);
    petCardsParent[i].appendChild(petCardClone);
  }
}


//fill the data in pet cards

function randomCardsFilling(cardsNumber) {
  let petsObjArr = [0, 1, 2, 3, 4, 5, 6, 7] //add numbers if you will add pets in the pets array above
  //need to create the randomized array from petsObjArr numbers, with length = petsOnPageQuantity[userWidth] (4 or 6) without repeats in result array
  return petsObjArr.sort(() => Math.random() - 0.5).slice(0, cardsNumber);
}
//randomCardsFilling(petsOnPageQuantity[userWidth]);

const petsImages = document.querySelectorAll('.image');
const petsDescriptions = document.querySelectorAll('.pets-descr');
const petsKinds = document.querySelectorAll('.kind-of-animal');
const petsRegions = document.querySelectorAll('.region');

//looping through the slides (3)
for (let i = 0; i<petCardsParent.length; i++) {
  fillCards(i, true);
}


function fillCards(slideNumber, random) {
  const cardsQuantity = petsOnPageQuantity[userWidth];
  if (random === true) {
    let randomizeNumbers = randomCardsFilling(cardsQuantity);
    for (let i = 0; i < cardsQuantity; i++) {
      //set image
      petsImages[i + slideNumber*cardsQuantity].style.background = "no-repeat center url(" + pets[randomizeNumbers[i]].image + ")";
      petsImages[i + slideNumber*cardsQuantity].style.backgroundSize = "cover";
      //fill names
      petsKinds[i + slideNumber*cardsQuantity].innerHTML = pets[randomizeNumbers[i]].name;
      //fill regions
      petsRegions[i + slideNumber*cardsQuantity].innerHTML = pets[randomizeNumbers[i]].region;
      //fill food types
      petsDescriptions[i + slideNumber*cardsQuantity].classList.remove('herbivorous', 'predator');
      petsDescriptions[i + slideNumber*cardsQuantity].classList.add(pets[randomizeNumbers[i]].foodType);
    }
  } else {
    for (let i = 0; i < cardsQuantity; i++) {
      //change image
      petsImages[i + 1*cardsQuantity].style.background = petsImages[i + random*cardsQuantity].style.background;
      petsImages[i + 1*cardsQuantity].style.backgroundSize = "cover";
      //change names
      petsKinds[i + 1*cardsQuantity].innerHTML = petsKinds[i + random*cardsQuantity].innerHTML;
      //change regions
      petsRegions[i + 1*cardsQuantity].innerHTML = petsRegions[i + random*cardsQuantity].innerHTML;
      //change food types
      petsDescriptions[i + 1*cardsQuantity].classList = petsDescriptions[i + random*cardsQuantity].classList;
    }
  }
  
}


//!!!!!!!!!
//Pets slider

//Turn to the left or to the right by click
const SLIDER = document.querySelector('.slide');
const ARROW_LEFT_BUTTON = document.querySelector('#left-arrow');
const ARROW_RIGHT_BUTTON = document.querySelector('#right-arrow');


ARROW_LEFT_BUTTON.addEventListener('click', petsSlider, false);
ARROW_RIGHT_BUTTON.addEventListener('click', petsSlider, false);

function petsSlider() {
  console.log('EVENT')
  const direction = event.target.classList.contains('right') ? 'to-right' : 'to-left';
  const directionNum = event.target.classList.contains('right') ? 2 : 0;
  SLIDER.classList.add(direction);
  ARROW_LEFT_BUTTON.classList.add('disabled');
  ARROW_RIGHT_BUTTON.classList.add('disabled');
  ARROW_LEFT_BUTTON.removeEventListener('click', petsSlider, false);
  ARROW_RIGHT_BUTTON.removeEventListener('click', petsSlider, false);

  setTimeout(() => {
    fillCards(1, directionNum);
    SLIDER.classList.remove(direction);
    ARROW_LEFT_BUTTON.addEventListener('click', petsSlider, false);
    ARROW_RIGHT_BUTTON.addEventListener('click', petsSlider, false);
    ARROW_LEFT_BUTTON.classList.remove('disabled');
    ARROW_RIGHT_BUTTON.classList.remove('disabled');
    fillCards(directionNum, true);
  }, 1000);
}





//!!!!!!!!!!
//Fill testimonials section
let testimonials = [
  {
    name: "Michael John",
    location: "Local Austria",
    time: "Today",
    avatar: "../../assets/images/avatar/user_icon.png",
    feedback: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
  },
  {
    name: "Oskar Samborsky",
    location: "Local Austria",
    time: "Yesterday",
    avatar: "../../assets/images/avatar/oskar.png",
    feedback: "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br><br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
  },
  {
    name: "Fredericka Michelin",
    location: "Local Austria",
    time: "Yesterday",
    avatar: "../../assets/images/avatar/fredericka.png",
    feedback: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
  },
  {
    name: "Mila Riksha",
    location: "Local Austria",
    time: "Yesterday",
    avatar: "../../assets/images/avatar/mila.png",
    feedback: "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
  },
  {
    name: "Minion",
    location: "Orlando",
    time: "few years ago",
    avatar: "../../assets/images/avatar/minion.jpg",
    feedback: "Banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana baaaaaaaaaaaaaaaa nnnnnaaaaaaaa aaaaaaaaaa nnnnnnnnnnnnaaaaaaaaaaaaaaaaaaa Banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana baaaaaaaaaaaaaaaa nnnnnaaaaaaaa aaaaaaaaaa nnnnnnnnnnnnaaaaaaaaaaaaaaaaaaa",
  },
  {
    name: "Michael John",
    location: "Local Austria",
    time: "Today",
    avatar: "../../assets/images/avatar/user_icon.png",
    feedback: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
  },
  {
    name: "Oskar Samborsky",
    location: "Local Austria",
    time: "Yesterday",
    avatar: "../../assets/images/avatar/oskar.png",
    feedback: "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br><br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
  },
  {
    name: "Fredericka Michelin",
    location: "Local Austria",
    time: "Yesterday",
    avatar: "../../assets/images/avatar/fredericka.png",
    feedback: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
  },
  {
    name: "Mila Riksha",
    location: "Local Austria",
    time: "Yesterday",
    avatar: "../../assets/images/avatar/mila.png",
    feedback: "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
  },
  {
    name: "Minion",
    location: "Orlando",
    time: "few years ago",
    avatar: "../../assets/images/avatar/minion.jpg",
    feedback: "Banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana baaaaaaaaaaaaaaaa nnnnnaaaaaaaa aaaaaaaaaa nnnnnnnnnnnnaaaaaaaaaaaaaaaaaaa Banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana baaaaaaaaaaaaaaaa nnnnnaaaaaaaa aaaaaaaaaa nnnnnnnnnnnnaaaaaaaaaaaaaaaaaaa",
  },
  {
    name: "Mila Riksha",
    location: "Local Austria",
    time: "Yesterday",
    avatar: "../../assets/images/avatar/mila.png",
    feedback: "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
  },
];

let feedback = document.querySelector('.feedback');
let feedbackItem = document.querySelector(".feedback-card-container")
for (let i = 0; i<testimonials.length - 1; i++) {
  let feedbackItemClone = feedbackItem.cloneNode(true);
  feedback.appendChild(feedbackItemClone);
}

let avatars = document.querySelectorAll('.avatar');
let names = document.querySelectorAll('.name');
let locations = document.querySelectorAll('.location');
let times = document.querySelectorAll('.time');
let feedbackTexts = document.querySelectorAll('.feedback-text');

for (let i = 0; i<testimonials.length; i++) {
  //set avatar image
  avatars[i].style.background = "no-repeat center url(" + testimonials[i].avatar + ")";
  avatars[i].style.backgroundSize = "cover";
  //fill name
  names[i].innerHTML = testimonials[i].name;
  //fill location
  locations[i].innerHTML = testimonials[i].location;
  //fill time
  times[i].innerHTML = testimonials[i].time;
  //fill feedback content
  feedbackTexts[i].innerHTML = testimonials[i].feedback;
}

//!!!!!!!!!!!!
// Header menu
const BODY = document.querySelector('body');
const BURGER_BUTTON = document.querySelector('.burger');
const NAV_MENU_SECTION = document.querySelector('.nav-menu-section');
const CLOSE_MENU_BUTTON = document.querySelector('.nav-menu-section .close');
const NAV_MENU = document.querySelector('.nav-menu');

function openMenu() {
  console.log("openMenu")
  setTimeout(() => {
    NAV_MENU_SECTION.classList.add('menu-active');
    CLOSE_MENU_BUTTON.classList.add('menu-active');
    NAV_MENU.classList.add('menu-active');
    BODY.classList.add('popup');
  }, 4);
  NAV_MENU_SECTION.classList.add('menu-display-flex');
}

function closeMenu() {
  if (event.target == NAV_MENU_SECTION || event.target == CLOSE_MENU_BUTTON) {
    console.log(event.target);
    console.log(event.target == NAV_MENU_SECTION);
    console.log(event.target == CLOSE_MENU_BUTTON);
    NAV_MENU_SECTION.classList.remove('menu-active');
    CLOSE_MENU_BUTTON.classList.remove('menu-active');
    NAV_MENU.classList.remove('menu-active');
    BODY.classList.remove('popup');
    setTimeout(() => NAV_MENU_SECTION.classList.remove('menu-display-flex'), 1000);
  }
}

BURGER_BUTTON.addEventListener('click', openMenu, false);
NAV_MENU_SECTION.addEventListener('click', closeMenu, false);


//!! testimonials range slider

const INPUT_RANGE = document.querySelector('input[type="range"]');
const FEEDBACK_SLIDER = document.querySelector('.feedback');
const FEEDBACK_1ST_EL = document.querySelector('.feedback-card-container');

if (userWidth === 'xl') {
  INPUT_RANGE.setAttribute("max", "7");
} else {
  INPUT_RANGE.setAttribute("max", "8");
};

function rangeScroll() {
  const elStyle = window.getComputedStyle(FEEDBACK_1ST_EL);
  const elWidth = +elStyle.width.slice(0, -2) + +elStyle.marginRight.slice(0, -2);
  console.log("WIDTH ", elWidth)
  const position = "" + (-INPUT_RANGE.value*elWidth) +"px";
  console.log("POSITION ", position);
  FEEDBACK_1ST_EL.style.marginLeft = position;
}

INPUT_RANGE.addEventListener('input', rangeScroll, false);

//testimonials popup
if (userWidth == 'md' || userWidth == 'sm') {
  const FEEDBACK_ELEMENTS = document.querySelectorAll('.feedback-card-container');
  const FEEDBACK_POPUP_SECTION = document.querySelector(".feedback-popup-section");
  const POPUP = document.querySelector(".feedback-popup-section .popup");
  const FEEDBACK_POPUP_CLOSE_BUTTON = document.querySelector(".feedback-popup-section .close");
  const POPUP_FEEDBACK_CONTAINER = document.querySelector('.popup .feedback-card-container');

  for (let i = 0; i < FEEDBACK_ELEMENTS.length; i++) {
    FEEDBACK_ELEMENTS[i].addEventListener('click', openPopup, false);
  };

  function openPopup() {
    console.log("openPopup")
    const targetContainer =  event.target.closest('.feedback-card-container');
    console.log(targetContainer);

    setTimeout(() => {
      POPUP.classList.add('popup-active');
      FEEDBACK_POPUP_SECTION.classList.add('popup-active');
      BODY.classList.add('popup');
      FEEDBACK_POPUP_SECTION.addEventListener('click', closePopup, false);

      // fill popup window
      POPUP_FEEDBACK_CONTAINER.innerHTML = targetContainer.innerHTML;


    }, 4);
    FEEDBACK_POPUP_SECTION.classList.add('popup-display-flex');
  }

  function closePopup() {
    if (event.target == FEEDBACK_POPUP_SECTION || event.target == FEEDBACK_POPUP_CLOSE_BUTTON) {
      console.log(event.target);
      POPUP.classList.remove('popup-active');
      FEEDBACK_POPUP_SECTION.classList.remove('popup-active');
      BODY.classList.remove('popup');
      FEEDBACK_POPUP_SECTION.removeEventListener('click', closePopup, false);
      setTimeout(() => FEEDBACK_POPUP_SECTION.classList.remove('popup-display-flex'), 1000);
    }
  }
}
