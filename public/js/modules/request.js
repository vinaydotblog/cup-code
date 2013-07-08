/*
 * Request JS
 * All kind of requests handling will be done
 * by this module
 */

define(['jquery','underscore','backbone'],function($, _ , B){

	var activeProject = '51d70d2ba9d17';

	Project = Backbone.Model.extend({

		/* Default Property of Projects */
		defaults : {
			title : 'New Project'
		},

		_id : 'hash_id',

		/* Base URL of server */
		urlRoot : Settings.server,

		// Prepare URL
		url : function(){
			return this.urlRoot  + 'projects/' + this.get('id');
		}
	});

	p1 = new Project({ id : activeProject });

	p1.on('sync', function(){
		var data = this.get('data'), frag = document.createDocumentFragment();
		// console.log(data);
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

		$('.treelist_wrapper').treelist({
			click : function(path){
				p1.trigger('request:file', path);
			}
		});
	});

	p1.fetch();

	// server file on request
	p1.on('request:file', function(data){
		$.get(Settings.server + 'file/1' , { project_id : activeProject, file : data }, function(data){
			editor.setValue(data.content);
		});
	});

});