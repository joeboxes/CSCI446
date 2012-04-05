class ApplicationController < ActionController::Base
	helper :all # ...added
	protect_from_forgery
#	:filter_parameter_logging :password # bakos
	# declarative logic
	before_filter { |c| Authorization.current_user = c.current_user }
	
	helper_method :current_user_session, :current_user
	helper_method :rating_to_title
	
	def rating_to_title (rate)
		if rate==5
			return 'Awesome'
		elsif rate==4
			return 'Leetness'
		elsif rate==3
			return 'Salright'
		elsif rate==2
			return 'Ehhhhhh'
		elsif rate==1
			return 'Lame'
		end
		return 
	end
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
		flash[:error] = "You do not have access to view that material."
		redirect_to root_url
	end
end
