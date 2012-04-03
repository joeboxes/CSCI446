authorization do
	role :guest do # special unassigned role
		has_permission_on :games, :to => [:index, :show]
		has_permission_on :user_sessions, :to => [:index, :show, :new, :create, :edit, :update, :destroy]
	end
	role :admin do
		# includes :guest
		has_permission_on [:users, :roles, :games], :to => [:index, :show, :new, :create, :edit, :update, :destroy]
		has_permission_on :user_sessions, :to => [:index, :show, :new, :create, :edit, :update, :destroy]
	end
	role :user do
		# includes :guest
		has_permission_on [:users, :roles, :games], :to => [:index, :show, :new, :create, :edit, :update, :destroy]
	end
	
end
