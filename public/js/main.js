/*
 * ide require js main file
 */

/*--------------------------------/
		Configuration
/--------------------------------*/

require.config({
	deps : ['defaults','jquery','modules/notify'],
	paths : {
		text : 'ace/require/text',
		jquery : 'libs/jquery.min',
		underscore : 'libs/underscore',
		backbone : 'libs/backbone'
	}
});

/*--------------------------------/
		Get Started with
/--------------------------------*/

require(
	[
		'jquery', 
		'ace/ace', // Code Editor for the web
		// 'libs/emmet','ace/ext/emmet',
		'modules/filesystem',
		'modules/tabs', 'modules/server_fs',
		'modules/request'
	], function(
		$,
		a,
		// em, emmet_rjs,
		tl,
		tabs, fs,
		req
	){

	// Apply ACE Editor
	editor = a.edit('first_document');

	// Set Default Theme
	editor.setTheme( Settings.theme );

	// Set Default Mode
	editor.getSession().setMode( Settings.mode );

	// Set Value of document
	var node = document.doctype,
		doctype = "<!DOCTYPE "
	         + node.name
	         + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '')
	         + (!node.publicId && node.systemId ? ' SYSTEM' : '') 
	         + (node.systemId ? ' "' + node.systemId + '"' : '')
	         + '>';

	editor.setValue( "<h1>Hello World!</h1>" );

	document.getElementById('first_document').style.fontSize = Settings.fontSize;


	/*--------------------------------/
			Implement Emmet
	/--------------------------------*/

	// emmet_rjs.setCore(emmet); // Awesome!
	// if( Settings.emmet ) {
	// 	console.log("emmet!!");
	// 	require(['libs/emmet','ace/ext/emmet'], function(x, emmet_rjs){
	// 		console.log(emmet_rjs);
	// 	});
	// }


	/*--------------------------------/
		Tree List for FileSystem
	/--------------------------------*/
	
	// $(document).on('hoho',function(){
	// 	$('.treelist_wrapper').treelist({
	// 		click : function(path){
	// 			console.log(path);
	// 		}
	// 	});
	// });

	/*--------------------------------/
			File Menu
	/--------------------------------*/

	$('#file-menu').appendTo('body')
	.show()
	.children('ul')
	.on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('opened');
	});

	/*--------------------------------/
			Implement Tabs
	/--------------------------------*/
	$('#content_wrapper').tabbed();

});	