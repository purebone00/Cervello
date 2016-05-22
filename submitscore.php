<?php
$servername = 'localhost';
$username = 'cervello';
$password = 'game';
$dbname = 'leaderboardDB';

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

$sql = "INSERT INTO players (name,score)
VALUES ('" . $_POST['name'] . "','" . $_POST['score'] . "');";

if ($conn->query($sql) == TRUE) {
	//echo " insert sucess";
} else {
	//echo " error insert " . $conn->error;
}

$conn->close();
$data = "yay";
echo $data;
?>
