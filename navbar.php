<link rel="stylesheet" href="css/notifications.css">

<nav class="navbar navbar-expand-lg navbar-light bottom-border ">
	<a class="navbar-brand" href="home.php">Project Budget Manager</a>
	<div class="navbar-nav w-100">
	
		<a class="nav-item nav-link" href="list_people.php">Database</a>
		
		
		<a class="nav-item nav-link ml-auto" href="#"
			data-toggle="popover" 
			data-placement="bottom" 
			data-html="true" >
				Notifications
		</a>
		<a class="nav-item nav-link" href="profile.php">Name Lastname</a>
		<a class="nav-item nav-link" href="index.php">Log out</a>
	</div>
	
	<?php include_once ("notifications.php");?>
</nav>