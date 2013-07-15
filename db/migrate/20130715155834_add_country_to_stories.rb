class AddCountryToStories < ActiveRecord::Migration
  def change
    add_column :stories, :country, :string
  end
end
