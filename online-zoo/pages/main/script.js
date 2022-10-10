//CHECK PAGE WIDTH
let currentWidth = document.documentElement.clientWidth;
let userWidthStatus;

// if (currentWidth>=1280) {
//     userWidthStatus = 'standart';
// } else if (currentWidth<768) {
//     userWidthStatus = 'small';
// } else {
//     userWidthStatus = 'medium';
// };

let LANDING_BREACKPOINTS = [1600, 1000, 640, 320];



console.log("текущая ширина: ", currentWidth);
window.addEventListener('resize', sizeDependences);
function sizeDependences() {
    let clientWidth = document.documentElement.clientWidth;
    switch (true) {
      case clientWidth>=LANDING_BREACKPOINTS[0]:
        console.log('extra large screen', clientWidth);
        break;
      case LANDING_BREACKPOINTS[1]>=clientWidth&&clientWidth<=LANDING_BREACKPOINTS[0]:
        console.log('large screen', clientWidth);
        break;
        
      case LANDING_BREACKPOINTS[2]>=clientWidth&&clientWidth<=LANDING_BREACKPOINTS[1]:
        console.log('medium screen', clientWidth);
        break;
      case 0>=clientWidth&&clientWidth<=LANDING_BREACKPOINTS[2]:
          console.log('small screen', clientWidth);
          break;
    
      default:
        break;
    }
};



//Fill animals in pets section

let animals = document.querySelectorAll(".pet-card");

