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
		<!-- Icons !-->
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<!-- CSS Our-->
		<link rel="stylesheet" href="css/design.css">
		<link rel="stylesheet" href="css/home.css">
		<link rel="stylesheet" href="css/editIcons.css">
	</head>

	<body>
		<?php include_once ("navbar_admin.php"); ?>

		<div class="container">
			<div class="row boxes" id="admin">
				<!--Project template !-->
      <div class="col-12 col-md-6">
					<div class="project shadow center">
							<!-- <p>Project <i class="material-icons vertical-align-middle padding-bottom-3">business_center</i></p> -->
              <p>Project</p>
					</div>
			</div>
        <div class="col-12 col-md-6">
          <div class="project shadow center">
              <!-- <p>People <i class="material-icons vertical-align-middle padding-bottom-3">group</i></p> -->
              <p>People</p>
          </div>
      </div>
      <div class="col-12 col-md-12">
				<div class="project shadow center" href="activity_log.php">
            <!-- <p>Activity log <i class="material-icons vertical-align-middle padding-bottom-3">format_align_justify</i></p> -->
            <p>Activity log</p>
        </div>
    	</div>
	   </div>
		</div>

		<!-- Bootstrap javascript libs -->
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
	</body>
</html>
