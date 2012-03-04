class Author < ActiveRecord::Base
	has_many :articles, dependent: :destroy

	validates :username, presence: true, uniqueness: true
		validate :no_author_named_pat
	validates :email, presence: true, uniqueness: true
	validates :password, presence: true
	validates :password_confirmation, presence: true
	has_secure_password

	# paperclip related:
	has_attached_file :photo, :styles => { :small => "150x150>" },
						:url => "/assets/images/authors/:id_:style_:basename.:extension",
						:path => ":rails_root/public/assets/images/authors/:id_:style_:basename.:extension"

#	validates_attachment_presence :photo
	validates_attachment_size :photo, :less_than => 1.megabytes
	validates_attachment_content_type :photo, :content_type => ["image/gif","image/jpeg","image/jpg","image/png"]
	private
		
		def increment_count_on_update
			self.update_count += 1 unless self.new_record?
		end

		def no_author_named_pat
			if username.downcase.include? 'pat'
				self.errors.add :username, "No authors named Pat"
			end
		end
end
