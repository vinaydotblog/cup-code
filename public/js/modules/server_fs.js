/*
 * Server File System
 */


require(['jquery'], function($){

	return $.get( cup_code, function(data){

		var frag = document.createDocumentFragment();

		// It'll process single directory
		function process(d, first) {
			var ul = document.createElement('ul');
			if( first ){ ul.className = 'treelist'; }
			for( i in d ) {
				if( i !== ':' &&  d.hasOwnProperty(i) ) {
					// process dirs here...
						var li = document.createElement('li'), dir_div = document.createElement('div');
						li.className = 'dir';
						li.appendChild(dir_div);
						dir_div.innerHTML = i;
						var span = document.createElement('span');
						dir_div.appendChild(span);
						ul.appendChild(li);

						li.appendChild( process( d[i] ) );
				}
			}

				if( i === ':' ) {
					// Process files here...
					for( j in d[i] ) {
						var file = d[i][j];
						var li = document.createElement('li'), file_div = document.createElement('div');
						li.className = 'file';
						li.appendChild(file_div);
						file_div.innerHTML = file.name;
						li.path = file.path;
						ul.appendChild(li);
					}
				}

			return ul;
		}

		frag.appendChild( process(data, true) );

		var treelist = $('.treelist_wrapper');

		if( treelist.length ) {
			treelist.html('');
			treelist[0].appendChild(frag);
		}

		$(document).trigger('hoho');
	});
	
});