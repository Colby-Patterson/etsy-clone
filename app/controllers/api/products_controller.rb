class Api::ProductsController < ApplicationController
  def index
    render json: Product.for_sale
  end
end
