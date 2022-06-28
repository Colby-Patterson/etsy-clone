class Product < ApplicationRecord
  belongs_to :seller

  def self.for_sale
    Product.find_by_sql("SELECT p.id AS product_id, price, description, category, first_name,
    last_name, email, s.id AS seller_id 
    FROM products AS p
    INNER JOIN sellers AS s
    ON p.seller_id = s.id
    WHERE p.sold = false;")
  end
end
