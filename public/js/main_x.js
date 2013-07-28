/*
 * ide require js main file
 */

/*--------------------------------/
		Configuration
/--------------------------------*/

require.config({
	deps : ['defaults'],
	paths : {
		text : 'ace/requirejs/text',
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
		'ide',
		'jquery', 
		'ace/ace', // Code Editor for the web
		'libs/emmet','ace/ext/emmet',
		'libs/jwerty',
		'modules/cmd',
		'modules/log',
		'modules/filesystem',
		'modules/filemenu',
		'modules/tdi', 'modules/server_fs',
		'modules/request'
	], function(
		IDE,
		$,
		a,
		em, emmet_rjs,
		jw,
		cmd,
		log,
		tl,
		fm,
		tabs, fs,
		req
	){

	IDE.add('first_document');

	jwerty.key('ctrl+1', function(){
		IDE.increaseFont();
	});

	jwerty.key('ctrl+2',function(){
		IDE.decreaseFont();
	});


	/*--------------------------------/
			Implement Emmet
	/--------------------------------*/

	emmet_rjs.setCore(emmet); // Awesome!
	if( Settings.emmet ) {
		console.log("emmet!!");
		require(['libs/emmet','ace/ext/emmet'], function(x, emmet_rjs){
			console.log(emmet_rjs);
		});
	}

	/*--------------------------------/
			File Menu
	/--------------------------------*/

	$('#file-menu')
		.appendTo('body')
		.show();

	/*--------------------------------/
			Implement Tabs
	/--------------------------------*/
	$('#content_wrapper').tabbed();

});