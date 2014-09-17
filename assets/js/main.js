$(document).ready(function() {  
	var stickyNavTop = $('.navbar').offset().top;    
		var stickyNav = function(){  
		var scrollTop = $(window).scrollTop();      
			if (scrollTop > stickyNavTop) {   
			    $('.navbar').addClass('sticky');  
			    $('.brand').addClass('sticky-brand');
			    $('.navbar-nav').addClass('navbar-nav-sticky');

		  } else {  
			    $('.navbar').removeClass('sticky'); 
			    $('.brand').removeClass('sticky-brand'); 
			    $('.navbar-nav').addClass('navbar-nav-sticky'); 
				 }  
		};  
		  
		stickyNav();  
	  
		$(window).scroll(function() {  
		    stickyNav();  
		});  


		$('.navbar a').click(function() {
			var targetId = $(this).attr('href');
			// console.log(targetId);

			var target = $(targetId);
			// console.log (target);

			var topDistance = target.position().top;
			// console.log (topDistance);

			$('body').animate({ scrollTop : topDistance });
			return false;
		});

		$('.scroll a').click(function() {
			var targetId = $(this).attr('href');
			// console.log(targetId);

			var target = $(targetId);
			// console.log (target);

			var topDistance = target.position().top;
			// console.log (topDistance);

			$('body').animate({ scrollTop : topDistance });
			return false;
		});
	
		$('.border.captionfull').on("hover", function(){
	        $(".cover", this).stop().animate({top:'230px'},{queue:false,duration:160});
	    	}, function() {
	        $(".cover", this).stop().animate({top:'300px'},{queue:false,duration:160});
    	});

});
