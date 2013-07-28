{{ link_to_route('animals.create','New Animal') }}
<ul>
	@foreach( $animals as $animal )
		<li>{{ $animal->name }}</li>
	@endforeach
</ul>