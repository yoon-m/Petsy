json.cartItems do
  @cartItems.each do |item|
    json.set! item.id do
      json.extract! item, :id, :user_id, :product_id
      json.extract! item.product, :title, :price
    end
  end
end