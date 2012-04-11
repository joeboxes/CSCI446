class UserSessionsController < ApplicationController
	#declarative authorization
	filter_resource_access

  def new
    @user_session = UserSession.new
    #redirect_to login_path
  end

  def create
    @user_session = UserSession.new(params[:user_session])
      if @user_session.save
        @usr = UserSession.find.user # User.find @user_session # find_user #current_user # UserSession.find current_user
        if ( is_user_member?(@usr) || is_user_admin?(@usr) )
          redirect_to :member_root
          #  elsif is_user_admin? @usr
          #  redirect_to :admin_root
        else
		      redirect_to root_url
        end
      else
		    render :action => 'new' # redirects to users_session, NOT login
        #redirect_to login_path
      end
  end

  def destroy
    @user_session = UserSession.find #current_user
    @user_session.destroy
		flash[:notice] = 'Logged Out.'
		redirect_to root_url
  end
end
