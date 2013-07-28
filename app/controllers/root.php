<?php

class Root extends BaseController
{
	protected $layout = 'master';

	function index()
	{
		$this->layout->content = View::make('hello');
	}
}