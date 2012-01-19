# comment
cars = 100
# comment
space_in_a_car = 4.0
# comment
drivers = 30
# comment
passengers = 90
# comment
cars_not_driven = cars - drivers
# comment
cars_driven = drivers
# comment
carpool_capacity = cars_driven * space_in_a_car
# comment
average_passengers_per_car = passengers / cars_driven

puts "There are #{cars} cars available."
puts "There are only #{drivers} drivers available."
puts "There will be #{cars_not_driven} empty cars today."
puts "We can transport #{carpool_capacity} people today."
puts "We have #{passengers} passengers to carpool today."
puts "We need to put about #{average_passengers_per_car} in each car."

