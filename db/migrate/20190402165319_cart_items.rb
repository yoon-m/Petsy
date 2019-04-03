class CartItems < ActiveRecord::Migration[5.2]
    def change
    create_table :cartItems do |t|
      t.integer :user_id, null: false
      t.integer :product_id, null: false
      t.timestamps
    end

    add_index :cartItems, :user_id
    add_index :cartItems, :product_id
    drop_table :carts
  end
end
