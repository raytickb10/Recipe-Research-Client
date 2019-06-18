import React from 'react';

import { Link } from "react-router-dom";

const Recipes = props => (
  <div className="container">
    <div className="row">
    { props.recipes && props.recipes.map((recipe) => {
      return (
        <div key={recipe.title} className="col-md-4" >
          <div className="recipes__box">
            <img 
              className="recipe__box-img" 
              src={recipe.image_url} 
              alt={recipe.title}/>
              <div className="recipe__text">
                <h5 className="recipes__title">
                  { recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }
                </h5>
                <p className="recipes__subtitle">Publisher: <span>
                  { recipe.publisher }
                </span></p>
              </div>
              {value}
          </div>
        </div>
      );
    })}
    </div>
  </div>
);

$(function(){
  if(localStorage.getItem('authToken') !== null){  
          let value = <Link to={{ 
                  pathname: `/recipe/${recipe.recipe_id}`,
                  state: { recipe: recipe.title }
              }}>
                <button className="recipe_buttons">View Recipe</button>
               </Link>
            }
else{value = <p>this is working</p>}
});

export default Recipes;
