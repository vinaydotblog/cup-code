<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', 'IDEController@init');
Route::resource('cup-code', 'CupCodeController');
Route::resource('projects', 'ProjectsController');
Route::resource('file', 'FilesController');

Route::get('phpinfo', function(){
	return phpinfo();
});

Route::get('version', function(){
	return phpversion();
});