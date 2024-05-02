<?php


// return static database connection
function db()
{
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
    // good connection if here
    echo "Connection Established...<br>";
    return $conn;
}


// ------- MAIN EXECUTION ------

// connection
$conn = db(); 

$clear_user = "DELETE FROM SMSP_User"; 
$clear_block = "DELETE FROM SMSP_Block";

// now execute both
$conn->query($clear_block); //
$conn->query($clear_user); // 

$conn->close(); 


?>