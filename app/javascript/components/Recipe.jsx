import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

export default function Recipe() {
  const params = useParams();
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = () => {
    axios.get(`/api/v1/recipes/${params.id}`).then((response) => {
      setRecipe(response.data);
    });
  }

  const allIngredient = (recipe?.ingredients?.split(",") || []).map((ingredient, index) => (
    <li key={index} className="list-group-item">
      {ingredient}
    </li>
  ));

  return (
    <div className="">
      <div className="hero position-relative d-flex align-items-center justify-content-center">
        <img
          src={recipe.image}
          alt={`${recipe.name} image`}
          className="img-fluid position-absolute"
        />
        <div className="overlay bg-dark position-absolute" />
        <h1 className="display-4 position-relative text-white">
          {recipe.name}
        </h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <ul className="list-group">
              <h5 className="mb-2">Ingredients</h5>
              {recipe?.ingredients?.length > 0 ? allIngredient : ''}
            </ul>
          </div>
          <div className="col-sm-12 col-lg-7">
            <h5 className="mb-2">Preparation Instructions</h5>

          </div>
          <div className="col-sm-12 col-lg-2">
            <button type="button" className="btn btn-danger">
              Delete Recipe
            </button>
          </div>
        </div>
        <Link to="/recipes" className="btn btn-link">
          Back to recipes
        </Link>
      </div>
    </div>
  );
}
