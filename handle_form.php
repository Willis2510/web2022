<html>
	<head>
		<title> recieving from form </title>
	</head>

<body>
<?php

	$name = $_POST['firstname'];
	$gender = $_POST['gender'];
	$hobby = $_POST['hobby'];

	echo $name. '\'s gender is '. $gender. ' and favorite hobby is '. $hobby. '.';
?>
</body>
</html>
