import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Recipe() {
  const params = useParams();
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = () => {
    const url = `/api/v1/recipes/${params.id}`;
    const fetchData = async () => {
      try {
          const response = await fetch(url);
          const data = await response.json();
          setRecipe(data);
        } catch (error) {
            console.log("error", error);
        }
    };
    fetchData();
  }
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
              {ingredientList}
            </ul>
          </div>
          <div className="col-sm-12 col-lg-7">
            <h5 className="mb-2">Preparation Instructions</h5>
            <div/>
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
