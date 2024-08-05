$(document).ready(function() {
    let category = datacategories.find(e => e.id === +location.href.split("#")[1]);

    $('.categoryPage').append(`
        <h2>${category.name}</h2>
        <img src=".${category.image}" alt="categoryImage" loading="lazy" width="300" class="rounded-circle">
    `);

    let categoryRecipes = recipes.filter(recipe => recipe.categoryId === category.id);

    categoryRecipes.forEach(recipe => {
        $('.categoryPage').append(`
            <div class="card my-3 p-3 d-flex flex-column align-items-center" style="width: 300px; height: 450px;">
                <img src=".${recipe.image}" class="card-img-top" alt="${recipe.name}" loading="lazy" style="width: 270px; height: 250px;">
                <div class="card-body">
                    <h5 class="card-title">${recipe.name}</h5>
                    <p class="card-text">Prep time: ${recipe.prepTime} | Cook time: ${recipe.cookTime} | Servings: ${recipe.servings}</p>
                    <a href="./recipe.html#${recipe.id}" class="btn" style="background-color: #B66055; border-color: #B66055; color: white;">View Recipe</a>
                </div>
            </div>
        `)
    })
})
