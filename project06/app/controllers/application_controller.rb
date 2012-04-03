class ApplicationController < ActionController::Base
	helper :all # ...added
	protect_from_forgery
	# declarative logic
	before_filter { |c| Authorization.current_user = c.current_user }
	
	helper_method :current_user
	
#	private
# current user helper 
	def current_user_session
		return @current_user_session if defined?(@current_user_session)
		@current_user_session = UserSession.find
	end
	def current_user
		return @current_user if defined?(@current_user)
		@current_user = current_user_session && @current_user_session.record
	end
	
	
	def permission_denied
		flash[:error] = "You are not allowed to access this page..."
		redirect_to root_url
	end
end
