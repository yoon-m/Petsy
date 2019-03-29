class Product < ApplicationRecord
    validates :rating, :owner_id, :price, :description, presence: true
    validates_inclusion_of :rating, :in => 0..5

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

end