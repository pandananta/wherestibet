class Story < ActiveRecord::Base
  attr_accessible :age, :agreeTerms, :author, :email, :gender, :latitude, :longitude, :narrative, :city, :country, :ip
  validates_presence_of :age, :agreeTerms, :author, :email, :gender, :narrative
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
