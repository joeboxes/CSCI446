class DropRanksAddRoles < ActiveRecord::Migration
	# http://api.rubyonrails.org/classes/ActiveRecord/Migration.html
  def up
	remove_column :users, :rank_id
	add_column :users, :role_id, :integer, :default => 0
	drop_table :ranks
    create_table :roles do |t|
      t.string :name
      t.timestamps
    end
  end

  def down
	# don't give a blip
  end
end
