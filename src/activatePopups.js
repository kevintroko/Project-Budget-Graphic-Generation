import React from 'react';

$("[data-toggle=popover]").popover({
	html: true,
	content: function() {
		return $('#notifications-container').html();
	}
});
