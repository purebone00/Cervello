<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'leaderboardDB';


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
} 
echo 'Connected successfully';



// sql to create table
$sql = "CREATE TABLE IF NOT EXISTS players (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(30) NOT NULL,
score INT(5) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo " record added successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

<<<<<<< Updated upstream
=======
$sql = "INSERT INTO `players` (`id`, `name`, `score`) VALUES ('$_POST['id']', '$_POST['name']', '$_POST['score']')";
>>>>>>> Stashed changes



if ($conn->query($sql) == TRUE) {
	echo " insert sucess";
} else {
	echo " error insert " . $conn->error;
}




$sql = "SELECT * FROM players";
$result = $conn->query($sql);



if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "\n id: " . $row["id"]. " - Name: " . $row["name"]. " - Score: " . $row["score"]. "<br>";
    }
} else {
    echo "0 results";
}



$conn->close();


?>
<html>
<body>
<table>
	
		<td>id: </td>
		<td><?php echo $_POST["id"];?></td>
	
	
		<td>-Name</td>
		<td><?php echo $_POST["name"]; ?></td>
	
	
		<td>-Score </td>
		<td><?php echo $_POST["score"]; ?></td>
		
</table>
</body>
</html>