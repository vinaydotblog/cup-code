# Useful Methods
app_path(), base_path(), public_path(), storage_path()

# Usefull Art

## Resourceful Controller
controller:make PhotosController

# Random ID
http://www.codersmount.com/2012/12/generate-random-strings-using-php/

# Schema
Schema::create('users')
rename($from, $to);
connection('sqlite')->create('useres')
drop('users')
dropIfExists('users')

$table->
	->increments('id')
	->string('email')
	->string('name', 100)
	->integer('votes')
	->bigInteger('votes')
	->smallInteger('votes')
	->float('amount')
	->decimal('amount', 5, 2)
	->boolean('confirmed')
	->date('created_at')
	->dateTime('created_at')
	->time('sunrise')
	->timestamp('added_on')
	->timestamps()
	->softDeletes()
	->text('description')
	->binary('data')
	->enum('choices', array('foo', 'bar'))
		->nullable()
		->default($value)
		->unsigned()

	$table->string('name')->after('email');
	->renameColumn('from', 'to');
	dropColumn('votes')
	dropColumn('votes', 'avatar', 'location')
	