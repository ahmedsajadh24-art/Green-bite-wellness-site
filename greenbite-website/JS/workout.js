const workouts = {
  arms: ["Push-ups", "Tricep dips", "Plank shoulder taps"],
  legs: ["Squats", "Lunges", "Calf raises"],
  full: ["Burpees", "Jumping Jacks", "Mountain Climbers"],
  dumbbell: ["Dumbbell rows", "Dumbbell curls"]
};

document.getElementById('workoutForm').onsubmit = function(e){
  e.preventDefault();
  let part = document.getElementById('bodyPart').value, equip = document.getElementById('equipment').value;
  let plan = equip == 'none' ? workouts[part] : [...workouts[part], ...workouts.dumbbell];
  let selected = plan.slice(0,3);
  let html = selected.map(ex=>`<div>${ex} <span id='timer${ex}'>30</span>s</div>`).join('');
  document.getElementById('workoutResult').innerHTML = html;
  selected.forEach(ex=>{
    let time = 30, span = document.getElementById('timer'+ex);
    let interval = setInterval(() => {
      time--; span.textContent = time;
      if(!time) clearInterval(interval);
    },1000);
  });
}
