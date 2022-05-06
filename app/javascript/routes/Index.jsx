import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import Recipe from "../components/Recipe";

export default (
  <Router >
    <Routes>
      <Route path="/" exact element={ <Home/> }></Route>
      <Route path="/recipes" exact element={<Recipes/>} />
      <Route path="/recipes/:id" element={<Recipe/>} />
    </Routes>
  </Router>
);
