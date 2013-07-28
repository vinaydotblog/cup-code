<?php

class Animal extends BaseModel {
    protected $guarded = array();
    public $timestamps = true;

    public static $rules = array(
    		'name' => 'required',
    		'animtal' => 'required'
    	);
}