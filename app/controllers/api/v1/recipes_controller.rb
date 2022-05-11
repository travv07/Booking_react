class Api::V1::RecipesController < ApplicationController
  before_action :recipe, only: [:show, :destroy]
  def index
    recipe = Recipe.all.order(created_at: :desc)
    render json: recipe
  end

  def create
    recipe = Recipe.new(recipe_params)
    if recipe.save
      render json: recipe
    else
      render json: { message: recipe.errors.full_messages }, status: :bad_request
    end
  end

  def show
    render json: recipe
  end

  def destroy
    recipe.destroy
    render json: { message: 'Recipe deleted!' }
  end

  private

  def recipe_params
    params.permit(:name, :image, :ingredients, :instruction)
  end

  def recipe
    @recipe = Recipe.find(params[:id])
  end
end
