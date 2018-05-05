$("[data-toggle=popover]").popover({
	html: true, 
	content: function() {
		return $('#notifications-container').html();
	}
});