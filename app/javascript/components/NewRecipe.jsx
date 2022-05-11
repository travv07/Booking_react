import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function NewRecipe() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instruction, setInstruction] = useState('');
  const onNameChange = e => setName(e.target.value);
  const onIngredientsChange = e => setIngredients(e.target.value)
  const onInstructionChange = e => setInstruction(e.target.value)

  const handleSubmit = e => {
    e.preventDefault();
    const value_params = { name, ingredients, instruction };
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const headers = {
      'X-CSRF-Token': token,
      'Content-Type': 'application/json'
    };
    axios.post('/api/v1/recipes', value_params, headers)
         .then((response) => {
            window.location = '/recipes';
          })
          .catch(error => {
            const showErrors = (errors) => {
              if (Array.isArray(errors)) {
                errors?.forEach((error) => {
                  alert(error);
                });
              } else {
                alert(errors);
              }
            }
            let errorMessages = error?.response?.data?.message;
            if (errorMessages) {
              showErrors(errorMessages);
            }
          });
  };
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-sm-12 col-lg-6 offset-lg-3'>
          <h1 className='font-weight-normal mb-5'>
            Add a new recipe to our awesome recipe collection.
          </h1>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='recipeName'>Recipe name</label>
              <input
                type='text'
                name='name'
                id='recipeName'
                className='form-control'
                onChange={onNameChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='recipeIngredients'>Ingredients</label>
              <input
                type='text'
                name='ingredients'
                id='recipeIngredients'
                className='form-control'
                required
                onChange={onIngredientsChange}
              />
              <small id='ingredientsHelp' className='form-text text-muted'>
                Separate each ingredient with a comma.
              </small>
            </div>
            <label htmlFor='instruction'>Preparation Instructions</label>
            <textarea
              className='form-control'
              id='instruction'
              name='instruction'
              rows='5'
              required
              onChange={onInstructionChange}
            />
            <button type='submit' className='btn custom-button mt-3'>
              Create Recipe
            </button>
            <Link to='/recipes' className='btn btn-link mt-3'>
              Back to recipes
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
