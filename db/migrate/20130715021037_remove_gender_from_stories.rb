class RemoveGenderFromStories < ActiveRecord::Migration
  def up
    remove_column :stories, :gender
  end

  def down
    add_column :stories, :gender, :integer
  end
end
