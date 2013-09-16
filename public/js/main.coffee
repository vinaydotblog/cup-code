###
	Bootstraper OF cup code
###

# Configuration #
require.config
	deps : ['defaults','modules/log']
	paths :
		text : 'ace/requirejs/text',
		jquery : 'libs/jquery.min',
		underscore : 'libs/underscore',
		backbone : 'libs/backbone'


# Get Started With
require [
	'jquery' 			# of-course
	'editor'
	
	'libs/jwerty' 		# Key Bindings

	## Components
	'components/modal'

	## Modules
	'modules/cmd'			# cmd.exec
	'modules/notify'		# Notification
	'modules/log'			# Error / Logs Handling
	'modules/filesystem'	# Treeview of files
	'modules/filemenu','modules/server_fs'	# Menus
	'modules/tdi'			# Tabbed document interface
	'modules/req'		# Request Handler
],

($, editor, jw, modal, cmd, noty, log, fs, fm, tdi, req) ->

	# Initialize Editor with welcome document
	editor.add "first_document"

	$('#content').height( $(window).height() - 75 );

	# just try it!
	jwerty.key "ctrl+1", -> editor.increaseFont();
	jwerty.key "ctrl+2", -> editor.decreaseFont();

	## File Menu
	$('#file-menu').appendTo('body').show()

	## Tabs
	$('#content_wrapper').tabbed()

	## Modal
	cmd.define 'open_project', -> $('#open_project').modal('show');


	# Move ON!!!

	document.addEventListener 'drop', (e) ->
		e.stopPropagation();
		e.preventDefault();
		file = e.dataTransfer.files[0]

		reader = new FileReader

		reader.onload = (e) ->
			console.log e
			Editor.$curEditor.setValue e.target.result
			Editor.$curEditor.gotoLine(1)

		reader.readAsText file

		console.log "Droping..."

	document.addEventListener 'dragover', (e)->
		e.stopPropagation();
		e.preventDefault();
		console.log "Dragging..."