_ = require 'underscore'	
	module.exports.init = ->
	    botData.online = []
	    addUser = (Moscon) ->

	        (/onlinelist/.test msg.text) && !msg.old
    ,
	    (event) ->
	        botCommand.say JSON.stringify botData.online
        return
