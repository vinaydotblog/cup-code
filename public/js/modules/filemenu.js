/*
 * File menu to execute Set of Commands
 *
 */

define(['jquery'/*,'text!data/filemenu.json'*/, 'libs/jwerty'], function($ /*, fm */, _jw){
	
	var ucfirst = function(string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}

	// console.log(m);
	// alert('ff');
	var menu = $('#file-menu'),  hidden = true,	active_menu = $();

	$(document).on('click',function(e){
		if( ! hidden && ! $(e.target).is('#file-menu > ul > li > a') ) {
			active_menu.removeClass('opened');
			hidden = true;
		}
	});

	menu.on('click', 'li', function(e){
		console.log(hidden, this);
		e.preventDefault();
		if( hidden ) {
			active_menu.removeClass('opened');
			active_menu = $(this).addClass('opened');
			hidden = !hidden;
		} else {
			active_menu.removeClass('opened');
		}
	})

	.on('mouseenter', '> ul > li' ,function(){
		if( !hidden ) {
			active_menu.removeClass('opened');
			active_menu = $(this).addClass('opened');
		}
	});

	menu.on('click', 'a', function(e){
		e.preventDefault();

		if( this.cmd ) {
			cmd.exec( this.cmd.command, this.cmd.args );
		}
	});

	/*
	 * File Menu Generator Script
	 */

	$.getJSON( Settings.server + 'js/data/filemenu.json', function(items){
	// return;

		// Let's Manipulate the menu
		if( !items || !items.length ){ return alert("uff!! No item!"); }

		var gp = document.createElement('ul');

		for( i in items ) {
			var li = document.createElement('li'), a = document.createElement('a');
			a.href = '#';
			a.innerText = items[i].label ;
			li.appendChild(a);
			gp.appendChild(li);


			// Let Play with kids
			var kids = items[i].kids, set = document.createElement('ul');

			// if( !kids || !kids.length ) { alert('Why no kids'); }

			for( i in kids ) {
				var kid = kids[i], k = document.createElement('li'), ka = document.createElement('a');
				k.appendChild(ka);
				set.appendChild(k);
				ka.href = '#';

				if( kid.divider ){
					k.className = 'divider';
					continue;
				}

				// Attach a command
				ka.cmd = kid;

				// Add Text
				ka.innerText = kid.label;

				// Add Shortcut Key
				if( kid.key ) {

					// Display Shortcut Key
					var key = document.createElement('i');
					ka.appendChild(key);
					key.innerText = kid.key.split('+').map(ucfirst).join(' + ');

					// Register Shortcut
					jwerty.key( kid.key , function(){
						cmd.exec( this.command , this.args );
					}, kid);
				}
			}

			li.appendChild(set);
		}


		$('#file-menu').html( '' ).append(gp);
	});
});