class Api::CartItemsController < ApplicationController    
    def show
        @cartItem = CartItem.find_by(id: params[:id])

        if @cartItem
            render :show
        end
    end

    def index
        @current_user = current_user
        @cartItems = CartItem.where(user_id: @current_user.id)
        render :index
    end

    def create
        @cartItem = CartItem.new(item_params)
        if @cartItem.save
            render :show
        else
            render json: @cartItem.errors.full_messages, status: 422
        end
    end

    def destroy
        @cartItem = CartItem.find_by(id: params[:id])
        
        @cartItem.destroy

        render :show
    end

    private
    def item_params
        params.require(:cartItem).permit(:user_id, :product_id, :quantity)
    end

end
