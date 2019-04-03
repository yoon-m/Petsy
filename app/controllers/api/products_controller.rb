class Api::ProductsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        @products = Product.all
        render :index
    end

    def show
        @product = Product.find_by(id: params[:id])
        if @product
            render :show
        end
    end

    def create
        @product = Product.new(product_params)
        @product.owner_id = current_user.id
        if @product.save
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    private
    def product_params
        params.require(:product).permit(:title, :owner_id, :price, :description)
    end
end
