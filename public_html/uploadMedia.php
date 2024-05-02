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
    echo "Error uploading file.";
    die("Connection failed: " . $conn->connect_error);
}
else
{
    echo "made it past connection :)";
}

// Define the target directory for uploads
$targetDir = "uploads/";

// Define the filename for the uploaded file
$fileName = "uploaded_file_" . $_POST["name"]; // Concatenating with the name passed into the PHP

// Get the file extension from the uploaded file
$fileExtension = pathinfo($_FILES["file"]["name"], PATHINFO_EXTENSION);

// Construct the full path for the uploaded file
$targetFile = $targetDir . $fileName . '.' . $fileExtension;

// Check if the file was uploaded without errors
if (isset($_FILES["file"]) && $_FILES["file"]["error"] == 0) {
    // Move the uploaded file to the destination directory
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
        // Update the corresponding row in the database
        $sql = "UPDATE soundAndImage_t SET blockAddress = ? WHERE blockName = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $targetFile, $_POST["name"]); // Using $_POST["name"] to get the name sent from the HTML form
        $stmt->execute();
        $stmt->close();
        
        exit(); // Ensure that no further code is executed after the redirect
    } else {
        // Error moving the file
        echo "Error uploading file.";
    }
} else {
    // No file uploaded or an error occurred
    echo "No file uploaded or an error occurred.";
}

$conn->close(); // Close the database connection
?>