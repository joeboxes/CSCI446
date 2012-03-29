class RemoveCyptedPasswordFromUser < ActiveRecord::Migration
  def up
    remove_column :users, :cypted_password
  end

  def down
    add_column :users, :cypted_password, :string
  end
end
