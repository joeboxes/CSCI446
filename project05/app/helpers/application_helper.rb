module ApplicationHelper
	def get_random_slogan
		random_slogans = "... with a name .com hipsters will love!",
						"... what's Articl in Spanish anyway?",
						"... my cousin works for Bit.ly",
						"... not just for the country of Spain"
		random_slogans[rand(random_slogans.length)]
	end


	def get_icon_mail
		image_tag('icons/email.png')
	end
	def get_icon_show
		image_tag('icons/magnifier.png')
	end
	def get_icon_edit
		image_tag('icons/cog.png')
	end
	def get_icon_delete
		image_tag('icons/cancel.png')
	end
end
