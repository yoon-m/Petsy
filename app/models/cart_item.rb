class CartItem < ApplicationRecord
    validates :quantity, presence: true
    validates :product_id, uniqueness: { scope: :user_id }

    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id
    
    belongs_to :product,
        class_name: :Product,
        foreign_key: :product_id
end