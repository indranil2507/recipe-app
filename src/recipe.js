import React from 'react';
import './recipe.css';


const Recipe=({title,calories,image,ingredients})=>{
    return(
        <div className="recipe">
        <h1 className="title">{title}</h1>
        <div className="text">
        <ol>
            {ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))}
        </ol>
        
        </div>
        <div className="calories">
        <h5>Cal:</h5><p>{calories}</p>
        </div>
        <div className="imagediv">
        <img className="image" src={image} alt=""/>
        </div>
        
        
        </div>
        
    );
}
export default Recipe;