<?php
	echo $_POST["file"];
	file_put_contents("db.xml", $_POST["file"]);
	
?>	
	