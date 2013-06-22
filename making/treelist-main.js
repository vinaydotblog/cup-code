
require.config({
	paths : {
		treelist : '../js/modules/treelist',
		text : '../js/ace/requirejs/text',
		jquery : '../js/libs/jquery.min'
	}
});

require(['treelist'], function(tl){
	$('.treelist').treelist();
});