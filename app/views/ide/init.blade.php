<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>IDE</title>
	<link rel="stylesheet" href="{{ URL::to('css/style.css') }}">
	<!-- <link rel="shortcut icon" href="IDE-big.ico"> -->

	<script>
		var cup_code = '{{ URL::to('cup-code') }}';
	</script>

	<script src="{{ URL::to('js/libs/require.js') }}" data-main="{{ URL::to('js/main.js') }}" ></script>
</head>
<body>
	<div id="main">

		<input id="inputDir" type="file" webkitDirectory>
		
		<!-- File Menu -->
		@include('ide/filemenu');

		<!-- Left Side File Browser -->
		@include('ide/filesystem')

		<!-- Context Menu -->
		<!-- @include('ide/contextmenu') -->

		<div id="content_wrapper" class="content-warpper">

			@include('ide/tabs')

			<div id="content" class="content main_content">
				
				<div class="document main">
					<div name="" style="width:100%; height: 100%;" class="main" id="first_document"></div>
				</div> <!-- document -->
			</div> <!-- Content -->

		</div> <!-- Content Wrapper -->

	</div><!-- Main -->
</body>
</html>