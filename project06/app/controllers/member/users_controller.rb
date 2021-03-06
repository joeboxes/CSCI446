class Member::UsersController < Member::MemberController
	
	before_filter :find_user, :only => [:show, :edit, :update, :destroy]

  filter_resource_access
  filter_access_to :all, :with_attribute => true
	
  # GET /users
  # GET /users.json
  def index
    @users = User.paginate page: params[:page], per_page: 10, order: 'lname'
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @users }
    end
  end
  # GET /users/1
  # GET /users/1.json
  def show
    @user = User.find(params[:id])
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @user }
    end
  end
  # GET /users/new
  # GET /users/new.json
  def new
    @user = User.new
# set default to member ---------------------------------------
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @user }
    end
  end
  # GET /users/1/edit
  def edit
    @user = current_user#User.find(params[:id])
    #@user = current_user_edit
  end
  # POST /users
  # POST /users.json
#  def create
#    @user = User.new(params[:user])
#	  #recaptcha
#  	if true #verify_recaptcha
#  	    respond_to do |format|
#  		 if @user.save
#  		   format.html { redirect_to [:member, root_url], notice: 'Registration Successful.' }
#  		   format.json { render json: @user, status: :created, location: @user }
#  		 else
#  		   format.html { render action: "new" }
#  		   format.json { render json: @user.errors, status: :unprocessable_entity }
#  		 end
#  	    end
#  	else
#  		flash[:error] = "invalid recaptcha."
#  		@user.errors.add( :base, 'invalid recaptcha')
#  		render :action => 'new'
#  	end
#  end

  # PUT /users/1
  # PUT /users/1.json
  def update
    #@user = current_user
    @user = User.find(params[:id])
    if true #verify_recaptcha
      respond_to do |format|
        if @user.update_attributes(params[:user])
          format.html { redirect_to [:member, @user], notice: 'Profile Updated.' }
          format.json { head :ok }
        else
          format.html { render action: "edit" }
          format.json { render json: @user.errors, status: :unprocessable_entity }
        end
      end
    else
      flash[:error] = "invalid recaptcha."
      @user.errors.add( :base, 'invalid recaptcha')
      render :action => 'new'
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user = User.find(params[:id])
    @user.destroy

    respond_to do |format|
      format.html { redirect_to [:member, users_url] }
      format.json { head :ok }
    end
  end
end
