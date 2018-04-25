<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Project Management System</title>
		<!-- CSS other -->
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
		<!-- CSS Our-->
		<link rel="stylesheet" href="css/design.css">
		<link rel="stylesheet" href="css/home.css">
		<!-- Icons !-->
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

	</head>

	<body>
		<?php include_once ("navbar.php"); ?>

		<div class="container">
			<div class="row filter shadow d-flex justify-content-around p-2">
				<div class="p-2 filter-text">Owner <i class="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></div>
			  <div class="p-2 filter-text">Project name	 <i class="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></div>
			  <div class="p-2 filter-text">Budget percentage  <i class="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></div>
				<div class="p-2 filter-text">Budget left  <i class="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></div>
			</div>

			<div class="row boxes">
				<!--Project template !-->
				<div class="col-12 col-md-6">
					<div class="project shadow">
							<p class="bold title inline-block">Title</p>
							<div class="percentage bold">10%</div>
							<p class="bold">Owner: <span class="nobold">Project Owner</span></p>
							<P class="bold">Budget: <span class="nobold">1,000,000/5,000,000</span></p>
							<p class="italic">Description of the project to be done hahah</p>
					</div>
			</div>
			<!--Project template !-->
			<div class="col-12 col-md-6">
				<div class="project shadow">
						<p class="bold title inline-block">Title</p>
						<div class="percentage bold">10%</div>
						<p class="bold">Owner: <span class="nobold">Project Owner</span></p>
						<P class="bold">Budget: <span class="nobold">1,000,000/5,000,000</span></p>
						<p class="italic">Description of the project to be done hahah</p>
				</div>
		</div>
		<!--Project template !-->
		<div class="col-12 col-md-6">
			<div class="project shadow">
					<p class="bold title inline-block">Title</p>
					<div class="percentage bold">10%</div>
					<p class="bold">Owner: <span class="nobold">Project Owner</span></p>
					<P class="bold">Budget: <span class="nobold">1,000,000/5,000,000</span></p>
					<p class="italic">Description of the project to be done hahah</p>
			</div>
	</div>
	</div>
		</div>

		<!-- Bootstrap javascript libs -->
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
	
		<!-- Our own scripts -->
		<script type="text/javascript" src="js/activatePopups.js"></script>
	</body>
</html>
