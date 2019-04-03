json.set! @cartItem.user.id do
    json.extract! @cartItem, :id, :user_id, :product_id
end