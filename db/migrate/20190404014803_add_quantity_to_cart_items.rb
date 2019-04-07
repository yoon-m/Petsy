class AddQuantityToCartItems < ActiveRecord::Migration[5.2]
  def change
    add_column :cart_items, :quantity, :integer
  end
end
