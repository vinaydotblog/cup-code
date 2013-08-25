<!doctype html>
<html lang="en" class="no-js" >
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script> (function(H){H.className = H.className.replace(/no\-js/,'js') })(document.documentElement); </script>
	<style>

		/* Replace with reset sylesheet */
		body {
			margin: 0;
			padding: 0;
			font-family: Ubuntu, Cambria, sans-serif;
		}

		.container {
			width: 80%;
			margin: 0 auto;
		}

		#head {
			height : 80px;
			background-color: #AFDBBF;
			box-shadow: 1px 1px 5px #222;
			position: fixed;
			top: 0;
			width: 100%;
		}

		#head h2 {
			font-size: 1.8em;
			font-family: sans-serif;
			line-height: 80px;
			margin: 0;
			color: #f7f7f7;
			font-weight: normal;
			text-shadow: 0px 1px 2px #222;
		}

		#content {
			margin-top: 85px;
			padding: 10px 0;
		}

		#content h2, #content h1{
			font-weight: normal;
		}

		#footer {
			border-top: 1px solid #222;
			color: #333;
		}

	</style>
	@yield('head')
</head>
<body>
	<header id="head">
		<div class="container">
			<h2>Documenation</h2>
		</div>
	</header>

	<div id="content">
		<div class="container">
			@yield('content')

		</div>
	</div>

	<footer id="footer">
		<div class="container">
			<p>Copyright 2013 Vinay Aggarwal</p>
		</div>
	</footer>
</body>
</html>