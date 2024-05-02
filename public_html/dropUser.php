<?php
// Retrieve user ID from POST request
$userId = $_POST['userId'];

// Connect to your MySQL database
$servername = "localhost";
$username = "lhzdxcmy_WPHTV";
$password = "QTbLA43fVPF6WEu";
$database = "lhzdxcmy_WPHTV";
    
// Create connection
static $conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare SQL statement to update the user's dropped value
$sql = "UPDATE SMSP_User SET Dropped = '1' WHERE SessionID = '$userId'";

if ($conn->query($sql) === TRUE) {
    echo "User updated successfully";
} else {
    echo "Error updating user: " . $conn->error;
}

$conn->close();
?>