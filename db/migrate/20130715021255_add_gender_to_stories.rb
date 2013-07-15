class AddGenderToStories < ActiveRecord::Migration
  def change
    add_column :stories, :gender, :string
  end
end
