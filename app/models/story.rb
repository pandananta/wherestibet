class Story < ActiveRecord::Base
  attr_accessible :age, :agreeTerms, :author, :email, :gender, :latitude, :longitude, :narrative, :city, :country, :ip

  geocoded_by :ip 
	after_validation :geocode

  def as_json opts = {}
    {
      id: self.id,
      latitude: self.latitude,
      longitude: self.longitude,
    }
  end
end
