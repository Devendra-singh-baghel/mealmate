export default function getIngredients(meal) {
    let ingredients = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim()) {
            ingredients.push({
                ingredient: ingredient.trim(),  //skip empty ingredient
                measure: measure ? measure.trim() : "", // if measure missing, just empty string
            });
        }
    }

    return ingredients;
}