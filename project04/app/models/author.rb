class Author < ActiveRecord::Base
	has_many :articles
	
	validates :username, presence: true, uniqueness: true
	has_secure_password
end
