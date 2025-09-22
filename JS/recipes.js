const recipes = [
  { name: "Green Salad", category: "Salad", img: "salad.jpg", description: "Fresh veggies with greens.", steps: ["Chop vegetables", "Mix", "Serve"], ingredients: ["Lettuce", "Tomato", "Cucumber"], nutrition: {cal:150, protein:5, fat:2 } },
  { name: "Fruit Smoothie", category: "Drink", img: "smoothie.jpg", description: "Blend of fruits.", steps: ["Add fruits","Blend","Pour"], ingredients:["Banana","Berries","Milk"], nutrition:{cal:200,protein:4,fat:1} },
  { name: "Healthy Bowl", category: "Bowl", img: "bowl.jpg", description: "Nutritious meal bowl.", steps: ["Cook rice","Add veggies","Serve"], ingredients:["Rice","Carrot","Broccoli"], nutrition:{cal:250,protein:7,fat:4} }
];

function renderRecipes(list) {
  const container = document.getElementById('recipeCards');
  container.innerHTML = '';
  list.forEach((rec, idx) => {
    container.innerHTML += `<div class='recipe-card' onclick='showModal(${idx})'><img src='${rec.img}' width='120' alt='${rec.name}'><h3>${rec.name}</h3><p>${rec.description}</p></div>`;
  });
}
renderRecipes(recipes);

document.getElementById('recipeSearch').oninput = function(e){
  let v = e.target.value.toLowerCase();
  let filtered = recipes.filter(r => r.name.toLowerCase().includes(v) || r.category.toLowerCase().includes(v));
  renderRecipes(filtered);
}

window.showModal = function(idx){
  let r = recipes[idx];
  document.getElementById('recipeModal').innerHTML = `
  <div class='modal-content'>
    <h2>${r.name}</h2>
    <img src='${r.img}' width='200' alt='${r.name}'>
    <h4>Ingredients</h4>
    <ul>${r.ingredients.map(i=>`<li>${i}</li>`).join('')}</ul>
    <h4>Steps</h4>
    <ol>${r.steps.map(s=>`<li>${s}</li>`).join('')}</ol>
    <h4>Nutrition</h4>
    <table>
      <tr><td>Calories</td><td>${r.nutrition.cal}</td></tr>
      <tr><td>Protein</td><td>${r.nutrition.protein}g</td></tr>
      <tr><td>Fat</td><td>${r.nutrition.fat}g</td></tr>
    </table>
    <button onclick="closeModal()">Close</button>
  </div>
  `;
  document.getElementById('recipeModal').style.display = 'flex';
}
window.closeModal = function() {
  document.getElementById('recipeModal').style.display = 'none';
}
