<link rel="stylesheet" href="css/notifications.css">

<nav class="navbar navbar-expand-lg navbar-light bottom-border">
	<a class="navbar-brand" href="index.php">Project Budget Manager</a>
	<div class="navbar-nav">
		<a class="nav-item nav-link" href="profile.php">Name Lastname</a>
		<a class="nav-item nav-link" href="#Notification" 
			data-toggle="popover" 
			data-placement="bottom" 
			data-html="true" >
				Notification
		</a>
		
		<a class="nav-item nav-link" href="index.php">Log out</a>
	</div>
	
	<?php include_once ("notifications.php");?>
</nav>