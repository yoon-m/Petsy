json.set! @product.id do
    json.extract! @product, :id, :owner_id, :price, :description, :title
    json.extract! @product.owner, :first_name, :email
end