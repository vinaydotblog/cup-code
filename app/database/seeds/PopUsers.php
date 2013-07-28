<?php

class PopUsers extends Seeder
{
	function run()
	{
		$stupid = [
			['first_name'=>'Vinay', 'last_name'=>'Aggarwal', 'age'=>22],
			['first_name'=>'Jasmeet', 'last_name'=>'Arora', 'age'=>22],
		];

		DB::table('users')->insert($stupid);
	}
}