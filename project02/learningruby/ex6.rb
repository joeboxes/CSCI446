# joe is a name
name1 = "Joe"
# mary is also a name
name2 = "Mary"
# write some lame sentence
puts "Hello %s, where is %s?" % [name1, name2]
# write the same sentence in a different way
puts "Hello #{name1}, where is #{name2}?"

# place constants into a string
x = "There are #{10} types of people."
# more variables for later output
binary = "binary"
# don't is a contraction of do not
do_not = "don't"
# store the output in y
y = "Those who know #{binary} and those who #{do_not}."
# output the variables in a string
puts x
# line 2
puts y
# output in a different way
puts "I said: #{x}."
# please kill me
puts "I also said: '#{y}'."
# this guy is great
hilarious = false
# boolean output
joke_evaluation = "Isn't that joke so funny?! #{hilarious}"
# last damn line
puts joke_evaluation
# oh wait, there are two more
w = "This is the left side of..."
# another saver
e = "a string with a right side."
# finally
puts w + e
# + is string concatenation
