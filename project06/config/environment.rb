# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
Gamez::Application.initialize!

# TIMES:
	Time::DATE_FORMATS[:time_format_main] = "%A, %b. %d %Y"