/*
 * Filesytem in JS
 * @package IDE
 * @team vinnizworld
 */

define('treelist', ['jquery'], function($){



var activeFile = $(), FR = new FileReader, currentIDEFile = null, 
	extentions = {
		'js' : 'javascript',
		'html' : 'html',
		'css' : 'css',
		'scss' : 'scss',
		'sass' : 'sass',
		'coffee' : 'coffee',
		'less' : 'less',
		'md' : 'markdown',
		'rb' : 'ruby',
		'php' : 'php',
		'py' : 'python',
		'sql' : 'sql',
		'vb' : 'vbscript',
		'xml' : 'xml'
	};

FR.onload = function(e) {
	if( extentions[ currentIDEFile.ext ] ) {
		var mode = extentions[ currentIDEFile.ext ];
		console.log('ace/mode/' + mode);
		C.code.session.setMode('ace/mode/' + mode);
	} else { console.log("Mode ", mode , " not found"); }
	C.code.setValue( e.target.result );
	C.code.gotoLine(1);
	// $('#content').html(e.target.result);
}

// Main Object of Files
function IDEFile(path, file) {
	// Convert backslashes ( on windows ) to forward slasehs
	this.path = path.replace( /\\/g , '/');

	var pieces = path.split('/'); 
	this.name = pieces.pop();

	// Say if it's not a file
	if( ! this.name ){ return console.log("IDEFile: Faill!!"); }

	// Get Extention
	var match = this.name.match(/\.(\w+)$/);
	this.ext = match && match[1] ? match[1] : '';
	this.blob = file;

	// Refrence to current FS dir
	var current = FS.ROOT;

	for( i in pieces ) {
		// Create Dir if not exists
		var piece = pieces[i];
		if( piece && piece !== '.' && piece !== '..' )
		{
			if( !current[ piece ] ) {
				current[ piece ] = {};
				current[ piece ]['>'] = {};
			}

			current = current[ piece ];
		}
	}

	current['>'][this.name] = this;
	this.dir = current;
}

function Dir(path) {
	if( !path || !path.substr ){ console.log("Dir: Fail!"); return;  }

	// convert backslashes to forward slashes
	this.path = path.replace( /\\/g , '/').replace(/^\//,'');

	var pieces = this.path.split('/');

	// Refrence to current iterator
	var current = FS.ROOT, i;

	for( i in pieces ) {
		// Create Dir if not exists
		var piece = pieces[i];
		if( piece && piece !== '.' && piece !== '..' )
		{
			if( !current[ piece ] ) {
				current[ piece ] = {};
				current[ piece ]['>'] = {};
			}

			current = current[ piece ];
		}
	}

	current[':'] = this;

	this.children = current;
}

// Global Recursive Information
Dir.allFiles = {};

Dir.prototype.isDir = function(){ return true; }

function FS(fileList)
{
	$.map( fileList, function(file){
		var path = file.webkitRelativePath;

		// Let's Check file vs dir
		var match = path.match(/.$/);
		var is_dir = match && match[0] === '.';

		// Create Dir Object for Directories
		if( is_dir ) {
			new Dir(path, file);
		}

		// Create File Object for Files
		else {
			new IDEFile(path, file);
		}

	});
}

// Check if Given instance is dir or not !!
FS.isDir = function( obj ) {
	return obj instanceof Dir;
}


// Loop through root object and create tree

// Iterated Frag
var FRAG;


function createFrag( obj, level, parent ){
	var ul = document.createElement('ul');
	ul.style.display = level === 0 ? 'block' : 'none';
	parent.appendChild(ul);
	for( i in obj ) {

		// Handle Directories
		if( obj.hasOwnProperty(i) && i !== '>' && i !== ':' ) {
			var dir = obj[ i ];
			
			// Build Dom Element
			var elem = document.createElement('li');
			elem.className = 'dir level' + level ;
			// elem.style.display = level === 0 ? 'block' : 'none';
			elem.style.paddingLeft = (level * 20) + 'px';

			// Attach 'Dir' object to element.
			if( obj[ i ][':'] ) {
				elem.obj = obj[i][':'];
			}

			var c_elem = document.createElement('div');
			var icon = document.createElement('span');
			icon.style.width = '10px';
			icon.style.height = '10px';
			icon.style.display = 'inline-block';
			c_elem.innerHTML = i;
			c_elem.appendChild(icon);
			
			c_elem.className = 'content';
			elem.appendChild(c_elem);

			ul.appendChild( elem );

			// Recursive Loop
			createFrag( obj[i], level + 1, elem );
		}
	}

	// Handle Files
	if( obj['>'] ) {

		for( i in obj['>'] ) {
			var file = i;


			// Build Dom Element
			var elem = document.createElement('li');
			elem.className = 'file level1';
			elem.style.paddingLeft = (level * 20) + 'px';
			// elem.style.display = level === 0 ? 'display' : 'none';

			// Attach 'IDEFile' object to it's respective element
			if( obj['>'][i] ) {
				elem.obj = obj['>'][i];
			}

			$(elem).on('click', function(){
				activeFile.removeClass('active');
				activeFile = $(this).addClass('active');
				currentIDEFile = this.obj;
				C = new Tab( this.obj );
				FR.readAsText( this.obj.blob );
			});

			var c_elem = document.createElement('div');
			c_elem.className = 'content';
			elem.appendChild(c_elem);
			c_elem.innerHTML = file;

			ul.appendChild( elem );
			
		}
	}
}

function prep(){

	// ROOT dir in FileSystem that contains information of all files.
	FS.ROOT = {};

	// Create Fragment for Dom
	FS.frag = document.createDocumentFragment();

	// Create Fragment for Dom
	FS.frag = document.createDocumentFragment();
	FS.ROOT = {};

	var files = this.files || files;

	// Create Filesystem
	var fs = new FS(files);
	
	FRAG = FS.frag
	createFrag( FS.ROOT, 0, FS.frag );

	// Add fragment to DOM
	var fs = document.getElementById('filesystem');
	fs.innerHTML = '';
	fs.appendChild( FS.frag ) ;
}

$('#filesystem').on('click', 'li.dir', function(e){
	e.stopPropagation();
	$(this).toggleClass('opened').children('ul').slideToggle();
})

.on('click','li',function(e){
	e.stopPropagation();
});

$('#inputDir').on('change', prep);

/* Ask before closing IDE window */
// window.onbeforeunload = function(){
// 	return "Please save your changes before moving on!";
// }

}); // End of Define Block