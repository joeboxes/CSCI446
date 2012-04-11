class Member::MemberController < ApplicationController
#	protect_from_forgery
	before_filter :require_user
	
	filter_access_to :all

	def require_user
		unless current_user
			flash[:notice] = "You must be logged in to access admin"
			redirect_to :member_root
			return false
		end
	end
	
	def index
		flash[:notice] = "member index"
	end
	
	def permission_denied
		flash[:error] = "You do not have access to view that material."
		redirect_to :member_root #games
	end
end
