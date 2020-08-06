import React,{useEffect,useState} from 'react';
import Recipe from './recipe'
import logo from './logo.svg';
import './App.css';

const App = () =>{
 const APP_ID="bfaba69a";
 const APP_KEY="1394ea35daf9b8d70848bd137ba53331";

 
 const [recipes,setRecipes] = useState([]);
 const [search,setSearch] = useState("");
 const [query,setQuery] = useState('')

 useEffect(()=>{
   getRecipes();
 }, [query])

 const getRecipes= async ()=>{
   const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
   const data= await response.json();
   setRecipes(data.hits)
   console.log(data.hits)

 }

 const updateSearch=e=>{
   setSearch(e.target.value);
   console.log(search)

 }

 const getSearch=e=>{
   e.preventDefault();
   setQuery(search)
   setSearch('');
 }

 

 
  return (
    <div className="App">
     <form className="search-form">
       <input className="search-item" type="text" value={search} onChange={updateSearch} />

       <button onClick={getSearch}  className="search-button" type="submit">Search</button>
     </form>
     <div className="recipes">
     {recipes.map(recipe=>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
          />
     ))}

     </div>
    
    </div>
  );
}

export default App;
