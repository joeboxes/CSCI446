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
		    redirect_to root_url
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
