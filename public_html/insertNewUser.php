<?php
// Retrieve user ID from POST request
$userId = $_POST['userId'];

// Connect to your MySQL database
$servername = "localhost";
$username = "lhzdxcmy_WPHTV";
$password = "QTbLA43fVPF6WEu";
$database = "lhzdxcmy_WPHTV";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare SQL statement
$sql = "INSERT INTO SMSP_User (SessionID, Dropped) VALUES ('$userId', '0')";

if ($conn->query($sql) === TRUE) {
    echo "User inserted successfully";
} else {
    // Log error
    error_log("Error: " . $sql . "<br>" . $conn->error);
    // Return error message
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>