###
	Tab Interface
###

require ['jquery'], ($) ->

	content = $ '#content'
	first = $ '#first_document'
	tabs = $ '.tabs_wrapper ul'

	class Tdi

		# Tab Creator
		constructor : (file) ->

			# Elem
			@elem = $ '<li>', class : 'tab'

			# Taga
			a = $ '<a>', text : file and file.name or 'untitled'
			@elem.append a

			# Close Button
			@elem.append $ '<span>', text : 'x', class : 'close'

			# Document
			doc = $ '<div>' , class : 'document main'
			content.append doc
			ace_elem = $('<div>', css : width : 100 , height : 100 ).appendTo doc
			editor.add( ace_elem[0] );

			# Open the Tab
			tabs.append @elem

		all : []

		activate : ->
			active_tab.removeClass('active');
			active_tab = $(@elem).addClass('active');
			main_document.hide();
			main_document = @doc.show();

		# Close the tab
		close : ->
			elem = $(@elem).removeClass('active')
			idx = @all.indexOf( @ )
			size = @all.length

			@all.splice( idx, 1 );

			@doc.remove();

			# Activae closer tab;
			if size > 1 then @all[ size - 2 ].activate() else active_tab = $()

			elem.removeClass('active');
			elem.addClass('hide').width(0);
			setTimeout( (-> elem.remove()), 200)

	window.Tdi = Tdi

	$.fn.tabbed = ->
		tab_wrapper = @find('.tabs_wrapper:first')
		content = @find('.main_content:first')
		tabs = tab_wrapper.find('ul')
		active_tab = $();

		content_wrapper = content

		tab_wrapper.addClass 'tabs'

		tabs.find('li').each ->
			$('<span>',{ class : 'close', text : 'x' }).appendTo(this);

		# Activate Tab on click
		tabs.on 'click', 'li' , -> @obj.activate();

		tabs.on 'click', 'li .close', (e) ->
			e.stopPropagation();
			@parentElement.obj.close();

		tab_wrapper.on 'dblclick', (e) -> e.stopPropagation(); new Tab

