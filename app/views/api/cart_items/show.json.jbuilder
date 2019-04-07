json.set! @cartItem.id do
    json.extract! @cartItem, :id, :user_id, :product_id, :quantity
end