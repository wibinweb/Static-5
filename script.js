$(function(){
	$(".burger").click(function(i){
		i.preventDefault();
		$(".burger").toggleClass("open");
		$("footer").toggleClass("open");
		$("header").toggleClass("open");
	});
});
