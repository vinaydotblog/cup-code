<?php

class BaseModel extends Eloquent
{
	public $errors = null;
	public static $rules = array();

	protected static function boot()
	{
		static::saving(function($model){
			return $model->validate();
		});
	}

	function validate()
	{
		$validation = Validator::make( Input::all() , static::$rules );

		if( $validation->passes() ) return true;

		$this->errors = $validation->messages();

		return false;
	}
}