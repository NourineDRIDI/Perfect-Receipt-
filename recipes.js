let categoryId = ""
let id = 0;

class Category {
    constructor(name, image) {
        this.id = ++id;
        this.name = name;
        this.image = image;
        this.recipes = [];
    }
    addRecipe(recipe) {
        this.recipes = [...this.recipes, recipe];
    }
}

class Recipe {
    constructor(id,name, image, category, prepTime, cookTime, serving, ingredients = [], instructions = [], nutritionFacts = []) {
        this.id= ++id;
        this.name = name;
        this.image = image;
        this.category = category;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.nutritionFacts = nutritionFacts;
        this.rating = [];
        this.prepTime = prepTime;
        this.cookTime = cookTime;
        this.serving = serving;
    }
    addRate(object) {
        this.rating = [...this.rating, object];
    }
}
let breakfastRecipe = new Category("Breakfast recipes", "./assets/breakfast.jpg")
let lunchRecipes = new Category("Lunch recipes", "./assets/lunch.jpeg")
let dinnerRecipes = new Category("Dinner recipes", "./assets/dinner.jpeg")
let appetizerRecipes = new Category("Appetizer recipes", "./assets/appetizer.webp")
let saladRecipes = new Category("Salad recipes", "./assets/salad.png")
let pizzaRecipes = new Category("Pizza recipes", "./assets/pizza.jpg")
let smoothieRecipes = new Category("Smoothie recipes", "./assets/smoothie.jpg")
let pastaRecipes = new Category("Pasta recipes", "./assets/pasta.jpg")
let categories = [
    breakfastRecipe, lunchRecipes, dinnerRecipes, appetizerRecipes, saladRecipes, pizzaRecipes, smoothieRecipes, pastaRecipes
]



categories.forEach(category => {
    $(".categories").append(`
        <div class="col-md-3" id=${category.id}>
            <img src=${category.image} class="img-fluid rounded-circle" alt="${category.name}" loading="lazy" width="250" height="250">
            <h5 class="mt-2">${category.name}</h5>
        </div>
    `);
    $(`#${category.id}`).on("click", () => {
        categoryId = category.id;
        location.href = `./pages/categories.html#${categoryId}`;
    });
});

$(document).ready(function () {
    console.log(location.hash); 
    let recipeId = +location.hash.split("#")[1];
    console.log(recipeId); 
    let recipe = recipes.find(recipe => recipe.id === recipeId);
    console.log(recipe); 

    if (recipe) {
        $('#recipeNameBreadcrumb').text(recipe.name);
        $('#recipeNameHeader').text(recipe.name);
        $('#recipeAuthorInfo').text(`Recipe by PerfectRecipe Team. Created on ${recipe.createdDate}`);
        $('#recipeImage').attr('src','.'+ recipe.image);
        $('#recipeTimes').text(`Prep time: ${recipe.prepTime} | Cook time: ${recipe.cookTime} | Servings: ${recipe.servings}`);
        $('#recipeCardImage').attr('src','.'+ recipe.image);
        $('#recipeCardTitle').text(recipe.name);
        $('#recipeCardAuthorDate').text(`Recipe by PerfectRecipe Team. Created on ${recipe.createdDate}`);
        $('#recipeIngredients').html('<ul>' + recipe.ingredients.map(ing => `<li>${ing}</li>`).join('') + '</ul>');
        $('#recipeInstructions').html('<ol>' + recipe.instructions.map(ins => `<li>${ins}</li>`).join('') + '</ol>');
        $('#recipeCardIngredients').html('<ul>' + recipe.ingredients.map(ing => `<li>${ing}</li>`).join('') + '</ul>');
        $('#recipeCardInstructions').html('<ol>' + recipe.instructions.map(ins => `<li>${ins}</li>`).join('') + '</ol>');
    } else {
        $('.container').html('<p>Recipe not found</p>');
    }
});


function saveFavorite(recipeId) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    if (!favorites.includes(recipeId)) {
        favorites.push(recipeId);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Recipe saved to favorites!");
    } else {
        alert("Recipe is already in favorites.");
    }
}


function shareRecipe(recipeTitle) {
    const recipeUrl = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: recipeTitle,
            url: recipeUrl
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        alert("Sharing is not supported on this browser.");
    }
}

function printRecipe() {
    window.print();
}

$(document).ready(function() {
    $(".save-favorite").on("click", function() {
        const recipeId = $(this).data("recipe-id");
        saveFavorite(recipeId);
    });

    $(".share-recipe").on("click", function() {
        const recipeTitle = $(this).data("recipe-title");
        shareRecipe(recipeTitle);
    });

    $(".print-recipe").on("click", function() {
        printRecipe();
    });

    document.getElementById("printButton").addEventListener("click", function() {
        printRecipe();
    });
});