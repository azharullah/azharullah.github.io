$(document).ready(function(){

	$(".button-collapse").sideNav();

	$('.scrollspy').scrollSpy();

	$(window).scroll(function()
	{
		var winheight = $(window).scrollTop();
	    	// $(".fadeaway").css("opacity", 0.4 + winheight / 450);
	    	var dim = winheight / 10;
	    	if(dim < 65)
	    	{
			$("#res_img").height(dim);
			$("#res_img").width(dim);
	    	}
	    	var imdim = 200 - winheight / 3;
	    	if(imdim > 60)
	    	{
	    		$("#myimagemain").height(imdim);
	    		$("#myimagemain").width(imdim);
	    	}

	});

	$(".brand-logo").click(function(){
		jQuery('html,body').animate({scrollTop:0},3000);
	})

})

// $(".fadeaway").css("opacity", 0.4);
// $("#myimagemain").css("opacity", 1);

