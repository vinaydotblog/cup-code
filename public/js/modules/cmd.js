/*
 * All the commands executable througout
 * different modules
 */

define( ['underscore'], function(_){

	function cmd() {

	}

	// A set of executable commands
	var commands = {
		intro : function(name) {
			alert("My name is " + name);
		},

		open_documentation : function(a,b) {
			alert("opening documentation for " + a + " and " + b );
		}
	};

	// Method to execute single command
	cmd.exec = function(command, args) {
		if( ! commands[ command ]  ) {
			return alert( "Supply valid command!" );
		}

		commands[ command ].apply( null, args );
	}

	// To add multiple commands
	cmd.extend = function(obj) {
		_.extend( commands ,  obj );
	}

	// Define a single new command
	cmd.define = function( name, fn ) {
		commands[ name ] = fn;
	}


	// Make it available
	window.cmd = cmd;

	return cmd;

});
