/**
 * @author: Dao Duc Cuong
 * @update at: 18 January 2015 (Sunday) 20:24
 */
 (function ($) {
  $(document).ready(function(){

    // hide .navigation-bar first
    $(".navigation-bar").hide();
    $(".cover-info").hide();

    // fade in .navigation-bar
    $(function () {
        $(window).scroll(function () {

            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 200) {
                $('.navigation-bar').fadeIn();
                $("a").click(function(e) {
			    	var t = $(this).attr("href");
			    	if (!(t === '#hobby' || t === '#reference')) {
			    		console.log(t);
				    	var element = $(t);
				    	element.css('padding-top', '72px');
				    }
			    });
            } else {
                $('.navigation-bar').fadeOut();
                $('.body-section').css('padding-top', '0px');
            }
        });
    });

    $(".cover-img").hover(function() {
    	$(".cover-info").fadeIn();
    }, function() {
		$(".cover-info").fadeOut();
    });
});
}(jQuery));