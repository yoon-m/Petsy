class Review < ApplicationRecord
    validates :author_id, :product_id, :title, :body, :rating, presence: true
    validates_inclusion_of :rating, :in => 1..5
    validates :product_id, uniqueness: { scope: :author_id }
    validates :body, length: {maximum: 300}

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id

    belongs_to :product,
        class_name: :Product,
        foreign_key: :product_id
        
    
end