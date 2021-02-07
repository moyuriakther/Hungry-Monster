fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((res) => res.json())
  .then((data) => displayMeal(data.categories));
// .then((data) => console.log(data.categories[2].strCategory))

const displayMeal = (meals) => {
  const mealsDiv = document.getElementById("meals");
  // const mealNames = meals.map( categories=> categories.strCategory);
  for (let i = 0; i < meals.length; i++) {
    const meal = meals[i];
    const mealDiv = document.createElement("div");
    mealDiv.className = 'meal';
    const mealInfo = `<img src = "${meal.strCategoryThumb}">
    <h5 class = "mealName">${meal.strCategory}</h5>
    `
    mealDiv.innerHTML = mealInfo;
    mealsDiv.appendChild(mealDiv);
  }
}
