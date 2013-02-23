class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :author
      t.integer :gender
      t.integer :age
      t.string :email
      t.boolean :agreeTerms
      t.text :narrative
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
