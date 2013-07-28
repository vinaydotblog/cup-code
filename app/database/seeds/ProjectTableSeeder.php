<?php

/**
* 
*/
class ProjectTableSeeder extends Seeder
{
	
	function run()
	{
		$posts = [
			['hash_id'=> uniqid(), 'title'=>'My Awesome Project', 'private_path'=> 'C:\wamp\www\IDE\\','public_path'=>'/public/'],
			['hash_id'=> uniqid(), 'title'=>'My Another Awesome Project', 'private_path'=> 'C:\wamp\www\IDE\\','public_path'=>'/app/']
		];

		DB::table('projects')->insert($posts);
	}
}