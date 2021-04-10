import React, {useState, useEffect} from 'react'
import Recipe from './Recipe'
import './Food.css'






const Food = () => {

const APP_ID = '19393b59';
const APP_KEY = '26a4cf87bb69b502ac2dff0c7f02bd3d';

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('banana')

    useEffect(()=>{
        getRecipes()
    }, [])
    
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        setRecipes(data.hits)
        console.log(data.hits)
    }


    const onChange = (e) =>{
        setSearch(e.target.value)
    }



    const getSubmit = (e) =>{
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }


    return (
        <>
            <div className="App">
                <form onSubmit={getSubmit} className="search-form" >
                    <input 
                    className="search-bar" 
                    type='text' 
                    value={search} 
                    placeholder="Search Food"
                    autoComplete="off" 
                    onChange={onChange}/>
                    <button className="search-button" type='submit'>Search</button>
                </form>
                <div className='food-recipes'>
                {recipes.map(recipe => (
                    <Recipe 
                    key={recipe.recipe.label}
                    title={recipe.recipe.label} 
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}/>
                ))}
                </div>
                <h3 className="footer">Developed By &#10084;&#65039; Developer.OmarFaruk</h3>
            </div>
        </>
    )
}

export default Food
