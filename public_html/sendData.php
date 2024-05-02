<?php
// Check if all required fields are set
if (
    isset($_POST['BlockName']) && isset($_POST['SessionID']) && isset($_POST['StimA']) &&
    isset($_POST['StimB']) && isset($_POST['PhaseName']) && isset($_POST['Matched']) &&
    isset($_POST['Comptime']) && isset($_POST['UserGuess']) && isset($_POST['Result'])
) {
    // Assign variables from $_POST
    $BlockName = $_POST['BlockName'];
    $SessionID = $_POST['SessionID'];
    $StimA = $_POST['StimA'];
    $StimB = $_POST['StimB'];
    $PhaseName = $_POST['PhaseName'];
    $Matched = $_POST['Matched'];
    $Comptime = $_POST['Comptime'];
    $UserGuess = $_POST['UserGuess'];
    $Result = $_POST['Result'];

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
    $stmt = $conn->prepare("INSERT INTO SMSP_Block (BlockName, SessionID, StimA, StimB, PhaseName, Matched, Comptime, UserGuess, Result) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");

    // Bind parameters
    $stmt->bind_param("sssssssss", $BlockName, $SessionID, $StimA, $StimB, $PhaseName, $Matched, $Comptime, $UserGuess, $Result);

    // Execute SQL statement
    if ($stmt->execute() === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close connection
    $stmt->close();
    $conn->close();
} else {
    echo "Error: Required fields are missing";
}
?>