<?php

class Projects extends BaseController
{
	/*
	 * List All or selected Projects for Current User
	 * - projects/
	 */
	function get_index()
	{

	}

	/*
	 * Detail of Single Project
	 * - projects/details/5ab
	 */
	function get_details($hash_id = null)
	{
		$project = Project::whereHashId( $hash_id )->first();
		if( $project ) {
			$fs = FS::files_rec( realpath( $project->private_path . $project->public_path ) );
			$project->data = $fs;
			return $project;
		} else {
			return array('success' => false, 'message' => 'This project is no longer available' );
		}
	}

	/*
	 * Get Project Settings
	 * - /settings/5ab
	 */
	function get_settings($hash_id = null)
	{

	}

	/*
	 * Fetch Directories of a project
	 * - /fs/5ab
	 */
	function get_fs($hash_id = null)
	{
		
	}

	/*
	 * Serves a requested file content and details
	 * - /file/?name=file.php
	 */
	function get_file($hash_id = null)
	{
		
	}

	/*
	 * Update given Project's Details
	 * = /details/5ab
	 * => { name : 'Cup Code Awe!!' }
	 */
	function post_details($hash_id = null)
	{
		
	}

	/*
	 * Update Given Project's Settings
	 * = /settings/5ab
	 * => { theme: 'ambiance' }
	 */
	function post_settings($hash_id = null)
	{
		
	}

	/*
	 * Save a given file to filesytem
	 * = /file/?name=app/users.php
	 * Type: new, update, delete
	 */
	function post_file()
	{

	}
}