class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)
        @review.author_id = current_user.id

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show
        @review = Review.find_by(id: params[:id])
        render :show
    end

    def index
        @reviews = Review.where(product_id: params[:productId])
        render :index
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        @review.destroy
        render :show
    end

    private
    def review_params
        params.require(:review).permit(:author_id, :product_id, :title, :body, :rating)
    end
end