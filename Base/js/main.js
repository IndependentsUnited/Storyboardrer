$('document').ready(function(){
	
	$('h1.title').html(config.title);
	
	// Load tiles
	
	$.each(data, function(i,item){
		
		var source   = $("#tile_template").html();
		var template = Handlebars.compile(source);
		var html     = template(item);
		
		$(html).appendTo('.wrapper .grid');
		
	});
		
});