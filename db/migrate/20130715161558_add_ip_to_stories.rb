class AddIpToStories < ActiveRecord::Migration
  def change
    add_column :stories, :ip, :string
  end
end
