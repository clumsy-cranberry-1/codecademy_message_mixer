// PART 1
// collection of ingredients to randomly add to create a salad
const ingredients = {
    fruit: ["mango", "peaches", "pineapple", "strawberries", ""],
    vegetable: ["avocado", "cucumber", "spring onion", "red onion", "kalamata olives", "carrot", "corn", "capsicum", "tomato"],
    meat: ["bacon", "chicken", "salmon", ""],
    other: ["basil", "chives", "parsley", "wild rocket", "baby spinach", "feta", "mozarella", "romaine", "dried cranberries", "pecan halves", "poppy seeds", "onion flakes"],
};


// PART 2
// select and display randomly selected ingredients for our salad in the "ingredients" section in index.html

// select random ingredients and store each ingredient in a new object. 
// to avoid choosing the same ingredient more than once, compare the randomly selected ingredient to ingredients added into the new object. If the ingredient is already present in the new object, a new random ingredient must be selected and stored.

// return a random integer between 0 and N where N is the array length of any array passed in as an argument
function randomArrIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

let random_fruit = {};
let random_meat = {};
let random_vegetables = {};
let random_other_ingredients = {};

function selectRandomIngredients(category, num, object) {
    for (let i = 0; i < num; i++) {
        let random_ingredient = ingredients[category][randomArrIndex(ingredients[category])];
        while (object[random_ingredient]) {
            random_ingredient = ingredients[category][randomArrIndex(ingredients[category])];
        }
        object[random_ingredient] = random_ingredient;
    }
}

selectRandomIngredients("fruit", 1, random_fruit);
selectRandomIngredients("vegetable", 3, random_vegetables);
selectRandomIngredients("meat", 1, random_meat);
selectRandomIngredients("other", 2, random_other_ingredients);

// display the ingredients from the new objects
const ingredients_element = document.querySelector("#ingredients");

function displayIngredients(object) {
    for (const key in object) {
        if (key) {
            ingredients_element.innerHTML += `<p>${key}</p>`;
        }
    }
}

displayIngredients(random_fruit);
displayIngredients(random_vegetables);
displayIngredients(random_meat);
displayIngredients(random_other_ingredients);

// PART 3
// select and display a random background image for our salad page
function randomImgNumber(num) {
    return Math.floor(Math.random() * num + 1);
};

document.body.style.backgroundImage = `url("./images/salad_${randomImgNumber(4)}.jpg")`;