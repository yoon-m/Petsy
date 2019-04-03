class AddTitleToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :title, :string
  end
end
