json.set! @review.id do
    json.extract! @review, :id, :author_id, :product_id, :title, :body, :rating
end