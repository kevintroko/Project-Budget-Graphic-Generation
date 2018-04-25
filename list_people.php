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



    <!-- JS for Bootstrap -->
  <script src="js/bootstrap.js"></script>
</body>
</html>