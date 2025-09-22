document.getElementById('calcForm').onsubmit = function(e){
  e.preventDefault();
  let age = +this.age.value, gender = this.gender.value, h = +this.height.value, w = +this.weight.value, act = +this.activity.value;
  let bmr = gender === 'male' ? (88.36 + 13.4*w + 4.8*h - 5.7*age) : (447.6 + 9.2*w + 3.1*h - 4.3*age);
  let tdee = Math.round(bmr * act);
  let protein = Math.round(w*1.6), fat = Math.round(tdee*0.25/9), carb = Math.round((tdee - (protein*4 + fat*9))/4);

  document.getElementById('calcResults').innerHTML = `
    <p><b>BMR:</b> ${Math.round(bmr)} kcal/day</p>
    <p><b>TDEE:</b> ${tdee} kcal/day</p>
    <div>
      <label>Protein</label>
      <div class='progress-bar'><div class='progress-inner' style='width:${Math.min(protein*2, 100)}%'></div></div> ${protein}g
      <label>Fat</label>
      <div class='progress-bar'><div class='progress-inner' style='width:${Math.min(fat*4, 100)}%'></div></div> ${fat}g
      <label>Carbs</label>
      <div class='progress-bar'><div class='progress-inner' style='width:${Math.min(carb, 100)}%'></div></div> ${carb}g
    </div>
  `;
}
