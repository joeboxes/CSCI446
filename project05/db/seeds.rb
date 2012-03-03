# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Author.delete_all
richie = Author.create(# id: 1,
	username: 'richie',
	password: 'bacon',
	password_confirmation: 'bacon',
	#password_digest: '$2a$10$xxdF9erFF9Ls8ZdsDiy.teeqIYdSQFz/n9PddRA0z7eYZqZCWFxn.',
	email: 'richie@gmail.com'
	)
john = Author.create(# id: 2,
	username: 'john',
	password: 'secret',
	password_confirmation: 'secret',
	#password_digest: '$2a$10$reQx0QHX0MqkTpRWewtx4.gWDKDW/rsbLxvdpRx2AWTZkA.psk1n',
	email: 'john@yahoo.com'
	)
ids = [richie.id, john.id]
Article.delete_all
(1..120).each do |i|
	Article.create( title: 'Lorem ipsum dolor sit amet, utamur mandamus mel ad',
	body:
	%{
		Lorem ipsum dolor sit amet, utamur mandamus mel ad, quo et nonumy noster tritani. Modus ubique nostrum id est. Pro ea iusto interesset. Vel ad luptatum facilisis.

Ne his evertitur philosophia. Altera blandit voluptatum pri no. Purto salutandi pri in, vim dico nemore concludaturque ea, hinc adolescens suscipiantur sed ei. Vis stet assum ad, prima solet id eum, accusam volutpat sea ut. Usu facer conceptam honestatis ne, nisl lorem discere et ius.

Debet maiorum indoctum has ea, ad ornatus liberavisse qui. Eius viderer impedit vis ad, te nam mandamus sapientem conceptam. Eu probo pertinacia mediocritatem est. Ut eros scaevola comprehensam pro. Melius diceret in mel. In pro verterem molestiae.

Exerci nominavi qui at. Eu nihil inimicus nec, ad probo mediocrem vis, no choro praesent assueverit quo. An scripta vivendo mei, ex purto detracto sit. Id mei adhuc antiopam, pri ocurreret philosophia ea. Sea constituam cotidieque an, eam laboramus assentior no, mollis temporibus ea mel.

Ut cibo animal suscipit sit, sed eu brute quodsi epicurei. Cum harum legere no, nobis suscipit dissentias qui no. Eu alii offendit eum. Eam vitae placerat tractatos at, ne sit causae molestie, ei partem aliquam cum.
	},
	edit_count: 0,
	#author_id: (i%2)+1
	author_id: ids[ (i%2) ]
	)
end
