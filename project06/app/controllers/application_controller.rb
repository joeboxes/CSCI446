class ApplicationController < ActionController::Base
	helper :all # ...added
	protect_from_forgery
#	:filter_parameter_logging :password # bakos
	# declarative logic
	before_filter { |c| Authorization.current_user = c.current_user }
	
	helper_method :current_user_session, :current_user #, :current_user_edit
	helper_method :rating_to_title, :get_user_role
	helper_method :is_user_member?, :is_user_admin?
	
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

	def find_user
		@user = current_user
	end

	def get_user_role usr
		Role.find(usr.role_id).name
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
#	def current_user_edit
#		if current_user
#			if is_user_admin?( current_user )
#				return User.find(params[:id])
#			end
#		end
#		return current_user
#	end
	def is_user_member? usr
		if usr
	    	return is_member?(Role.find(usr.role.id))
	    end
	    return false
	end
	def is_member? roller
	    return roller.name.downcase == "member"
	end
	def is_user_admin? usr
		if usr
	   		return is_admin?(Role.find(usr.role.id))
		end
		return false
	end
	def is_admin? roller
	    return roller.name.downcase == "admin"
	end
	def permission_denied
		flash[:error] = "You do not have access to view that material."
		redirect_to root_url
	end
end
