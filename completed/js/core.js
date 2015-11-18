$(function() {

	$('#submit').live('click', function() {
		var form = $(this).closest('form');
		var form_clone = form.clone();
		// call ajax preform validation etc.
		form.replaceWith($('<div class="confirmation">Form has been submitted successfully</div>').fadeIn(300, function() {
			setTimeout(function() {
				$('.confirmation').fadeOut(300, function() {
					$(this).replaceWith($(form_clone).fadeIn(300));
				});
			}, 2000);
		}));
	});

});