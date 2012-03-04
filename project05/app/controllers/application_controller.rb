class ApplicationController < ActionController::Base
  protect_from_forgery

  random_slogans = "... with a name .com hipsters will love!",
				"... what's Articl in Spanish anyway?",
				"... my cousin works for Bit.ly",
				"... not just for the country of Spain"
  def get_random_slogan
    random_slogans[rand(random_slogans.length)]
  end
end
