class RemovePasswordSaltCap < ActiveRecord::Migration
  def up
    change_column :users, :password_salt, :string, :limit => nil
    change_column :users, :crypted_password, :string, :limit => nil
  end

  def down
  end
end


