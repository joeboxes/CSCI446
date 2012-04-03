# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# roles:
Role.delete_all
user = Role.create(# id: 0,
	name: 'User',
	)
admin = Role.create(# id: 1,
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
richie = User.create!(# id: ?,
	username: 'Gaiminator',
	fname: 'Howie',
	lname: 'Gaimur',
	email: 'howie@gmail.com',
	icon: '',
	password: 'richie',
	password_confirmation: 'richie',
	role_id: user.id
	)
richie = User.create!(# id: ?,
	username: 'philip',
	fname: 'Philip',
	lname: 'Greenspun',
	email: 'philip@gmail.com',
	icon: '',
	password: 'richie',
	password_confirmation: 'richie',
	role_id: admin.id
	)
# games:





