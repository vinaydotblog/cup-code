<?php

/**
* 
*/
class ProjectTableSeeder extends Seeder
{
	
	function run()
	{
		$posts = array(
			array('hash_id'=> '5205dd4740cde', 'title'=>'My Awesome Project', 'private_path'=> '/app/','public_path'=>'/www/','created_at'=> date('Y-m-d H:i:s'),'updated_at'=> date('Y-m-d H:i:s')),
			array('hash_id'=> '5205dd4740cde', 'title'=>'My Another Awesome Project', 'private_path'=> '/app/','public_path'=>'/www/','created_at'=> date('Y-m-d H:i:s'),'updated_at'=> date('Y-m-d H:i:s')
		);

		DB::table('projects')->insert($posts);
	}
}