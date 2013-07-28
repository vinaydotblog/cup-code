<?php

class FS
{

	static public function sayHi()
	{
		return "Hi Folks!";
	}

	static public function files_rec($path = '.')
	{
		$dirname = $path;
		$files = array();

		// Constants
		define('DS', DIRECTORY_SEPARATOR);


		function direcoty_handler($dir = '.', $base = '\\') {
			// Directory Handler
			$dh  = opendir($dir);

			$fl = array();

			// Loop Throught Each File
			while (false !== ($filename = readdir($dh))) {

				if($filename[0] != '.') {

					if(  is_dir( $dir . DS . $filename ) ) {
						$fl[ $filename ] = direcoty_handler( $dir . DS . $filename, $base . $filename . DS );
					} else {
						$fl[':'][] = array( 'name' => $filename, 'path' => $base . $filename . DS );
					}
					
				}
			}

			return $fl;
		}

		$files = direcoty_handler($dirname);

		return $files;
	}

}
