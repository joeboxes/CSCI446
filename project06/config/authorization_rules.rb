authorization do
	# visitors permissions
	role :guest do # special unassigned role
		has_permission_on :games, :to => [:index, :show]
		has_permission_on :users, :to => [:index, :show]
		has_permission_on :user_sessions, :to => [:index, :show, :new, :create, :edit, :update, :destroy]
	end
	# members permissions
	role :member do
		includes :guest
		has_permission_on :games, :to => [:index, :show, :new, :create]
		has_permission_on :games, :to => [:edit, :update] do # :destroy
			if_attribute :user_id => is { user.id }
		end
		has_permission_on :users, :to => [:index, :show, :new, :create]
		has_permission_on :users, :to => [:edit, :update] do # :destroy
			if_attribute :user => is { user }
		end
	end
	# admin permissions
	role :admin do
		includes :member
		has_permission_on [:users, :roles, :games], :to => [:index, :show, :new, :create, :edit, :update, :destroy]
	end

end
