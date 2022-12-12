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


// Pick and Feed Interactivity
let amountElement = document.querySelector('.amount-checkbox:checked');
let amount = 0 || Number(amountElement.value);

let amountRadios = document.querySelectorAll('.amount-checkbox');
let amountInput = document.querySelector('#another-amount');

function amountCheck() {
  console.log(event);
  if (event.target.name === "amount-checkbox") {
    amount = +event.target.value;
    console.log('Amount value chenged by radio:', amount);
    document.querySelector('#another-amount').value = amount;
  } else {
    let inputAmount = Number(document.querySelector('#another-amount').value);
    if (inputAmount < 10000 && inputAmount >= 1) {
      let radioElement;

      if (inputAmount === 5000|| inputAmount === 2000 || inputAmount === 1000 || inputAmount === 500 || inputAmount === 250 || inputAmount === 100 || inputAmount === 50 || inputAmount === 25) {
        console.log("if!")
        if (document.querySelector('.amount-checkbox:checked')) {
          document.querySelector('.amount-checkbox:checked').removeAttribute('checked');
        }
        radioElement = document.querySelector(`#amount-${inputAmount}`);
        radioElement.setAttribute('checked', 'true');
      } else {
        if (document.querySelector('.amount-checkbox:checked')) {
          document.querySelector('.amount-checkbox:checked').removeAttribute('checked');
        }
      }
    }
    amount = inputAmount;
  }
}

amountInput.addEventListener('input', amountCheck);
amountRadios.forEach((el) => el.addEventListener('change', amountCheck));


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


//remove lables 5000 2000 1000
if (userWidth == 'lg') {
  document.querySelector('label[for="amount-5000"]').remove();
}
if (userWidth == 'sm' || userWidth == 'md') {
  document.querySelector('label[for="amount-5000"]').remove();
  document.querySelector('label[for="amount-2000"]').remove();
  document.querySelector('label[for="amount-1000"]').remove();
}


