# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Remove Exisiting
Product.delete_all
# Create
Product.create(title: 'Programming Ruby 1.9',
	description:
		%{<p>
			Ruby is so awesome, I can barely breathe
		</p>} ,
	image_url: 'ruby.jpg' ,
	price: 49.95)
#
Product.create(title: 'Testing101',
	description:
		%{<p>
			Test product
		</p>} ,
	image_url: 'test.jpg' ,
	price: 49.95)



