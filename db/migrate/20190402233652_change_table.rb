class ChangeTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :cart_items
    
    create_table :cart_items do |t|
      t.integer :user_id, null: false
      t.integer :product_id
      t.timestamps
    end

    add_index :cart_items, :user_id
    add_index :cart_items, :product_id
  end
end
