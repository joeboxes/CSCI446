class AddAuthlogicstuffToUser < ActiveRecord::Migration
  def change
    add_column :users, :cypted_password, :string
    add_column :users, :password_salt, :string
    add_column :users, :persistence_token, :string
  end
end
