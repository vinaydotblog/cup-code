###
	Request JS
	Any kind of request will be handled by this module.
###

define ['jquery', 'underscore', 'backbone', 'editor'] , ($, _, B, editor) ->

	activeProject = '5205dd4740cde'

	$.get Settings.server + 'js/data/code_mode.json', (modes) -> editor.modes = modes

	class Project extends Backbone.Model

		defaults : 
			title : 'New Project'

		_id : 'hash_id',

		urlRoot : Settings.server,

		url : -> @urlRoot + "projects/" + @get 'id'

	p1 = new Project id : activeProject


	# Handle Project activities

	p1.on "sync" , ->
		data = {}; frag = document.createDocumentFragment()

		data[ @get('title') ] = @get('data')

		base = 'BASE/'

		process = (d, first) ->
			ul = document.createElement 'ul'
			ul.className = 'treelist' if first

			# Itrate over folders
			for i of d

				if i isnt ':' and d.hasOwnProperty i
					li = document.createElement 'li'
					li.className = 'dir'

					dir_div = document.createElement 'div'
					li.appendChild dir_div

					dir_div.innerHTML = i

					span = document.createElement 'span'

					dir_div.appendChild span

					ul.appendChild li

					li.appendChild process d[i]

			# Itrate over files
			for j of d[':']

				file = d[':'][j]
				li = document.createElement 'li'
				file_div = document.createElement 'div'

				li.className = 'file'
				li.appendChild file_div

				file_div.innerHTML = file.name

				li.path = file.path
				ul.appendChild li

			ul
		# End of process

		frag.appendChild process data, true


		treelist = $ '.treelist_wrapper'

		if treelist.length
			treelist.html ''
			treelist[0].appendChild frag

		treelist.treelist 'click' : (path) -> p1.trigger 'request:file', path

	p1.fetch()

	# Server file on request
	p1.on 'request:file' , (data) ->
		$.get Settings.server + 'file/1', project_id : activeProject, file : data, (res) ->
			mode = res.name.split('.').pop();

			if editor.modes[ mode ]
				console.log "ace/mode/" + editor.modes[mode]
				editor.$curEditor.session.setMode "ace/mode/" + editor.modes[mode]
			
			editor.$curEditor.setValue res.content
			editor.$curEditor.moveCursorTo 0, 0
			editor.$curEditor.focus()