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
			$dirs  = scandir($dir);

			$fl = array();

			foreach( $dirs as $file ) {
				if(substr($file, 0, 1) != '.') {
					if(  is_dir( $dir . DS . $file ) ) {
						$fl[ $file ] = direcoty_handler( $dir . DS . $file, $base . $file . DS );
					} else {
						$fl[':'][] = array( 'name' => $file, 'path' => $base . $file . DS );
					}
					
				}
			}

			return $fl;
		}

		$files = direcoty_handler($dirname);

		return $files;
	}

}
