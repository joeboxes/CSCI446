class CombineItemsInCart < ActiveRecord::Migration
  def up # replace multiple items for a single product in a cart with a single item
  	Cart.all.each do |cart| # count the number of each product in cart
  		sums = cart.line_items.group(:product_id).sum(:quantity)
  		sums.each do |product_id, quantity|
  			if quantity > 1
  				cart.line_items.where(product_id: product_id).delete_all # remove individual items
  				cart.line_items.create(product_id: product_id, quantity: quantity) # replace with individual item
  			end
  		end
  	end
  end
  def down # split items with quantity>1 into multiple items
  	LineItem.where("quantity>1").each do |line_item|
  		line_item.quantity.times do  # add individual items
  		LineItem.create cart_id: line_item.cart_id, product_id: line_item.product_id, quantity: 1
  	end
  	line_item.destroy # remove original item
  end
end
