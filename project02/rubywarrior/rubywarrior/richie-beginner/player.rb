# yippie kay yay
class Player
	@@health = 21
	def play_turn(warrior)
#		puts "HEALTH: '#{@@health} <= #{warrior.health}"
		#puts "FEEL: '#{ (warrior.feel).kind_of? Captive }' "
		@wtf = (warrior.feel)
#		puts @wtf
#		puts @wtf.to_s
#		puts @wtf.kind_of?(Captive)
#		puts @wtf.is_a?(Captive)
#		puts @wtf.type_of? Captive
		@isACaptive = @wtf.to_s=="Captive"
		puts @wtf.class
		if @isACaptive
			warrior.rescue!
		else
			if !(@@health>warrior.health) && warrior.health<20 && warrior.feel.empty?
				warrior.rest!
			else
				if !warrior.feel.empty?
					warrior.attack!
				else
					warrior.walk!
				end
			end
			@@health = warrior.health
		end
		puts "HEALTH #{@@health}"
	end
end
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
# 
