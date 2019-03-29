class Product < ApplicationRecord
    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

end
