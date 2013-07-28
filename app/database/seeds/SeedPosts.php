<?php

class SeedPosts extends Seeder
{
	function run()
	{
		$posts = [
			['title'=>'My First Post', 'body'=> 'lorem ipsum cake'],
			['title'=>'My Second Post', 'body'=> 'The lorem ipsum cake'],
		];

		DB::table('posts')->insert($posts);
	}
}