class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.float :price
      t.text :description
      t.string :category
      t.boolean :sold
      t.belongs_to :seller, null: false, foreign_key: true

      t.timestamps
    end
  end
end
