class ApplicationController < ActionController::Base
 	protect_from_forgery
 	
 	# Override default behavior for testing on local machine 
	def remote_ip
		if request.remote_ip == '127.0.0.1'
			# Random remote address for testing on develop
			"#{rand(255)}.#{rand(255)}.#{rand(255)}.#{rand(255)}"
		else
			request.remote_ip
		end
	end
end
