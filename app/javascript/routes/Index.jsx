import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import Recipe from "../components/Recipe";
import NewRecipe from "../components/NewRecipe";

export default (
  <Router >
    <Routes>
      <Route path="/" exact element={ <Home/> }></Route>
      <Route path="/recipes" exact element={<Recipes/>} />
      <Route path="/recipes/:id" exact element={<Recipe/>} />
      <Route path="/recipes/new" exact element={<NewRecipe/>} />
    </Routes>
  </Router>
);
