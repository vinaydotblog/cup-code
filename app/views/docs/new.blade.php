@section('head')

<style>
	form.big {

	}

	form.big .input {
		margin-bottom: 20px;
		width: 100%;
	}

	form.big label, form.big input, textarea {
		font-size: 1.5em;
	}

	form.big label {
		display: block;
	}

	form.big .input input, textarea {
		padding: 10px;
		border: 1px inset #ddd;
		display: block;
		font-family: sans-serif;
		width: 90%;
	}

	form.big textarea {
		resize: vertical;
		min-height: 300px;
	}

	form.big .submit {

	}

	form.big .submit input{
		width: 90%;
		background-color: #bada55;
		color: #000;
		padding: 10px;
		display: block;
		border: 1px solid #eee;
	}
</style>

@endsection

{{-- Fun Part starts here... --}}
@section('content')

<h2>New Post</h2>
<form class="big" action="">
	<div class="input"><label for="title">Title</label><input type="text"></div>
	<div class="input">
		<label for="content">Content</label>
		<textarea name="" id=""></textarea>
	</div>
	<div class="input"><label for="tags">Tags</label><input type="text"></div>
	<div class="submit"><input type="submit" value="save" class="btn"></div>
</form>

<script src="http://localhost/jquery.js"></script>
<script>
	$('form').on('submit', function(e){
		e.preventDefault();

		alert("YES");
	});
</script>


@endsection
