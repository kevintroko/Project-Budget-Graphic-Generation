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
		<link rel="stylesheet" href="css/list.css">
    <!-- Icons links -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	</head>

<body>

<?php include_once ("navbar.php"); ?>

  <div class="container">
    <div class="row">
      <div class="col">
        <div class="title">
          <span id=active>People</span> <a href="list_project.php" id=inactive>Project</a>
        </div>
      </div>
    </div>
    <div class="row">
      <table class="table">
  <thead>
    <tr class="table-row">
      <th scope="col">Name <i class="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></th>
      <th scope="col">Lastname <i class="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></th>
      <th scope="col">Email <i class="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></th>
      <th scope="col">Role <i class="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></th>
      <th scope="col">Projects <i class="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></th>
      <th scope="col">Workflow <i class="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>Bergstrom</td>
      <td>john.bergstrom@mdh.se</td>
      <td>professor</td>
      <td>3</td>
      <td>60%</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Bergstrom</td>
      <td>john.bergstrom@mdh.se</td>
      <td>professor</td>
      <td>3</td>
      <td>60%</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Bergstrom</td>
      <td>john.bergstrom@mdh.se</td>
      <td>professor</td>
      <td>3</td>
      <td>60%</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Bergstrom</td>
      <td>john.bergstrom@mdh.se</td>
      <td>professor</td>
      <td>3</td>
      <td>60%</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Bergstrom</td>
      <td>john.bergstrom@mdh.se</td>
      <td>professor</td>
      <td>3</td>
      <td>60%</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Bergstrom</td>
      <td>john.bergstrom@mdh.se</td>
      <td>professor</td>
      <td>3</td>
      <td>60%</td>
    </tr>
  </tbody>
</table>
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
