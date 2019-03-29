class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.float :rating, null: false
      t.integer :owner_id, null: false
      t.float :price, null: false
      t.string :description, null: false
      t.timestamps
    end
    add_index :products, :owner_id
  end
end
