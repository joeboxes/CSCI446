authorization do
	# visitors permissions
	role :guest do # special unassigned role
		has_permission_on :games, :to => [:index, :show] # index/show for main page
		has_permission_on :users, :to => [:new, :create] # create/new for registering
		has_permission_on :user_sessions, :to => [:index, :show, :new, :create, :edit, :update, :destroy]
	end
	# members permissions
	role :member do
		includes :guest # main page
		has_permission_on :member_games, :to => [:index, :show]
		has_permission_on :member_games, :to => [:edit, :update] do # :destroy
			if_attribute :user_id => is { user.id }
		end
		has_permission_on :member_users, :to => [:index, :show, :new, :create]
		has_permission_on :member_users, :to => [:edit, :update] do # :destroy
			if_attribute :id => is { user.id }
		end
		#has_permission_on :user_sessions, :to => [:index, :show, :new, :create, :edit, :update, :destroy]
	end
	# admin permissions
	role :admin do
		#includes :guest
		includes :member
		has_permission_on [:admin_users, :admin_roles, :admin_games], :to => [:index, :show, :new, :create, :edit, :update, :destroy]
		#has_permission_on :user_sessions, :to => [:index, :show, :new, :create, :edit, :update, :destroy]
	end

end
