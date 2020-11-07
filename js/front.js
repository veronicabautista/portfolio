$(function() {

		// -- Projects menu -- //

  $("#filter a").click(function(e) {
    e.preventDefault();

    $("#filter li").removeClass("active");
    $(this)
      .parent("li")
      .addClass("active");

    var categoryToFilter = $(this).attr("data-filter");

    $(".reference-item").each(function() {
      if (
        $(this).data("category") === categoryToFilter ||
        categoryToFilter === "all"
      ) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

	
	// -- Go top button -- //

	$('.go-top').click(function(){
		$('body, html').animate({
				scrollTop: '0px'
		}, 1000);
	});

	$(window).scroll(function(){
			if( $(this).scrollTop() > 0 ){
					$('.go-top').slideDown(800);
			} else {
					$('.go-top').slideUp(800);
			}
  });

  // -- Send contact form -- //

  $('#contact-form').submit(function(e){
    $.ajax({
        url:'/cgi-bin/mail',
        type:'get',
        data:$('#contact-form').serialize(),
        success:function(){
          alert("Su mensaje ha sido enviado");
        }
    });
  });
  
  
});



