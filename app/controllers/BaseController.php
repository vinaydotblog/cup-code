<?php

class BaseController extends Controller {

	// protected $layout = 'layouts.bootstrap';

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */
	protected function render()
	{
		if ( ! is_null($this->layout))
		{
			// $this->layout->content = View::make($this->layout);
		}
	}

}