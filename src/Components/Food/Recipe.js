import React from 'react'
import './Food.css'
const Recipe = (props) => {
    return (
        <>
            <div className="recipe">
                <h1 className="recipe title">{props.title}</h1>
                <ol>
                    {props.ingredients.map(ingredient=>(
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
                <p className="calories">Calories : {props.calories}</p>
                <img className="image" src={props.image} alt=''/>
            </div>
        </>
    )
}

export default Recipe
