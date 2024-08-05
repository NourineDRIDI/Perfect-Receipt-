const datacategories = [
    { id: 1, name: "Breakfast recipes", image: "./assets/breakfast.jpg" },
    { id: 2, name: "Lunch recipes", image: "./assets/lunch.jpeg" },
    { id: 3, name: "Dinner recipes", image: "./assets/dinner.jpeg" },
    { id: 4, name: "Appetizer recipes", image: "./assets/appetizer.webp" },
    { id: 5, name: "Salad recipes", image: "./assets/salad.png" },
    { id: 6, name: "Pizza recipes", image: "./assets/pizza.jpg" },
    { id: 7, name: "Smoothie recipes", image: "./assets/smoothie.jpg" },
    { id: 8, name: "Pasta recipes", image: "./assets/pasta.jpg" }
]

const recipes = [
    {
        id: 1,
        name: 'Mixed Greens with Sun-Dried Tomato Dressing',
        categoryId: 5,
        image: './assets/Mixed greens.jpg',
        prepTime: '5 mins',
        cookTime: '15 mins',
        servings: '4',
        ingredients: ['1/4 cup Sun dried tomatoes', '2 tbsp Soymilk', '5/8 tsp Rosemary', '3/4 tsp Thyme', '1/4 medium whole Tomatoes', '1/4 fruit without seeds Lemons'],
        instructions: [
            'Soak the sun-dried tomatoes in soy milk for an hour.',
            'Chop fresh herbs, tomato, and onions and toss them with the salad greens.',
            'Grind the soaked sun-dried tomatoes with additional veggies as desired.',
            'Add lemon zest to enhance flavor.',
            'Combine all ingredients in a high-powered blender until they are smooth and creamy.'
        ],
        createdDate: '2023-01-15'
    },
    {
        id: 2,
        name: 'Toasts with Tomato, Onion, & Hummus',
        categoryId: 1,
        image: './assets/Toast with tomato, onion & hummus.jpg',
        prepTime: '10 mins',
        cookTime: '0 mins',
        servings: '2',
        ingredients: ['4 slices of whole-grain bread', '1 cup hummus', '1 large tomato, sliced', '1/2 small red onion, thinly sliced', 'Salt and pepper to taste', 'Fresh basil leaves for garnish'],
        instructions: [
            'Toast the bread slices until they are golden brown.',
            'Spread hummus evenly on each slice of toast.',
            'Top with tomato slices and onion slices.',
            'Season with salt and pepper.',
            'Garnish with fresh basil leaves and serve immediately.'
        ],
        createdDate: '2023-07-20'
    },
    {
        id: 3,
        name: 'Ham, Egg and Spinach Roll-ups',
        categoryId: 2, 
        image: './assets/ham egg and spinach roll-up.jpg',
        prepTime: '5 mins',
        cookTime: '10 mins',
        servings: '4',
        ingredients: ['4 large eggs', '4 slices of ham', '1 cup fresh spinach', 'Salt and pepper to taste', 'Olive oil for cooking'],
        instructions: [
            'Beat the eggs in a bowl and season with salt and pepper.',
            'Heat a non-stick skillet with a little olive oil over medium heat.',
            'Pour in the eggs and cook until they are set, then remove from heat.',
            'Lay a slice of ham flat and place some spinach on top.',
            'Roll the cooked egg with the ham and spinach into a tight roll.',
            'Repeat with the remaining ingredients and serve warm.'
        ],
        createdDate: '2023-07-22'
    },
    {
        id: 4,
        name: 'Strawberry and Cherry Pancake',
        categoryId: 1, 
        image: './assets/pancake.jpg',
        prepTime: '10 mins',
        cookTime: '15 mins',
        servings: '4',
        ingredients: ['1 cup all-purpose flour', '1 tbsp sugar', '1 tsp baking powder', '1/2 tsp baking soda', '1 cup buttermilk', '1 egg', '1/4 cup melted butter', '1 cup strawberries, sliced', '1/2 cup cherries, pitted and halved'],
        instructions: [
            'In a bowl, mix flour, sugar, baking powder, and baking soda.',
            'Whisk in buttermilk, egg, and melted butter until smooth.',
            'Heat a non-stick skillet over medium heat.',
            'Pour batter into the skillet, using about 1/4 cup for each pancake.',
            'Top each pancake with strawberries and cherries before flipping.',
            'Cook until golden brown and serve warm with syrup.'
        ],
        createdDate: '2023-07-25'
    },
    {
        id: 5,
        name: 'Copycat California Pizza Kitchen BBQ Chicken',
        categoryId: 6, 
        image: './assets/BBQ-Pizza.png',
        prepTime: '20 mins',
        cookTime: '15 mins',
        servings: '4',
        ingredients: ['1 prepared pizza crust', '1/2 cup BBQ sauce', '1 cup cooked chicken, shredded', '1 cup mozzarella cheese, shredded', '1/4 cup red onion, thinly sliced', 'Cilantro for garnish'],
        instructions: [
            'Preheat oven to 475°F (245°C).',
            'Spread BBQ sauce evenly over the pizza crust.',
            'Top with shredded chicken, mozzarella cheese, and red onion slices.',
            'Bake for 12-15 minutes or until the crust is golden and cheese is bubbly.',
            'Garnish with cilantro before serving.'
        ],
        createdDate: '2023-07-27'
    },
    {
        id: 6,
        name: 'Green Smoothie drink',
        categoryId: 7, 
        image: './assets/smoothie.jpg',
        prepTime: '5 mins',
        cookTime: '0 mins',
        servings: '2',
        ingredients: ['1 cup spinach', '1 banana', '1/2 cup Greek yogurt', '1/2 cup almond milk', '1 tbsp honey', 'Ice cubes'],
        instructions: [
            'Combine all ingredients in a blender.',
            'Blend until smooth and creamy.',
            'Add more almond milk if needed to reach the desired consistency.',
            'Serve immediately and enjoy.'
        ],
        createdDate: '2023-07-30'
    },
]
  


