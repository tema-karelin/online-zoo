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
  { name: "Two-toed Sloth",
    region: "Mesoamerica, South America",
    foodType: "herbivorous",
    image: "../../assets/images/animals/sloth.jpg",
  },
  { name: "Eagles",
    region: "Native to South America",
    foodType: "predator",
    image: "../../assets/images/animals/eagle.jpg",
  },
  { name: "cheetahs",
    region: "Native to Africa",
    foodType: "predator",
    image: "../../assets/images/animals/cheetahs.jpg",
  },
  { name: "Gorillas",
    region: "Native to Congo",
    foodType: "herbivorous",
    image: "../../assets/images/animals/gorilla.jpg",
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
    region: "Orlando and your mind :)",
    foodType: "herbivorous predator",
    image: "../../assets/images/animals/minions.png",
  }
];
let petCard = document.querySelector('.pet-card-container');
let petCardParent = document.querySelector('.pets-container');
// let petCardClone = petCard.cloneNode(true);
for (let i = 1; i<petsOnPageQuantity[userWidth]; i++) {
  let petCardClone = petCard.cloneNode(true);
  petCardParent.appendChild(petCardClone);
}
let petsImages = document.querySelectorAll('.image');
let petsDescriptions = document.querySelectorAll('.pets-descr');
let petsKinds = document.querySelectorAll('.kind-of-animal');
let petsRegions = document.querySelectorAll('.region');
// let randomArrToFill = pets.sort(()=>Math.random()-0.5);
// console.log(randomArrToFill);
for (let i = 0; i < petsImages.length; i++) {
  //set image
  petsImages[i].style.background = "no-repeat center url(" + pets[i].image + ")";
  petsImages[i].style.backgroundSize = "cover";
  //fill names
  petsKinds[i].innerHTML = pets[i].name;
  //fill regions
  petsRegions[i].innerHTML = pets[i].region;
  //fill food types
  petsDescriptions[i].classList.add(pets[i].foodType);
}



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
    name: "",
    location: "",
    time: "",
    avatar: "../../assets/images/avatar/",
    feedback: "",
  },
  {
    name: "",
    location: "",
    time: "",
    avatar: "../../assets/images/avatar/",
    feedback: "",
  },
  {
    name: "",
    location: "",
    time: "",
    avatar: "../../assets/images/avatar/",
    feedback: "",
  },
  {
    name: "",
    location: "",
    time: "",
    avatar: "../../assets/images/avatar/",
    feedback: "",
  },
  {
    name: "",
    location: "",
    time: "",
    avatar: "../../assets/images/avatar/",
    feedback: "",
  },
  {
    name: "",
    location: "",
    time: "",
    avatar: "../../assets/images/avatar/",
    feedback: "",
  },
  {
    name: "",
    location: "",
    time: "",
    avatar: "../../assets/images/avatar/",
    feedback: "",
  }
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






