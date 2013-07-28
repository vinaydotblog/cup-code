###
	IDE Definition
	Control Everything of your IDE
###

define [
	'ace/ace' # Code Editor for the web
	'defaults',
	'jquery',
],

(ace, defaults, $) ->

	user_defaults = {} # simulate user's default settings

	defaults = $.extend defaults, user_defaults # Extend with user's given defaults

	class Editor

		@_id : 0 # Unique IDE of current ace

		@active_instances : 0

		@$editors : [] # All active instances of ace

		@$curEditor : null # Current Running Instance


		@$fontSize : parseInt( defaults.fontSize ) or 12 # It's Global

		@increaseFont : ( key , value ) -> $('.document').css('fontSize', ++@$fontSize)

		@decreaseFont : ( key , value ) -> $('.document').css('fontSize', --@$fontSize)

		# Create one!
		@add : (elem, val = "<h1>Hello World!</h1>") ->

			log.g()

			id = ++@_id
			log "Editor Initiated of id %s" , id

			@$active_instances++

			# Apply ACE Editor
			editor = ace.edit(elem)

			# Setup some defaults
			@_setup editor

			# Set Value of document
			editor.setValue val

			@$editors[ id ] = editor;

			log.ge()

			id # return id

		# Default Setup
		@_setup : (e) ->
			log "Setting up default stuff!!"
			# Style it
			$(e.container).addClass('document').css('fontSize', @$fontSize);

			# Set as default
			@$curEditor = e

			# Set Default Theme
			e.setTheme( defaults.theme )

			# Set Default Mode
			e.session.setMode( defaults.mode )	

			if defaults.emmet
				# Check if emmet needs to be load
				require ['libs/emmet', 'ace/ext/emmet'], (em, emrjs ) ->
					emrjs.setCore emmet


		# Close it!
		@remove : (id) ->
			log "Removing %s", id
			@active_instances--

			$(@editors[id].container).remove();
			delete @$editors[ id ]

		@get : (id) ->
			@editor[id]


	# Bind it to IDE
	window.Editor = Editor;