
@section('content')

<div class="row-fluid">
	<div class="dialog span4">
	    <div class="block">
	        <div class="block-heading">Sign In</div>
	        <div class="block-body">
	            <form method="post" >
	                <label>Username</label>
	                <input type="text" class="span12" autofocus>
	                <label>Password</label>
	                <input type="password" class="span12">
	                <button class="btn btn-primary pull-right">Sign In</button>
	                <label class="remember-me"><input type="checkbox"> Remember me</label>
	                <div class="clearfix"></div>
	            </form>
	        </div>
	    </div>
	    <p class="pull-right" style=""><a href="http://www.portnine.com" target="blank">Theme by Portnine</a></p>
	    
	    <p><a href="reset-password.html">Forgot your password?</a></p>
	</div>
</div>

@endsection