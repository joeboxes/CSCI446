class User < ActiveRecord::Base
	# design
	belongs_to :role
	has_many :games, dependent: :destroy
	# authlogic
	acts_as_authentic
	# authlogic takes care of password

	# validation
	validates :username, presence: true, uniqueness: true,
		:length => {:minimum => 6, :maximum => 20}

	# paperclip icon
	has_attached_file :icon, :styles => { :small => "100x100>" },
		:url => "assets/images/users/:id_:style_:basename.:extension",
		:path => ":rails_root/public/assets/images/users/:id_:style_:basename.:extension"
	validates_attachment_size :icon, :less_than => 0.5.megabytes
	validates_attachment_content_type :icon, :content_type => ["image/gif","image/jpeg","image/jpg","image/png"]
#	validates_attachment_presence :icon
	
	def role_symbols
		myrole = Role.find(role_id)
		[myrole.name.underscore.to_sym]
		# [myrole.name.downcase.to_sym] # bakos
	end
end
