class ChangeProductTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :products
    
    create_table "products", force: :cascade do |t|
      t.integer "owner_id", null: false
      t.string "title", null: false
      t.float "price", null: false
      t.string "description", null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.index ["owner_id"], name: "index_products_on_owner_id"
    end
  end
end
