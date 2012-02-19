class Article < ActiveRecord::Base
	belongs_to :author
	
	validates :title, presence: true
	validates :body, presence: true
#	validates :
end
