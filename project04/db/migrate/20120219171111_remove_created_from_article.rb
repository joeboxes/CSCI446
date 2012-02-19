class RemoveCreatedFromArticle < ActiveRecord::Migration
  def up
    remove_column :articles, :created
  end

  def down
    add_column :articles, :created, :datetime
  end
end
