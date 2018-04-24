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
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
		<!-- CSS Our-->
		<link rel="stylesheet" href="css/design.css">
		<link rel="stylesheet" href="css/login.css">
		
		
	</head>
	<body>
		<div class="container">
			<div class="row">
			
				<!-- Login Box -->
				<div class="container col-xs-12 col-sm-7" id="main-login">
					<h1 class="text-center">Project Budget Manager</h1>
					</br>
					
					<!-- Login Form -->
					<div class="row">
						<div class="container col-sm-7">
							<form action="home.php" method="post">
							
							
							
								<div class="form-group">
									<div class="input-group mb-3">
									  <div class="input-group-prepend">
										<span class="input-group-text" id="basic-addon1"><i class="material-icons">email</i></span>
									  </div>
									  <input type="text" name="email" class="form-control" placeholder="Enter your Email address" aria-label="Username" aria-describedby="basic-addon1">
									</div>
								</div>
								
								<div class="form-group">
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span class="input-group-text" id="basic-addon1"><i class="material-icons">lock</i></span>
										</div>
										<input type="password" name="password" class="form-control" placeholder="Enter your Password" aria-label="Username" aria-describedby="basic-addon1">
									</div>
								</div>
								
								</br>
								<input class="btn btn-lg btn-block" type="submit" value="Login">
							</form>
						</div>
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