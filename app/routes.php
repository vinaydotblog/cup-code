<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
*/



// Le't start the story
Route::get('/', 'IDE@start');

/*
 * IDE Controllers
 * 
 * Controllers for the editor
 */
Route::resource('projects','ProjectsController');
Route::resource('cup-code', 'CupCodeController');
Route::resource('file', 'FilesController');

/*
 * Documentation Is required
 */
Route::controller('docs', 'DocsController');


/*
 * Good to keep some info
 */
Route::get('info',function(){ echo phpinfo(); });

/* Just a test */
Route::get('test', function(){
	return App::environment();
});




/*-----------------------------/
		Assets Definitions
/-----------------------------*/

Basset::collection('jquery', function($col){
	$col->javascript('js/libs/jquery.min.js');
});

Basset::collection('winter', function($col){

	// Depndencies
	$col->requireDirectory('font');

	// Scripts
	$col->javascript('js/libs/jquery.min.js');
	$col->javascript('js/bootstrap.js');

	// and Styles
	$col->stylesheet('css/bootstrap.css');
	$col->stylesheet('css/bootstrap-responsive.css');
	$col->stylesheet('css/winter.css');
	$col->stylesheet('css/font-awesome.css');
});

Route::any('{any}', function(){
	return View::make('docs.503');
});

// EOF