<?php
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

// Get block name from form data
if (isset($_POST["blockName"])) {
    $blockName = $_POST["blockName"];

    // Retrieve block address from the database
    $sql = "SELECT blockAddress FROM soundAndImage_t WHERE blockName = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $blockName);
    $stmt->execute();
    $stmt->bind_result($blockAddress);
    $stmt->fetch();
    $stmt->close();

    // Display the media if block address is found
    if ($blockAddress) {
        displayMedia($blockAddress);
    } else {
        echo "<p>No media found for Block $blockName</p>";
    }
} else {
    echo "<p>No block name provided.</p>";
}

$conn->close(); // Close the database connection

// Function to display media
function displayMedia($blockAddress) {
    $baseUrl = "https://www.vbl-s-mts.com/";
    $fileExtension = pathinfo($blockAddress, PATHINFO_EXTENSION);
    
    if (in_array($fileExtension, array("jpg", "jpeg", "png", "gif", "webp"))) {
        echo "<img src='$baseUrl$blockAddress' alt='Image'>";
    } elseif (in_array($fileExtension, array("mp3", "wav", "ogg","mp4"))) {
        echo "<audio controls autoplay=true><source src='$baseUrl$blockAddress' type='audio/mpeg'></audio>";
    } else {
        echo "<p>Unknown file type</p>";
    }
}
?>