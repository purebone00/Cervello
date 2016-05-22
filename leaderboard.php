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

$sql = "INSERT INTO players (id, name,score)
VALUES ('" . $_POST['id'] . "','" . $_POST['name'] . "','" . $_POST['score'] . "');";

if ($conn->query($sql) == TRUE) {
	//echo " insert sucess";
} else {
	//echo " error insert " . $conn->error;
}

$sql = "SELECT * FROM players ORDER BY players.score DESC";
$result = $conn->query($sql);

?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="css/styles.css"/>
</head>
<body>
<?php
echo '<table id="leaderboardTable">
<tr>
<th>ID</th>
<th>Name</th>
<th>Score</th>
</tr>';

if ($result->num_rows > 0) {
	// output data of each row
	while($row = $result->fetch_assoc()) {
		echo "<tr>";
		echo "<td>" . $row["id"] . "</td>";
		echo "<td>" . $row["name"] . "</td>";
		echo "<td>" . $row["score"] . "</td>";
		echo "</tr>";
	}
} else {
	echo "0 results";
}

echo "</table>";
?>
</body>
</html>

<?php
$conn->close();
?>
