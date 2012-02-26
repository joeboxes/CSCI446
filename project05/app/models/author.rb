class Author < ActiveRecord::Base
	validates :username, presence: true, uniqueness: true, :exclusion => { :in => "Pat" }
	validates :password, presence: true
	validates :password_confirmation, presence: true
	
	has_secure_password
end
