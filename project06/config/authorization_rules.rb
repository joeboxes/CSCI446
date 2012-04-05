authorization do
	role :guest do # special unassigned role
		has_permission_on :games, :to => [:index, :show]
		has_permission_on :users, :to => [:index, :show]
		has_permission_on :user_sessions, :to => [:index, :show, :new, :create, :edit, :update, :destroy]
	end
	role :member do
		includes :guest
		has_permission_on [:users, :games], :to => [:index, :show, :new, :create, :edit, :update, :destroy]
		# ALL USERS? ALL GAMES?
	end
	
	role :admin do
		includes :member
		has_permission_on [:users, :roles, :games], :to => [:index, :show, :new, :create, :edit, :update, :destroy]
	end

end
