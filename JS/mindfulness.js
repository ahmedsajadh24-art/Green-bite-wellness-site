function startBreathing(){
  const div = document.getElementById('breathingAnimation');
  let txt = ['Inhale...','Exhale...'];
  let i=0;
  div.innerHTML = txt[i];
  setInterval(()=>{
    i = 1 - i;
    div.innerHTML = txt[i];
  }, 4000);
}

function startTimer() {
  let mins = +document.getElementById('timerMinutes').value;
  let sec = mins * 60, disp = document.getElementById('timerDisplay');
  disp.textContent = `${mins}:00`;
  let c = setInterval(()=>{
    sec--;
    let m = Math.floor(sec/60), s = sec%60;
    disp.textContent = `${m}:${s<10?'0':''}${s}`;
    if(sec<1){
      clearInterval(c);
      disp.textContent = 'Done!';
      let cc = +(localStorage.getItem('completeCount') || 0) + 1;
      localStorage.setItem('completeCount', cc);
      document.getElementById('completeCount').textContent = cc;
    }
  },1000);
}

function toggleSound() {
  // Optionally add ambient sound logic here
}

window.onload = function(){
  document.getElementById('completeCount').textContent = localStorage.getItem('completeCount') || 0;
};
