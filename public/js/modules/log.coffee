## Logging Library for Developerment Mode


define ->

	nativeConsole = window.console

	class Logging

		history = []

		autoName = 0;

		groupName = []

		# Log whatever
		constructor : ->
			history.push arguments
			nativeConsole.log.apply nativeConsole, arguments

		# Log Arguments of caller function
		@args : -> log arguments.callee.caller.arguments

		# Return History
		@history : -> history

		# Group Collapsed
		@g : (name) ->
			name = name or 'group_' + ++autoName
			groupName.push name
			nativeConsole.groupCollapsed name

		@ge : (name) ->
			nativeConsole.groupEnd name or groupName.pop()

		@er : ->
			nativeConsole.error.apply nativeConsole, arguments

		@t : ->
			nativeConsole.table.apply nativeConsole, arguments

	window.log = Logging