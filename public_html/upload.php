<?php
// Define the target directory for uploads
$targetDir = "uploads/";

// Define the filename for the uploaded file
$fileName = "uploaded_file"; // You can change this to whatever name you prefer

// Get the file extension from the uploaded file
$fileExtension = pathinfo($_FILES["file"]["name"], PATHINFO_EXTENSION);

// Construct the full path for the uploaded file
$targetFile = $targetDir . $fileName . '.' . $fileExtension;

// Check if the file was uploaded without errors
if (isset($_FILES["file"]) && $_FILES["file"]["error"] == 0) {
    // Move the uploaded file to the destination directory
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
        // Redirect the user back to the admin page if upload is successful
        header("Location: admin.html");
        exit(); // Ensure that no further code is executed after the redirect
    } else {
        // Error moving the file
        echo "Error uploading file.";
    }
} else {
    // No file uploaded or an error occurred
    echo "No file uploaded or an error occurred.";
}
?>
