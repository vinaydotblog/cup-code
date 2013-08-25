<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
*/
use ElephantIO\Client as Elephant;


// Landing Area
Route::get('/', 'IDE@start');

Route::resource('projects','ProjectsController');

Route::resource('cup-code', 'CupCodeController');
// Route::resource('projects', 'ProjectsController');
Route::resource('file', 'FilesController');



Route::get('elephant', function(){

	$elephant = new Elephant('http://localhost:3000', 'socket.io', 1, false, true, false);

	$elephant->init();
	$elephant->close();

	echo 'tryin to send `bar` to the event `foo`';
	                        
});


Route::get('test', function(){
	return array("foo","bar");
});

// Project pa
Route::controller('docs', 'DocsController');













// EOF