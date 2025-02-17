import { useState } from 'react';
import CustomImage from "./CustomImage";

export default function RecipeCard({ recipe }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxWords = 20;
    const instruction = recipe.instruction || "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    const words = instruction.split(' ');
    const shortInstruction = words.slice(0, maxWords).join(' ');

    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">
                    {isExpanded ? instruction : shortInstruction}
                    {words.length > maxWords && (
                        <span onClick={() => setIsExpanded(!isExpanded)} className="read-more">
                            {isExpanded ? " Read Less" : "... Read More"}
                        </span>
                    )}
                </p>
                <a className="view-btn" href={recipe.youtube}>VIEW RECIPE</a>
            </div>
        </div>
    );
}
