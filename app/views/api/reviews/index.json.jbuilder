@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :author_id, :product_id, :title, :body, :rating
        json.extract! review.author, :first_name
    end
end