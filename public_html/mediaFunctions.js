// Function to retrieve media from the PHP file
function getfirstMedia(blockName, secondBlock) {
    // Make an AJAX request to the PHP file
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/getMedia.php", true); 
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Display the retrieved media in the media container
                document.getElementById("mediaContainer").innerHTML = xhr.responseText;
                document.getElementById("mediaContainer").style.display = "block";
                document.getElementById("greenBox").onclick = function() {
                    getSecondMedia(secondBlock);
                };
                // After 5 seconds, hide the media and show the green box
                setTimeout(function() {
                    document.getElementById("mediaContainer").style.display = "none";
                    document.getElementById("greenBox").style.display = "block";
                }, 5000);
            } else {
                console.error("Failed to retrieve media. Status code: " + xhr.status);
            }
        }
    };
    xhr.send("blockName="+blockName); // Pass the block name to the PHP file
}

// Function to retrieve media for B1
function getSecondMedia(blockName) {
    // Hide the media container before retrieving media for B1
    document.getElementById("mediaContainer").style.display = "none";
    document.getElementById("greenBox").style.display = "none";
    // Set the media container display to block before retrieving media for B1

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/getMedia.php", true); 
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Display the retrieved media in the media container
                document.getElementById("mediaContainer").innerHTML = xhr.responseText;
                document.getElementById("mediaContainer").style.display = "block";
            } else {
                console.error("Failed to retrieve media. Status code: " + xhr.status);
            }
        }
    };
    xhr.send("blockName="+blockName); // Pass the block name to the PHP file
}

// Function to send data
function sendData(BlockName, SessionID, StimA, StimB, PhaseName, Matched, Comptime, UserGuess, Result) {
    if(UserGuess === 1)
    {
        // Your code to send data
        console.log("Sending data...");
        var formData = new FormData();
        formData.append('BlockName', BlockName);
        formData.append('SessionID', SessionID);
        formData.append('StimA', StimA);
        formData.append('StimB', StimB);
        formData.append('PhaseName', PhaseName);
        formData.append('Matched', Matched);
        formData.append('Comptime', Comptime);
        formData.append('UserGuess', UserGuess);
        formData.append('Result', Result);

        // Create an AJAX request
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://www.vbl-s-mts.com/sendData.php", true);

        // Define what happens on successful data submission
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log("Data sent successfully.");
                } 
                else 
                {
                    console.error("Failed to send data. Status code: " + xhr.status);
                }
            }
        };

        // Send the FormData object
        xhr.send(formData);
        return true;
    }
    else;
}
function sendDataNoClick(BlockName, SessionID, StimA, StimB, PhaseName, Matched, Comptime, UserGuess, Result) {
    if(UserGuess === 0)
    {
        // Your code to send data
        console.log("Sending data...");
        var formData = new FormData();
        formData.append('BlockName', BlockName);
        formData.append('SessionID', SessionID);
        formData.append('StimA', StimA);
        formData.append('StimB', StimB);
        formData.append('PhaseName', PhaseName);
        formData.append('Matched', Matched);
        formData.append('Comptime', Comptime);
        formData.append('UserGuess', UserGuess);
        formData.append('Result', Result);

        // Create an AJAX request
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://www.vbl-s-mts.com/sendData.php", true);

        // Define what happens on successful data submission
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log("Data sent successfully.");
                } 
                else 
                {
                    console.error("Failed to send data. Status code: " + xhr.status);
                }
            }
        };

        // Send the FormData object
        xhr.send(formData);
        return false;
    }
    else;
}

// Function to remind after 4 seconds
function Reminder(value) 
{
    if (value == 1) 
    {
        var message = document.createElement('div');
        message.classList.add('reminder-message');
        message.textContent = 'Click the white box in the center of the screen.';
        document.body.appendChild(message);
        setTimeout(function() {
            document.body.removeChild(message);
        }, 6000);
    } 
    else;
}