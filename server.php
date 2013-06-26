<?php

/*
 * Server FileSystem
 */

// Currently Working with
$dirname = dirname(__FILE__);
$files = array();


// Constants
define('DS', DIRECTORY_SEPARATOR);


function direcoty_handler($dir = '.') {
	// Directory Handler
	$dh  = opendir($dir);

	$fl = array();

	// Loop Throught Each File
	while (false !== ($filename = readdir($dh))) {

		if($filename[0] != '.') {

			if(  is_dir( $dir . DS . $filename ) ) {
				$fl[ $filename ] = direcoty_handler( $dir . DS . $filename );
			} else {
				$fl[':'][] = $filename;
			}
			
		}
	}

	return $fl;
}

$files = direcoty_handler($dirname);

header('Content-Type: application/json');
echo json_encode( $files );