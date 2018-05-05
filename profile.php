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
		<link rel="stylesheet" href="css/profile.css">
		<link rel="stylesheet" href="css/navbar.css">
    <!-- Icons links -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	</head>

<body>

<?php include_once ("navbar.php"); ?>

  <div class="container">
    <div class="row">
      <div class="col">
        <div class="title">
					Profile
        </div>
      </div>
    </div>
		<!--Start of row!-->
    <div class="row">
			<!--Column 1!-->
			<div class="col">
				 <!--Panel of data!-->
					<div class="row panel">
						<div class="col-3 bold">
							<p>Name: </p>
							<p>Lastname:</p>
							<p>Email:</p>
							<p>Role:</p>
						</div>
						<div class="col">
							<p>John</p>
							<p>Bergstrom</p>
							<p>john.bergstrom@student.mdh.se</p>
							<p>Professor</p>
						</div>
					</div>
					<div class="button panel bold shadow"  data-toggle="modal" data-target="#myModal">
						add to project
					</div>

					<!-- Modal -->
					<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					  <div class="modal-dialog center-modal" role="document">
					    <div class="modal-content">
					      <div class="modal-header center-text">
					        <h5 class="modal-title" id="exampleModalLabel">Add user to project</h5>
					        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					          <span aria-hidden="true">&times;</span>
					        </button>
					      </div>
					      <div class="modal-body center-text margins">
									<form>
										<label for="inputState">Project</label>
										<select id="inputState" class="form-control margins">
											<option selected>Choose project...</option>
											<option>Volvo project - 10%</option>
											<option>MDH project - 90%</option>
											<option>Coop project - 40%</option>
											<option>Nils project - 50%</option>
										</select>
									  <div class="form-group">
									    <label for="formGroupExampleInput">Workflow</label>
									    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Insert Workflow">
									  </div>
									</form>

					      </div>
					      <div class="modal-footer">
					        <button type="button" class="button panel bold" data-dismiss="modal">Cancel</button>
					        <button type="button" class="button panel bold">Confirm</button>
					      </div>
					    </div>
					  </div>
					</div>
			</div>
			 <!--Column 2!-->
			<div class="col graph">
					<img src="img/graph.png" style="width:100%;">
			</div>
    </div>
  </div>

    <!-- Bootstrap javascript libs -->
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
	<script type="text/javascript" src="js/activatePopups.js"></script>
</body>
</html>
