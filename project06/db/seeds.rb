# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# roles:
Role.delete_all
member = Role.create(# id: ?,
	name: 'Member',
	)
admin = Role.create(# id: ?,
	name: 'Admin',
	)
# users:
User.delete_all
richie = User.create!(# id: ?,
	username: 'richie',
	fname: 'richie',
	lname: 'zirbes',
	email: 'richie@gmail.com',
	icon: '',
	password: 'richie',
	password_confirmation: 'richie',
	role_id: admin.id
	)
howie = User.create!(# id: ?,
	username: 'Gaiminator',
	fname: 'Howie',
	lname: 'Gaimur',
	email: 'howie@gmail.com',
	icon: '',
	password: 'richie',
	password_confirmation: 'richie',
	role_id: member.id
	)
philip = User.create!(# id: ?,
	username: 'philip',
	fname: 'Philip',
	lname: 'Greenspun',
	email: 'philip@gmail.com',
	icon: '',
	password: 'richie',
	password_confirmation: 'richie',
	role_id: admin.id
	)
bob = User.create!(# id: ?,
	username: 'bobbob',
	fname: 'Bobbie',
	lname: 'Banker',
	email: 'Bob@gmail.com',
	icon: '',
	password: 'richie',
	password_confirmation: 'richie',
	role_id: member.id
	)
# games:
Game.delete_all
checkers = Game.create!( #id: ?,
	user_id: richie.id,
	title: 'Checkers',
	rating: 5,
	comment: 'The game checkers used to be known as \'CHONKERS\' except that I\'m full of shit.'
	)
poker = Game.create!( #id: ?,
	user_id: howie.id,
	title: 'Poker',
	rating: 1,
	comment: 'This game does not test the awesomness ability of a person whatsoever. Only bimbos and wankers play this.'
	)
solitaire = Game.create!( #id: ?,
	user_id: howie.id,
	title: 'Solitaire',
	rating: 3,
	comment: 'Most people are confused by this, but the correct spelling of this game is actually \'solitare\' without that BS i in there.'
	)
jenga = Game.create!( #id: ?,
	user_id: howie.id,
	title: 'Jenga',
	rating: 1,
	comment: 'Jenga is not a card game, therefore it sucks the nasty one.'
	)
uno = Game.create!( #id: ?,
	user_id: howie.id,
	title: 'Uno',
	rating: 5,
	comment: 'Those spaniards did something right (for once). This game has the classical fun-ness of drawling cards combined with the spectacular use of punching a douche in his stupid face.'
	)
chess = Game.create!( #id: ?,
	user_id: howie.id,
	title: 'Chess',
	rating: 4,
	comment: 'Although not a game of cards, this game I hate so much that I actually don\'t hate it so much.'
	)
proton = Game.create!( #id: ?,
	user_id: howie.id,
	title: 'Proton',
	rating: 5,
	comment: 'I invented this card game called proton that is so awesome I cannot share it with anyone.'
	)
war = Game.create!( #id: ?,
	user_id: bob.id,
	title: 'War',
	rating: 3,
	comment: 'I used to play this game tons as a kid. It\'s simple and exciting. However as time went on, less people wanted to play with me, as it takes forever to complete.'
	)





















