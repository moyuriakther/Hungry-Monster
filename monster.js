const searchMeals = () => {
  const mealsName = document.getElementById("search-input").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealsName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const mealsContainer = document.getElementById("meals-container");
  meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.className = "meal";
    const mealInfo = `<img onclick="getIngredient('${meal.idMeal}')" src = "${meal.strMealThumb}">
            <h5 class = "mealName">${meal.strMeal}</h5>
            `;
    mealDiv.innerHTML = mealInfo;
    mealsContainer.appendChild(mealDiv);
  });
};

const getIngredient = (strMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${strMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayIngredient(data.meals[0]));
};

const displayIngredient = (strMeal) => {
  const detailsContainer = document.getElementById("food-ingredients");
  // strMeal.forEach((mealIngredient) => {
    // const detailsDiv = document.createElement("div");
    // detailsDiv.className = "mealDetails";
    // const detailsInfo = `<ul>
    //     <li>${mealIngredient.strIngredient1}</li>
    //     <li>${mealIngredient.strIngredient2}</li>
    //     <li>${mealIngredient.strIngredient3}</li>
    //     <li>${mealIngredient.strIngredient4}</li>  
    // </ul>
    //         `;
    // detailsDiv.innerHTML = detailsInfo;
    // detailsContainer.appendChild(detailsDiv);
  // });
  detailsContainer.innerText = strMeal.strMeal;
  console.log(detailsContainer);
};
