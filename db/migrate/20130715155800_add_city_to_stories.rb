class AddCityToStories < ActiveRecord::Migration
  def change
    add_column :stories, :city, :string
  end
end
