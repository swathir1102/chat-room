class User < ApplicationRecord

  validates_uniqueness_of :username

  def self.generate
    adjectives = ['Ancient', 'Bravo', 'Creative', 'Dangerous', 'Effective', 'Flying', 'Gilded']
    nouns = ['Highway', 'Intern', 'JackHammer', 'Lion', 'Master']
    number = rand.to_s[2..4]
    username = "#{adjectives.sample}-#{nouns.sample}-#{number}"
    create(username: username)

  end
end
