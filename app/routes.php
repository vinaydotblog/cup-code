<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
*/



// Landing Area
Route::get('/', 'IDEController@init');

Route::get('mail', function(){

	$data['user'] = 'vinnizworld';

	// Mail::pretend();
	Mail::send('emails.hello', $data, function($mailer){
		$mailer->to('aryans.vinay@gmail.com')->subject("Saying hello from laravel");
	});	

});


	Route::controller('projects','Projects');


	Route::controller('cup', 'CupCodeController');

	Route::resource('cup-code', 'CupCodeController');
	Route::resource('projects', 'ProjectsController');
	Route::resource('file', 'FilesController');

	Route::resource('posts', 'PostsController');
	Route::resource('animals', 'AnimalsController');

	Route::get('phpinfo', function(){
		return phpinfo();
	});

	Route::get('version', function(){
		return phpversion();
	});

// Play Ground
Route::get('play', function(){
	var_dump( get_class(File::getFacadeRoot()) );
});

Route::resource('posts', 'PostsController');

Route::resource('animals', 'AnimalsController');