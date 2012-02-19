# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# add some authors to db
Author.delete_all
Author.create( username: 'richie', password: 'secret' )
Author.create( username: 'john', password: '123456' )

Article.delete_all
Article.create( title: 'First Article',
	body:
	%{
		Whataddup homies, This is an awesome article
	},
	edit_count: 4,
	author_id: 1
	)

#CREATE TABLE "articles" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar(255), "body" text, "created" datetime, "edit_count" integer, "author_id" integer, "created_at" datetime, "updated_at" datetime);




