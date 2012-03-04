class Author < ActiveRecord::Base
	validates :username, presence: true, uniqueness: true
		validate :no_author_named_pat
	validates :email, presence: true
	validates :password, presence: true
	validates :password_confirmation, presence: true
	
	has_secure_password

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
