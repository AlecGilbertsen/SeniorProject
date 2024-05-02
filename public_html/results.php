
<?php
    // this script will query the db upon loading for all user id's in the DB
    // turning this file into a php file was the only way to get it done...
    
    
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
    // good connection if here
    
    $sql= "select SessionID from SMSP_User where Dropped = 0";
    $sql2 = "select SessionID from SMSP_User where Dropped = 1";
    $result = $conn->query($sql);
    $result2 = $conn->query($sql2); 
    
    // check if query completes successfully

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Results Page</title>
    <!-- Specify the favicon -->
    <link rel="icon" type="image/png" href="1426963167.png">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navbar navbar-light">
        <div class="container-fluid" >
          <a class="navbar-brand" href="/index.html" style="background-color: transparent; color: black;  color: #741736; border-color: #741736;">
            <img src="1426963167.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
            Home
          </a>
         <div class="center">
               <button onclick="goBack()" style="background-color: #741736; border: none; color: white;">
               Go Back
               </button>
            </div>
        </div>
      </nav>
    <div class="center">
        <label for="NON-DROPPED">Non-Dropped Partcipants: </label>
        <form method="POST" action="/testResults.php">
            <select name="UserID" id = "NON-DROPPED">
                <?php 
                    // fetch 
                    while ($row = $result->fetch_assoc())
                    {
                       echo '<option value=" '.$row['SessionID'].' ">' . $row['SessionID'] .' </option>';
                    }
                ?>
            </select>
          <input type="submit" value="Submit"/>
        </form> 
        
        <label for="DROPPED">Dropped Participants: </label>
        <form method="POST" action="/testResults.php">
            <select name="UserID" id = "DROPPED">
                <?php 
                    // fetch 
                    while ($row = $result2->fetch_assoc())
                    {
                       echo '<option value=" '.$row['SessionID'].' ">' . $row['SessionID'] .' </option>';
                    }
                ?>
            </select>
          <input type="submit" value="Submit"/>
        </form> 
        
        
        
        
        <a href="/A1.html" type="button" style="background-color: #741736; color: black; color: white; border-color: #741736;">
            <form method="POST" action="/clearDB.php">
                <input type="submit" value="CLEAR ALL DATA">
            </form>
        </a>
    </div>
    
    
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script>
                 
        function goBack() {
            window.history.back();
        }
    </script>
    
</body>
</html>