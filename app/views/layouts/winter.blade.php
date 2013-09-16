<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Bootstrap Admin</title>
	<script> (function(H){H.className = H.className.replace(/no\-js/,'js') })(document.documentElement); </script>
	{{ basset_stylesheets('winter') }}
	<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">
	<meta name="author" content="">

   <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <style type="text/css">
        #line-chart {
            height:300px;
            width:800px;
            margin: 0px auto;
            margin-top: 1em;
        }
        .brand { font-family: georgia, serif; }
        .brand .first {
            color: #ccc;
            font-style: italic;
        }
        .brand .second {
            color: #fff;
            font-weight: bold;
        }
    </style>
</head>
<body>

	<!-- Top Navigation Bar -->
 	<div class="navbar">
        <div class="navbar-inner">
            <div class="container-fluid">
                <ul class="nav pull-right">
                    
                </ul>
                <a class="brand" href="index.html"><span class="first">Softway</span> <span class="second">Solutions</span></a>
            </div>
        </div>
    </div>

	<div class="container-fluid">
		@yield('content')
		
	</div>


	{{-- FOO --}}
	{{ basset_javascripts('winter') }}
	}
</body>
</html>