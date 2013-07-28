###
	All Executable Commands
###

define ['underscore'] , (_) ->

	class Commands

		# Predifined Commands
		cmds =
			intro 		: (n) -> alert "My name is #{n}"
			open_docs	: (a,b) -> alert "Opening docs for #{a} and #{b}"
			select_next	: -> Editor.$curEditor.selectMore()
			select_all	: -> Editor.$curEditor.selectAll()

		# Methods
		@exec 		: (cmd, args) ->
			return alert "Invalid Command!" if not cmds[cmd]
			cmds[cmd].apply null, args

		@extend		: (obj) -> _.extend cmds, obj

		@define 	: (name, fn) -> cmds[name] = fn


	window.cmd = Commands