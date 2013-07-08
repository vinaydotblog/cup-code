# Laravel Help

## Routes
- Route::get('uri',cb);
- Route::post('uri',cb);
- Route::any('uri',cb);
- Route::any('uri',array('https'=> cb));
- url::to('uri');

	Route::get('users/{id}/{name?}', function($id, $name = ''){
		// 
	});

- Route::get('user/{id}', cb) -> where('id'=>'RegEx');


- Route::get('uri',array('before'=> 'filter|and|all'));
- Route::get('uri',array('before'=> 'filter|and|all'));

- Route::filter('csrf', cb);
- Route::filter('auth', cb);
- Route::filter('old', cb);
- Route::get('uri',array('before'=>'old:200'));

- Route::filer('admin', cb); -- Filer 
- Route::when('admin/*', cb) -- Route

- Route::get('users/profile', array('as'=>'profile'))
- Url::route('profile');
 Route::currentRouteName();

Route::group('before'=>'auth',function(){
	// Define regular routs
})

Route::group('before'=>'auth',function(){
	// Define regular routs
})

Route::group('domain'=>'{account}.myapp.com',function(){
	// Define regular routs
})

Route::group('prefix'=>'admin',function(){
	
});

Route::model('user','User', NotFoundCb);

Route::get('profile/{user}', function(User $user){
	
});

Route::bind('user', function($values, $route){
	return User::where('name', $value)->first();
});

App:abort('404');

Controller Routes

Route::get('user/{id}','UserController@showprofile')


$action = Route::currentRouteAction();

