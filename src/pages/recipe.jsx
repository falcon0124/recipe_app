// src/pages/Recipes.js
import React, { useState, useEffect } from 'react';
import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";
import axios from 'axios';

export default function Recipes() {
    const [searchTerm, setSearchTerm] = useState('chicken');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(
                    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
                );
                setRecipes(response.data.meals || []);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, [searchTerm]);

    return (
        <div>
            <PreviousSearches setSearchTerm={setSearchTerm} />
            <div className="recipes-container">
                {recipes.length > 0 ? (
                    recipes.map((recipe, index) => (
                        <RecipeCard 
                            key={index} 
                            recipe={{
                                title: recipe.strMeal,
                                image: recipe.strMealThumb,
                                instruction: recipe.strInstructions,
                                youtube: recipe.strYoutube
                            }} 
                        />
                    ))
                ) : (
                    <p>No recipes found. Try searching something else!</p>
                )}
            </div>
        </div>
    );
}
