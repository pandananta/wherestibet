class Story < ActiveRecord::Base
  attr_accessible :age, :agreeTerms, :author, :email, :gender, :latitude, :longitude, :narrative
end
