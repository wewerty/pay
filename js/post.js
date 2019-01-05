var host = location.hostname;
$('#js-filters-masonry ul li').click(function(){
	document.location = "http://"+ host +"/search.php?id=" + $(this).attr('data-filter');
});