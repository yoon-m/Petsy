class Api::ProductsController < ApplicationController
    def index
        if (!params[:searchValue] || params[:searchValue] === '')
            @products = Product.with_attached_pictures.all
        else
            @products = Product.with_attached_pictures.where("title ILIKE ?", "#{params[:searchValue]}%")
        end
        
        render :index
    end

    def show
        @product = Product.with_attached_pictures.find_by(id: params[:id])
        if @product
            render :show
        end
    end

    def create
        product = Product.new(product_params)
        product.owner_id = current_user.id

        if product.save
            render :show
        else
            render json: product.errors.full_messages, status: 422
        end
    end

    private
    def product_params
        params.require(:product).permit(:title, :owner_id, :price, :description, pictures: [])
    end
end
