class Product < ApplicationRecord
    validates :owner_id, :price, :description, :title, presence: true
    validates :title, uniqueness: { scope: :owner_id }
    validate :ensure_picture_attached

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :cart_items, dependent: :destroy,
        foreign_key: :product_id,
        class_name: :CartItem

    has_many_attached :pictures

    has_many :reviews, dependent: :destroy,
        foreign_key: :product_id,
        class_name: :Product

    def ensure_picture_attached
        unless self.pictures.attached?
            errors[:pictures] << "must be attached"
        end
    end

end