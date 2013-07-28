<!doctype html>
<html>
  <head>
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="http://localhost/assets/css/bootstrap.css" rel="stylesheet">

    <style>
      p.shift {
        height: 30px;
      }
    </style>
    
    @section('head')
    @show
  </head>
  <body>
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="#">Assessment Tool</a>
          <div class="nav-collapse collapse">
            <ul class="nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>
	<p class="shift"></p>
    <div class="container">

      @yield('content')

    </div> <!-- /container -->
    <!-- <script src="js/bootstrap.min.js"></script> -->
  </body>
</html>