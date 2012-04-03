class User < ActiveRecord::Base
	# design
	belongs_to :role
	has_many :games, dependent: :destroy
	# authlogic
	acts_as_authentic
#	acts_as_authentic  do |c|
#	   c.validate_password_field = false
#	end
	#
	# conflicts with authlogic:
	# has_secure_password
	# before_save :encrypt_password
	
	# validation
	validates :username, presence: true, uniqueness: true,
		:length => {:minimum => 6, :maximum => 20}
	# validates_existance_and_...of
	validates :password, presence: true, :length => {:minimum => 6, :maximum => 20}
	validates :password_confirmation, presence: true
	
	# paperclip icon
	has_attached_file :icon, :styles => { :small => "100x100>" },
		:url => "assets/images/users/:id_:style_:basename.:extension",
		:path => ":rails_root/public/assets/images/users/:id_:style_:basename.:extension"
	validates_attachment_size :icon, :less_than => 0.5.megabytes
	validates_attachment_content_type :icon, :content_type => ["image/gif","image/jpeg","image/jpg","image/png"]
#	validates_attachment_presence :icon
	# recaptcha
	
	# 
	# roles:
	def role_symbols
		#roles.map do |role|
		#	role.name.underscore.to_sym
		#end
		myrole = Role.find(role_id)
		"ROLE: #{myrole}"
		[myrole.name.underscore.to_sym]
	end
end