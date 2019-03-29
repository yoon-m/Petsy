json.set! @product.id do
    json.extract! @product, :id, :owner_id, :rating, :price, :description
end