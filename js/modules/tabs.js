/*
 * Tabs CSS
 * @package IDE
 * @team vinnizworld
 */

var tabs = $('#tabs ul'), tab_wrapper = $('#tabs'), active_tab = $(),
	content = $('#content'), main_document = content.find('.document.main');

tabs.on('click', 'li' ,function(){
	this.obj.activate();
});

tabs.on('click','li span', function(e){
	e.stopPropagation();
	this.parentElement.obj.close();
});

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
	span.innerHTML = 'x';
	this.elem.appendChild(span);

	// Prepare CodeMirror
	var doc = document.createElement('div'), ta = document.createElement('div');
	doc.style.display = 'none';
	content.append(doc);
	doc.className = 'document';
	doc.style.display = 'block';
	doc.appendChild(ta);
	ta.style.width = '100%';
	ta.style.height = '100%';
	// ta.style.fontSize = '';
	this.code = CodeMirror.init(ta);
	this.code.setValue( 'hi' );
	this.code.focus();
	main_document.hide();
	main_document = $(doc);

	this.doc = main_document;

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

Tab.prototype.all = [];

Tab.prototype.activate = function() {
	active_tab.removeClass('active');
	active_tab = $(this.elem).addClass('active');
	main_document.hide();
	main_document = this.doc.show();
	this.code.focus();
}

Tab.prototype.close = function() {
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

tab_wrapper.on('dblclick', function(e){
	e.stopPropagation();
	new Tab;
});
