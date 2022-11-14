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

let amountElement = document.querySelector('.amount-checkbox:checked');
let amount = 0 || Number(amountElement.value);

let amountRadios = document.querySelectorAll('.amount-checkbox');
let amountInput = document.querySelector('#another-amount');

function amountCheck() {
  console.log(event);
  if (event.target.name === "amount-checkbox") {
    amount = +event.target.value;
    console.log('Amount value chenged by radio:', amount);
  } else {
    let inputAmount = Number(document.querySelector('#another-amount').value);
    console.log(inputAmount);
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
  }
}

amountInput.addEventListener('input', amountCheck);
amountRadios.forEach((el) => el.addEventListener('change', amountCheck));



