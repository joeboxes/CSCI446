class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :rank_id
      t.string :username
      t.string :fname
      t.string :lname
      t.string :email
      t.string :password_digest
      t.string :icon

      t.timestamps
    end
  end
end
