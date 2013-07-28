/*
 * Tabs CSS
 * @package IDE
 * @team vinnizworld
 */

require(['jquery'], function($){

	var content_wrapper, main_document, tabs;

	function Tab(fileObj) {
		var me = this;
		this.elem = document.createElement('li');
		this.elem.className = 'tab hidden';

		this.state = 'active';

		var a = document.createElement('a');
		a.innerHTML = fileObj && fileObj.name || 'untitled';
		this.elem.appendChild(a);

		// Close
		var span = document.createElement('span');
		span.className = 'close';
		span.innerHTML = 'x';
		this.elem.appendChild(span);

		// Main Document
		var doc = $('<div>',{ class : 'document' }).appendTo(content_wrapper);
		this.doc = main_document = $('<div>', { class : 'document main' }).appendTo(doc);
		this.editorID = IDE.add(doc);

		// Set refrences to tab
		this.elem.obj = this;
		this.all.push(this);

		tabs.append( this.elem );
		var width = $(this.elem).width(), elem = $(this.elem);

		
		this.elem.className = 'tab hide';
		elem.width( width );
		active_tab.removeClass('active');
		active_tab = elem;
		setTimeout(function(){ elem.removeClass('hide'); me.activate(); }, 200 );
	}

	// Core Functionality of Tabbed based windows.
	Tab.prototype = Tab.fn = {

		// Keeps all active objects
		all : [],

		activate : function() {
			active_tab.removeClass('active');
			active_tab = $(this.elem).addClass('active');
			main_document.hide();
			main_document = this.doc.show();
			// this.code.focus();
		},

		close : function() {
			var
				elem = $(this.elem).removeClass('active'),
				idx = this.all.indexOf( this ),
				size = this.all.length;

			this.all.splice( idx, 1 );

			this.doc.remove();

			// Activae closer tab;
			if( size > 1 ){
				this.all[ size - 2 ].activate();
			}
			else { active_tab = $(); }

			elem.removeClass('active');
			elem.addClass('hide').width(0);
			setTimeout(function(){
				elem.remove();
			}, 200);
		}
	}

	$.fn.tabbed = function(){
		var tab_wrapper = this.find('.tabs_wrapper:first'), content = this.find('.main_content:first');
			tabs = tab_wrapper.find('ul'), active_tab = $();

		content_wrapper = content;

		// Add styling to tabs
		tab_wrapper.addClass('tabs');

		tabs.find('li').each(function(){
			$('<span>',{ class : 'close', text : 'x' }).appendTo(this);
		});

		tabs.on('click', 'li' ,function(){
			this.obj.activate();
		});

		tabs.on('click','li .close', function(e){
			e.stopPropagation();
			this.parentElement.obj.close();
		});

		tab_wrapper.on('dblclick', function(e){
			e.stopPropagation();
			new Tab;
		});
	}

}); // define block closed