/*
 * Filesytem in JS
 * @package IDE
 * @team vinnizworld
 */

require(['jquery'] , function($){
	$.fn.treelist = function(){
		var self = this; // Projects
		self.slideDown('fast');

		// Show only main level directory files
		self.children('li').show();

		// Adjust padding to form a tree structure
		var list_padding = 10 , lis = self.children('li'), divs_length = lis.length;

		while( divs_length ) {
			console.log(lis, ' current_dir');

			// Direct child dir / files Adjust its padding
			lis.children('div').css({ marginLeft: list_padding + 'px' });

			// Increment Padding
			list_padding += 10;

			// Must update divs_length, lis
			lis = lis.children('ul').children('li');
			divs_length = lis.length;
		}

		// Toggle directory on click
		self.on('click', 'li.dir', function(e){
			e.stopPropagation();
			$(this).toggleClass('opened').children('ul').slideToggle('fast');
		});

		var activeFile = $();

		// Open File
		self.on('click', 'li.file', function(e){
			e.stopPropagation();

			activeFile.removeClass('active');
			activeFile = $(this).addClass('active');
		});
	}
}); // End of Define Block