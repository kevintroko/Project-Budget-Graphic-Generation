<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<!------ Include the above in your HEAD tag ---------->

<!DOCTYPE html>
<html lang="en">
    <head> 
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Project Management System</title>
		<!-- CSS other -->
		<link rel="stylesheet" href="css/bootstrap.css" id="bootstrap-css">
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
		<!-- CSS Our-->
		<link rel="stylesheet" href="css/design.css">
		<link rel="stylesheet" href="css/login.css">
		
		
	</head>
	<body>
		<div class="container">
			<div class="row">
			
				<!-- Login Box -->
				<div class="container col-xs-12 col-sm-6 col-sm-offset-3" id="main-login">
					<h1 class="text-center">Project Budget Manager</h1>
					</br>
					
					<!-- Login Form -->
					<div class="row">
						<div class="container col-sm-7">
							<form action="home.php" method="post">
							
								<div class="form-group">
									<label for="email">Email</label>
									<div class="input-group">
										<span class="input-group-addon"><i class="material-icons">email</i></span>
										<input placeholder="Enter your Email address" class="form-control" name="email" type="text"/>
									</div>
								</div>
								
								<div class="form-group">
									<label for="password">Password</label>
									<div class="input-group">
										<span class="input-group-addon"><i class="material-icons">lock</i></span>
										<input placeholder="Enter your Password" class="form-control" name="password" type="password"/>
									</div>
								</div>
								
								</br>
								<input class="btn btn-lg btn-block shadow" type="submit" value="Login">
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

		<script type="text/javascript" src="js/bootstrap.js"></script>
	</body>
</html>