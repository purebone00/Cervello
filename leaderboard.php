<?php
$servername = 'localhost';
$username = 'cervello';
$password = 'game';
$dbname = 'leaderboardDB';

$response = array();

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
	die('Connection failed: ' . $conn->connect_error);
}
//echo 'Connected successfully';

// sql to create table
$sql = "CREATE TABLE IF NOT EXISTS players (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL,
score INT(5) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
	//echo " record added successfully";
} else {
	//echo "Error creating table: " . $conn->error;
}

$sql = "SELECT * FROM players ORDER BY players.score DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	// output data of each row
	while($row = $result->fetch_assoc()) {
		$response[] = array("id"=>$row["id"], "name"=>$row["name"], "score"=>$row["score"]);
	}
} else {
	echo "0 results";
}

$conn->close();

echo json_encode($response);
?>
