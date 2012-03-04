class RemovePhotoFromAuthors < ActiveRecord::Migration
  def up
    remove_column :authors, :photo
  end

  def down
    add_column :authors, :photo, :string
  end
end
