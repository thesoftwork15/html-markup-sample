$(document).ready(function(){
	$(".tab").click(function(e) {
	e.preventDefault();
	$(".tab").removeClass("active");
	$(".tab-box").removeClass("show");
	$(this).addClass("active");
	$($(this).attr("href")).addClass("show");
});


 $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $('.help-btn').fadeIn();
        } else {
            $('.help-btn').fadeOut();
        }
    });



});

