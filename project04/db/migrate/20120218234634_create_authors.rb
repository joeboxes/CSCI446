class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
