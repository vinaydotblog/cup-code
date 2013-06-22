<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>IDE</title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="shortcut icon" href="IDE-big.ico">

	<script src="js/libs/require.js" data-main="js/main.js" ></script>
</head>
<body>
	<div id="main">

		<input id="inputDir" type="file" webkitDirectory>
		
		<!-- File Menu -->
		<?php // include_once 'filemenu.php'; ?>

		<!-- Left Side File Browser -->
		<?php require 'filesystem.php'; ?>

		<!-- Context Menu -->
		<?php // require 'contextmenu.php'; ?>

		<div class="content-warpper">

			<div id="tabs" class="tabs">
				<ul>
				</ul>
			</div>
			<!-- End Tabs -->

			<div id="content" class="content">
				
				<div class="document main">
					<div name="" style="width:100%; height: 100%;" class="main" id="first_document"></div>
				</div> <!-- document -->
			</div> <!-- Content -->

		</div> <!-- Content Wrapper -->

	</div><!-- Main -->
</body>
</html>