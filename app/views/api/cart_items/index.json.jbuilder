json.cartItems do
  @cartItems.each do |cartItem|
    json.set! cartItem.id do
      json.extract! cartItem, :id, :user_id, :product_id, :quantity
      json.extract! cartItem.product, :title, :price
    end
  end
end