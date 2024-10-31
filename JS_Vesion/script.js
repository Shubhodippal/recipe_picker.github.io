document.addEventListener("DOMContentLoaded", () => {
    const courseSelect = document.getElementById("course");
    const cuisineSelect = document.getElementById("cuisine");
    const dietSelect = document.getElementById("diet");
    const cookingTimeSlider = document.getElementById("cookingTime");
    const timeValueDisplay = document.getElementById("timeValue");
    const findRecipesButton = document.getElementById("findRecipes");
    const recipeListContainer = document.getElementById("recipeListContainer");

    const courseCuisines = {
        "Side Dish": ["Indian", "North Indian", "South Indian", "East Indian", "West Indian", "Other Regional Indian", "Asian", "Mughlai", "Parsi", "Continental"],
        "Appetizer": ["Indian", "North Indian", "South Indian", "East Indian", "West Indian", "Other Regional Indian", "Asian"],
        "Main Course": ["Indian", "North Indian", "South Indian", "East Indian", "West Indian", "Other Regional Indian", "Asian", "Mughlai", "Parsi"],
        "Lunch": ["Indian", "North Indian", "South Indian", "East Indian", "West Indian", "Other Regional Indian", "Asian", "Mughlai", "Parsi", "Indo Chinese", "Continental", "Middle Eastern"],
        "Dinner": ["Indian", "North Indian", "South Indian", "East Indian", "West Indian", "Other Regional Indian", "Asian", "Mughlai", "Parsi", "Fusion", "Middle Eastern"],
        "Dessert": ["Indian", "North Indian", "South Indian", "East Indian", "West Indian", "Other Regional Indian", "Asian", "Mughlai", "Parsi", "Fusion", "Middle Eastern"],
        "Breakfast": ["Indian", "North Indian", "South Indian", "East Indian", "West Indian", "Other Regional Indian", "Parsi", "Indo Chinese", "Fusion", "Continental"],
        "Snack": ["Indian", "North Indian", "South Indian", "East Indian", "West Indian", "Other Regional Indian", "Asian", "Parsi", "Fusion"],
    };

    const validDietsForCourseCuisine = {
        'Side Dish': {
      'Indian': ['Vegetarian', 'No Onion No Garlic (Sattvic)', 'Non Vegetarian', 'Eggetarian', 'Diabetic Friendly', 'Vegan'],
      'North Indian': ['Vegetarian', 'No Onion No Garlic (Sattvic)', 'Non Vegetarian', 'Diabetic Friendly'],
      'South Indian': ['Vegetarian', 'No Onion No Garlic (Sattvic)', 'Non Vegetarian', 'Eggetarian', 'Diabetic Friendly', 'Vegan'],
      'East Indian': ['Vegetarian', 'No Onion No Garlic (Sattvic)', 'Non Vegetarian', 'Diabetic Friendly'],
      'West Indian': ['Vegetarian', 'Non Vegetarian', 'Eggetarian', 'Diabetic Friendly'],
      'Other Regional Indian': ['Vegetarian', 'No Onion No Garlic (Sattvic)', 'Non Vegetarian'],
      'Asian': ['Vegetarian', 'Diabetic Friendly'],
      'Mughlai': ['Vegetarian', 'Non Vegetarian'],
      'Parsi': ['Vegetarian'],
      'Continental': ['Vegetarian'],
    },
    'Appetizer': {
      'Indian': ['Vegetarian', 'Non Vegetarian', 'Eggetarian', 'Diabetic Friendly', 'Vegan'],
      'North Indian': ['Vegetarian', 'Non Vegetarian'],
      'South Indian': ['Vegetarian', 'Non Vegetarian', 'Eggetarian'],
      'East Indian': ['Vegetarian'],
      'West Indian': ['Non Vegetarian'],
      'Other Regional Indian': ['Vegetarian'],
      'Asian': ['Non Vegetarian'],
    },
    'Main Course': {
      'Indian': ['Vegetarian','Diabetic Friendly'],
      'North Indian': ['Vegetarian', 'No Onion No Garlic (Sattvic)', 'Non Vegetarian', 'Diabetic Friendly'],
      'South Indian': ['Vegetarian', 'Non Vegetarian', 'Eggetarian', 'Diabetic Friendly'],
      'East Indian': ['Vegetarian', 'No Onion No Garlic (Sattvic)', 'Non Vegetarian', 'Diabetic Friendly'],
      'West Indian': ['Vegetarian', 'Non Vegetarian', 'Diabetic Friendly'],
      'Other Regional Indian': ['Vegetarian', 'Diabetic Friendly'],
      'Asian': ['Vegetarian'],
      'Mughlai': ['Vegetarian', 'Non Vegetarian'],
      'Parsi': ['Vegetarian'],
    },
    'Lunch': {
      'Indian': ['Vegetarian', 'No Onion No Garlic (Sattvic)', 'Non Vegetarian', 'Eggetarian', 'Diabetic Friendly', 'Vegan', 'Gluten Free'],
      'North Indian': ['Vegetarian', 'No Onion No Garlic (Sattvic)', 'Non Vegetarian', 'Eggetarian', 'Diabetic Friendly', 'Vegan', 'Gluten Free'],
      'South Indian': ['Vegetarian', 'No Onion No Garlic (Sattvic)', 'Non Vegetarian', 'Eggetarian', 'Diabetic Friendly', 'Gluten Free'],
      'East Indian': ['Vegetarian', 'Non Vegetarian', 'Eggetarian', 'Gluten Free'],
      'West Indian': ['Vegetarian', 'Non Vegetarian', 'Eggetarian', 'Diabetic Friendly'],
      'Other Regional Indian': ['Vegetarian', 'Eggetarian', 'Diabetic Friendly'],
      'Asian': ['Vegetarian', 'Eggetarian'],
      'Mughlai': ['Vegetarian', 'Non Vegetarian', 'Eggetarian'],
      'Parsi': ['Vegetarian'],
      'Indo Chinese': ['Vegetarian', 'Eggetarian'],
      'Continental': ['Vegetarian'],
      'Middle Eastern': ['Vegetarian', 'Eggetarian'],
    },
    'Dinner': {
      'Indian': ['Vegetarian', 'Non Vegetarian', 'Eggetarian', 'Diabetic Friendly', 'Vegan'],
      'North Indian': ['Vegetarian', 'No Onion No Garlic (Sattvic)', 'Non Vegetarian', 'Eggetarian', 'Diabetic Friendly', 'Vegan'],
      'South Indian': ['Vegetarian', 'Non Vegetarian', 'Eggetarian', 'Diabetic Friendly'],
      'East Indian': ['Vegetarian', 'No Onion No Garlic (Sattvic)', 'Non Vegetarian', 'Eggetarian', 'Diabetic Friendly'],
      'West Indian': ['Vegetarian', 'Non Vegetarian', 'Eggetarian'],
      'Other Regional Indian': ['Vegetarian', 'Non Vegetarian'],
      'Asian': ['Vegetarian', 'Non Vegetarian'],
      'Mughlai': ['Vegetarian', 'Non Vegetarian'],
      'Parsi': ['Vegetarian'],
      'Fusion': ['Eggetarian'],
      'Middle Eastern': ['Vegetarian'],
    },
    'Dessert': {
      'Indian': ['Vegetarian', 'Eggetarian', 'Vegan'],
      'North Indian': ['Vegetarian', 'No Onion No Garlic (Sattvic)', 'Gluten Free'],
      'South Indian': ['Vegetarian', 'Gluten Free'],
      'East Indian': ['Vegetarian'],
      'West Indian': ['Vegetarian', 'Eggetarian'],
      'Other Regional Indian': ['Vegetarian'],
      'Asian': ['Eggetarian'],
      'Mughlai': ['Vegetarian'],
      'Parsi': ['Eggetarian'],
      'Fusion': ['Vegetarian'],
      'Middle Eastern': ['Vegetarian'],
    },
    'Breakfast': {
      'Indian': ['Vegetarian', 'Eggetarian', 'Diabetic Friendly', 'Vegan', 'Gluten Free'],
      'North Indian': ['Vegetarian', 'Eggetarian', 'Diabetic Friendly', 'Vegan', 'Gluten Free'],
      'South Indian': ['Vegetarian', 'Eggetarian', 'Diabetic Friendly', 'Vegan', 'Gluten Free'],
      'East Indian': ['Vegetarian', 'Diabetic Friendly', 'Gluten Free'],
      'West Indian': ['No Onion No Garlic (Sattvic)', 'Diabetic Friendly'],
      'Other Regional Indian': ['Vegetarian'],
      'Parsi': ['Eggetarian'],
      'Indo Chinese': ['Vegetarian'],
      'Fusion': ['Vegetarian', 'Diabetic Friendly'],
      'Continental': ['Non Vegetarian', 'Eggetarian'],
    },
    'Snack': {
      'Indian': ['Vegetarian'],
      'North Indian': ['Vegetarian'],
      'South Indian': ['Vegetarian', 'Eggetarian', 'Diabetic Friendly', 'Gluten Free'],
      'East Indian': ['Vegetarian', 'Diabetic Friendly'],
      'West Indian': ['Vegetarian'],
      'Other Regional Indian': ['Vegetarian'],
      'Asian': ['Eggetarian'],
      'Parsi': ['Vegetarian'],
      'Fusion': ['Vegetarian'],
    },
    };

    // Populate course dropdown
    Object.keys(courseCuisines).forEach(course => {
        const option = document.createElement("option");
        option.value = course;
        option.textContent = course;
        courseSelect.appendChild(option);
    });

    // Populate cuisine dropdown based on selected course
    courseSelect.addEventListener("change", () => {
        const selectedCourse = courseSelect.value;
        cuisineSelect.innerHTML = '<option value="">Choose Cuisine</option>';
        dietSelect.innerHTML = '<option value="">Choose Diet</option>';
        findRecipesButton.disabled = true;

        if (selectedCourse) {
            const cuisines = courseCuisines[selectedCourse] || [];
            cuisines.forEach(cuisine => {
                const option = document.createElement("option");
                option.value = cuisine;
                option.textContent = cuisine;
                cuisineSelect.appendChild(option);
            });
        }
    });

    // Populate diet dropdown based on selected cuisine and course
    cuisineSelect.addEventListener("change", () => {
        const selectedCourse = courseSelect.value;
        const selectedCuisine = cuisineSelect.value;
        dietSelect.innerHTML = '<option value="">Choose Diet</option>';
        findRecipesButton.disabled = true;

        if (selectedCourse && selectedCuisine && validDietsForCourseCuisine[selectedCourse] && validDietsForCourseCuisine[selectedCourse][selectedCuisine]) {
            const diets = validDietsForCourseCuisine[selectedCourse][selectedCuisine];
            diets.forEach(diet => {
                const option = document.createElement("option");
                option.value = diet;
                option.textContent = diet;
                dietSelect.appendChild(option);
            });
        }
    });

    // Enable Find Recipes button after diet is selected
    dietSelect.addEventListener("change", () => {
        findRecipesButton.disabled = !dietSelect.value;
    });

    // Update displayed time when slider is moved
    cookingTimeSlider.addEventListener("input", () => {
        timeValueDisplay.textContent = cookingTimeSlider.value;
    });

    // Fetch and filter recipes when Find Recipes button is clicked
    findRecipesButton.addEventListener("click", () => {
        const selectedCourse = courseSelect.value;
        const selectedCuisine = cuisineSelect.value;
        const selectedDiet = dietSelect.value;
        const maxCookingTime = cookingTimeSlider.value;

        // Send AJAX request to PHP script
        fetch('fetch_recipes.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                course: selectedCourse,
                cuisine: selectedCuisine,
                diet: selectedDiet,
                maxCookingTime: maxCookingTime
            })
        })
        .then(response => response.json())
        .then(filteredRecipes => {
            if (filteredRecipes.length === 0) {
                recipeListContainer.innerHTML = "<p>No recipes found matching your criteria.</p>";
            } else {
                recipeListContainer.innerHTML = filteredRecipes.map(recipe => `
                    <div class="recipe">
                        <h3>${recipe.name}</h3>
                        <img src="${recipe.image}" alt="${recipe.name}" />
                        <p>${recipe.description}</p>
                        <p>Preparation Time: ${recipe.prepTime} minutes</p>
                    </div>
                `).join('');
            }
        })
        .catch(error => {
            console.error("Error fetching or processing recipes:", error);
            alert("Error loading recipes. Please try again.");
        });
    });
});
