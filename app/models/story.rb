class Story < ActiveRecord::Base
  attr_accessible :age, :agreeTerms, :author, :email, :gender, :latitude, :longitude, :narrative

  def as_json opts = {}
    {
      id: self.id,
      latitude: self.latitude,
      longitude: self.longitude,
    }
  end
end
