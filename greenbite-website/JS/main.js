// main.js
const slogans = [
  "Live Well, Eat Better", 
  "Fuel Your Body, Fuel Your Mind", 
  "GreenBite: Fresh Start Everyday", 
  "Eat Green, Stay Clean"
];
let sloganIndex = 0;
function rotateSlogan() {
  sloganIndex = (sloganIndex + 1) % slogans.length;
  document.getElementById('slogan').textContent = slogans[sloganIndex];
}
setInterval(rotateSlogan, 3000);

const dailyTips = [
  "Drink plenty of water today.",
  "Take a brisk walk for 15 minutes.",
  "Try to add a green veggie to every meal.",
  "Do a short breathing exercise for relaxation!"
];
let tipIndex = new Date().getDate() % dailyTips.length;
document.getElementById('dailyTip').textContent = dailyTips[tipIndex];

document.getElementById('burger').onclick = () => {
  const nav = document.getElementById('navLinks');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
};

document.getElementById('newsletterForm').onsubmit = function(e){
  e.preventDefault();
  let email = document.getElementById('newsletterEmail').value;
  if(email) {
    localStorage.setItem('newsletterEmail', email);
    document.getElementById('newsletterMsg').textContent = "Thank you for subscribing!";
  }
};
