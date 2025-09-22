document.getElementById('contactForm').onsubmit = function(e){
  e.preventDefault();
  let name = document.getElementById('name').value, email = document.getElementById('email').value, msg = document.getElementById('message').value;
  if(!name || !email || !msg) return;
  localStorage.setItem('feedback', JSON.stringify({name, email, msg}));
  document.getElementById('contactMsg').textContent='Thank you for your feedback!';
};

let accBtns = document.getElementsByClassName('accordion-btn');
for(let btn of accBtns){
  btn.onclick = function(){
    let nxt = this.nextElementSibling;
    nxt.classList.toggle('active-ac');
  }
}
