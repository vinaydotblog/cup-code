<div id="menu" style="display: none;" class="context-menu">
	<ul>
		<li><a href="#">Back</a></li>
		<li><a class="disabled" href="#">Forward</a></li>
		<li><a href="#">Reload</a></li>
		<li class="divider" ></li>
		<li><a href="#">Save As...</a></li>
		<li><a href="#">Print...</a></li>
		<li><a href="#">Translate to English</a></li>
		<li><a href="#">View page source</a></li>
		<li><a href="#">View page info</a></li>
		<li class="divider" ></li>
		<li><a href="#">Inspect Element</a></li>
	</ul>
</div>


<script>
(function($){
	var contextmenu = $('#menu').hide();

	// Keep Menu as direct child of body for fixed positioning
	contextmenu.appendTo(document.body);

	// Act on right click of mouse
	$(document).on('contextmenu', function(e){

		e.preventDefault(); // disable nativ menu

		// if clicked on menu don't do anything
		var target = e.target;
		while( target && target != document.body ) {
			if( target == contextmenu[0] ){ return; }
			target = target.parentElement;
		}

		// Position Menu where mouse was clicked!
		contextmenu.css({ left: e.pageX, top: e.pageY });
		contextmenu.show();
	})

	// Hide menu on click
	.on('click',function(e){
		contextmenu.hide();
	});

	contextmenu.on('click',function(e){
		e.stopPropagation();
		e.preventDefault();
	});

	$('#file-menu').on('click','li',function(e){
		e.preventDefault();
		$(this).closest('ul').toggleClass('opened');
		// $(this).children('ul').toggle();
	})


})(jQuery);	
</script>