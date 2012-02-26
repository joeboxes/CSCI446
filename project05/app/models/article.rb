class Article < ActiveRecord::Base
	validates :title, presence: true
	validates :body, presence: true
	validates :author_id, presence: true
end

