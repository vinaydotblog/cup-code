/*
 * ide require js main file
 */

/*--------------------------------/
		Configuration
/--------------------------------*/

require.config({
	deps : ['defaults'],
	paths : {
		'text' : 'ace/require/text',
		'jquery' : 'libs/jquery.min'
	}
});


/*--------------------------------/
		Get Started with
/--------------------------------*/

require(
	[
		'jquery', 'ace/ace','libs/emmet',
		'ace/ext/emmet','modules/treelist',
		'modules/tabs', 'modules/server_fs'
	], function($, a, x, emmet_rjs, tl, tabs){

	// Apply ACE Editor
	var editor = a.edit('first_document');

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

	emmet_rjs.setCore(emmet); // Awesome!
	// if( Settings.emmet ) {
	// 	console.log("emmet!!");
	// 	require(['libs/emmet','ace/ext/emmet'], function(x, emmet_rjs){
	// 		console.log(emmet_rjs);
	// 	});
	// }


	/*--------------------------------/
		Tree List for FileSystem
	/--------------------------------*/
	
	$(document).on('hoho',function(){
		$('.treelist_wrapper').treelist();
	});

	/*--------------------------------/
			Implement Tabs
	/--------------------------------*/
	$('#content_wrapper').tabbed();



});	