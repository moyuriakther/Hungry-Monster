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
    const mealInfo = `<img src = "${meal.strMealThumb}">
            <h5 class = "mealName">${meal.strMeal}</h5>
    
            `;
    mealDiv.innerHTML = mealInfo;
    mealsContainer.appendChild(mealDiv);
  });
};



// const inputMealName = document.getElementById('input');
// const inputMeal = inputMealName.value;
// document.getElementById('button').addEventListener('click', function(){
//     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s= ${inputMealName}')
//     .then(res => res.json())
//     .then(data => {
//         // const inputMeal = meals.strCategory;
//         // const name = meals.filter(meals =>meals.strCategory === inputMeal)
//         // document.getElementById('meals').innerText = name;
//         console.log(data);
//     })
// })

// const inputMealName = document.getElementById('input').value;
// document.getElementById('button').addEventListener('click', function(){
//     fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a' + inputMealName)
//     // console.log('button clicked',fetch);
//     .then(res =>res.json())
//     // .then(data =>console.log(data))
//     .then(data =>{
//         const mealName = data;
//         document.getElementById('meals').innerText =mealName;
//     })
// })

// fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
//   .then((res) => res.json())
//   .then((data) => displayMeal(data.categories));

// const displayMeal = (meals) => {
//   const mealsDiv = document.getElementById("meals");
//   meals.forEach((meal) => {
//     const mealDiv = document.createElement("div");
//     mealDiv.className = "meal";
//     const mealInfo = `<img onclick="displayMealDetail('${meal.strCategory}')" src = "${meal.strCategoryThumb}">
//         <h5 class = "mealName">${meal.strCategory}</h5>

//         `;
//     mealDiv.innerHTML = mealInfo;
//     mealsDiv.appendChild(mealDiv);
//   });
// }

// const displayMealDetail = meal =>{
// const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data =>console.log(data.meals));
//     // console.log(url)

// }

// const renderMealInfo = meal =>{
//     console.log(meal);
//     const ingredients = document.getElementById('foodIngredients');
//     ingredients.innerHTML =`

//     `
// }
