class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :user_id
      t.string :title
      t.integer :rating
      t.text :comment

      t.timestamps
    end
  end
end
