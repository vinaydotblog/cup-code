<h2>Create New Animal</h2>
	@if( $errors->any() )
		<h3>Errors</h3>
		<ul>
			@foreach($errors as $error)
				<li>{{ $error->fooback() }}</li>
			@endforeach
		</ul>
	@endif
{{Form::open(['route' => 'animals.store'])}}
	<p>{{ Form::text('name') }}</p>
	<p>{{ Form::textarea('description') }}</p>
	{{ Form::submit('Save') }}

{{Form::close()}}