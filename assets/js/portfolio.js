// =============================
// NEW CODE
// =============================
$(document).ready(function() {  
	jQuery(window).load(function() {
		jQuery(".masonry-list").each(function() {
			var $container = jQuery(this);
			$container.waitForImages(function() {
				$container.masonry({
					itemSelector: '.masonry-item'
				});
			});
		});
	});

	jQuery("ul.isotope-filter").each(function() {
		var source = jQuery(this);
		var destination = jQuery("ul.sort-destination[data-sort-id=" + jQuery(this).attr("data-sort-id") + "]");
		if(destination.get(0)) {
			jQuery(window).load(function() {
				destination.isotope({
					itemSelector: "li",
					layoutMode: 'sloppyMasonry'
				});
				source.find("a").click(function(e) {
					e.preventDefault();
					var $this = jQuery(this),
						sortId = $this.parents(".sort-source").attr("data-sort-id"),
						filter = $this.parent().attr("data-option-value");
					source.find("li.active").removeClass("active");
					$this.parent().addClass("active");
					destination.isotope({
						filter: filter
					});
					// self.location = "#" + filter.replace(".","");
					jQuery(".sort-source-title[data-sort-id=" + sortId + "] strong").html($this.html());
					return false;
				});
			});
		}
	});

// Hover Effect - opacity effect
	jQuery('.portfolioList li').hover(function(){
		jQuery(this).siblings().addClass('faded');
	}, function(){
		jQuery(this).siblings().removeClass('faded');
	});

// AJAX POPUP
	$('.project_ajax').magnificPopup({
		type: 'ajax',
		overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});

});