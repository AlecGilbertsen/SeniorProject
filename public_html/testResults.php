<?php

// delete user and their data from db after retrieving
function killUser($uid)
{
    $conn = db(); 
    
    $clear_block = "DELETE FROM `SMSP_Block` WHERE SessionID = ?";     
    $q2 = $conn->prepare($clear_block); 
    $q2->bind_param('s', $uid); 
    $q2->execute();
    
    
    $clear_user = "DELETE FROM SMSP_User WHERE SessionID = ?"; 
    $q1 = $conn->prepare($clear_user); 
    $q1->bind_param('s', $uid); 
    $q1->execute(); 
    

}




 // Zip files and download
function zipAndDip($uid)
{
    $rootPath = realpath("RESULTS"); // finds root path
    
    $zipName = $uid."_RESULTS.zip"; // name of new zip folder
    
    $zip = new ZipArchive(); 
    $zip->open($zipName,ZipArchive::CREATE | ZipArchive::OVERWRITE);
    
    // Create recursive directory iterator
    $files = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($rootPath),
        RecursiveIteratorIterator::LEAVES_ONLY
    );
    
    foreach ($files as $file)
    {
        // Skip directories (they would be added automatically)
        if (!$file->isDir())
        {
            // Get real and relative path for current file
            $filePath = $file->getRealPath();
            $relativePath = substr($filePath, strlen($rootPath) + 1);
    
            // Add current file to archive
            $zip->addFile($filePath, $relativePath);
        }
    }
    
    // Zip archive will be created only after closing object
    $zip->close();
    
    header("Content-type: application/zip"); 
    header("Content-Disposition: attachment; filename=$zipName");
    header("Content-length: " . filesize($zipName));
    header("Pragma: no-cache"); 
    header("Expires: 0");
    ob_clean(); 
    flush(); 
    readfile("$zipName");
    exit; 
}



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
    return $conn;
}



// creates and writes to the .txt files in the phase
// directories
// $path = RESULTS/<phaseName>/<block>/
function writeResults($path, $stmt, $user, $phase, $block)
{   

    // bind result to the vars
    if (!$stmt->bind_result( $StimA, $StimB, $Matched, $Comptime, $UserGuess, $Result)) { echo "---- BAD BINDING ----<br>"; }
        
        
    $headerStr = "UserID: ". $user .  "\n" .
                 "Phase: ". $phase . "\n". 
                 "Block: block". $block . "\n";  
    $columnStr = "\n\n| StimA --- StimB --- UserGuess --- CompTime --- Result |\n";
        
        //open and build base formatting for result file
        $output = fopen($path.".txt", "w");
        fwrite($output, $headerStr);
        fwrite($output, $columnStr);
        
        
        while($stmt->fetch())
        {
            $formatComp = number_format($Comptime, 2, '.', '');
            
            // TODO: Cleanup formatting
            fwrite($output, "| ");
            fwrite($output, $StimA . "       |");
            fwrite($output, $StimB . "        |"); 
            fwrite($output, $UserGuess . "           |");
            fprintf($output, '%01.3f       |', $formatComp); 
            fwrite($output, $Result); 
            fwrite($output, "     |\n");
        
        }
        $stmt->free_result();
        $stmt->close(); 
        fclose($output);
        
       // echo "end of writeResults <br>"; 

}



// runs the sql that pulls results
// from db based on userID , phase
function getResults($user, $phase,$block)
{       
        $blockName = "block".$block; 
 
        $conn = db(); // make db connection
        // query db for test data
        $sql = "select StimA, StimB, Matched, Comptime, UserGuess, Result from SMSP_Block where SessionID = ? AND PhaseName = ? AND BlockName = ?"; 
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $user, $phase, $blockName); 
        if(!$stmt->execute()) {echo "---- BAD EXE ----"; };

        $stmt->store_result(); // make sure result set is generated
        
        // path to write to
        $path = "RESULTS/".$phase."/block".$block; 
        
        // after obtaining results
        writeResults($path, $stmt, $user, $phase, $block);

}



// ------- Main execution -------


// TODO: 
// -- clean RESULTS directory after download

if (isset($_POST["UserID"]))
{
   $uid = $_POST["UserID"];

    
    $phases = [ "pre_training", 
                "Sym",
                "Trans",
                "BL",
                "BL(Test)",
                "pre_symmetry",
                "pre_transitivity"
              ]; 
    
   
    
    $newUID = substr($uid,1,15); // get rid of extra random chars
    foreach ($phases as &$phaseName) // for each phase
    {
        if ($phaseName == "BL"){
            for ($block = 1; $block <=10; $block++) 
            {
                getResults($newUID, $phaseName, $block); 
            }
        }
        if ($phaseName == "Sym" || $phaseName == "Trans" )
        {
            for ($block = 1; $block <=6; $block++) 
            {
                getResults($newUID, $phaseName, $block); 
            }
        }
        if ($phaseName == "pre_symmetry" || $phaseName == "pre_transitivity" || $phaseName == "BL(Test)")
        {
            for ($block = 1; $block <=3; $block++) 
            {
                getResults($newUID, $phaseName, $block); 
            }
        }
        if ($phaseName == "pre_training")
        {
            getResults($newUID, $phaseName, 1); 
        }
    }
    
}
else
{
  echo "Bad user id..."; 
}


//killUser($newUID); // kill user after getting the data


$conn = db();
$conn->close(); 


//create zip and download
zipAndDip($newUID);



// remove file from server now
$fileToDelete = $newUID."_RESULTS.zip"; 
if (file_exists($fileToDelete)) 
{
    unlink(realPath($fileToDelete));
}
else { echo "bruh"; }


?>