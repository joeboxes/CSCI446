# yippie kay yay
class Player
	@@healthMax = 20
	@@health = 21
	@@dir = :backward
	@@hiding = false
	def play_turn(warrior)
		@wtf = warrior.feel @@dir
		@isACaptive = @wtf.to_s=="Captive"
		@isANothing = @wtf.to_s=="nothing"
		@isAWall = @wtf.to_s=="wall"
		#puts @wtf.to_s
		#puts @wtf.class
		#puts @isAWall
		if @isAWall
			if warrior.health<20
				warrior.rest!
			else
				flipDirection
				warrior.walk! @@dir
				@@hiding = false
			end
		elsif @isACaptive
			warrior.rescue! @@dir
		elsif @@hiding
			warrior.walk! @@dir
		else
			if warrior.health<6 || (!(@@health>warrior.health) && warrior.health<20 && warrior.feel.empty?)
				@@hiding = true
				flipDirection
				warrior.walk! @@dir
			else
				if !(warrior.feel @@dir).empty?
					warrior.attack! @@dir
				else
					warrior.walk! @@dir
				end
			end
			@@health = warrior.health
		end
		puts "HEALTH #{@@health}"
	end
	def flipDirection
		if @@dir==:forward
			@@dir = :backward
		else
			@@dir = :forward
		end
	end
end
# .pivot
# .rest
# .health
# .rest!
# .feel
# .feel.empty?
# .attack!
# .walk!
# .rescue!
# 
# 
# warrior.feel(:backward).wall?.
# 
# 
#		puts @wtf
#		puts @wtf.to_s
#		puts @wtf.kind_of?(Captive)
#		puts @wtf.is_a?(Captive)
#		puts @wtf.type_of? Captive
