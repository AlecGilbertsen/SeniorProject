//use this to play the correct sound when needed 
function playSound() 
{
    var audio = new Audio('https://www.vbl-s-mts.com/correctTone.wav');
    audio.play();
}
function startUp()
{
    document.cookie = "preTraining=false" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "preSym=false" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "preTrans=false" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "BLBlocksPassed=0" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "BLBlocksTaken=0" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "BLTestsTaken=0" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "BL=false" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "BLTest=false" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "Symmetry=false" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "SymmetryBlocksPassed=0" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "Trans=false" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "TransBlocksPassed=0" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "previousScore=none" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "Trend=0" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "SymTaken=0" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "TransTaken=0" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "PreTransTaken=0" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "PreTransTaken=0" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
    document.cookie = "completed=false" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
}
//functions that write passing cookies
function preTrainingPass(correctChoices)
{
    if(correctChoices >= 2)
    {
        document.cookie = "preTraining=true" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
        window.location.href = "https://www.vbl-s-mts.com/participant-tests/symmetry-pretest.html"
    }
}
//
function preSymPass(correctChoices, userID)
{
    if(Number(correctChoices) < 16)
    {
        document.cookie = "preSym=true" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
        window.location.href = "https://www.vbl-s-mts.com/participant-tests/transitivity-pretest.html"    
    }
    else
    {
        dropUser(userID)
        window.location.href = "https://www.vbl-s-mts.com/participant.html"
    }
}
function preSymChecker(correctChoices, userID)
{
     if(Number(correctChoices) > 16)
    {
        dropUser(userID)
        window.location.href = "https://www.vbl-s-mts.com/participant.html"
    }
    else;
}
function preTransChecker(correctChoices, userID)
{
     if(Number(correctChoices) > 24)
    {
        dropUser(userID)
        window.location.href = "https://www.vbl-s-mts.com/participant.html"
    }
    else;
}
//
function preTransPass(correctChoices, userID)
{
    if(Number(correctChoices) < 24)
    {
        document.cookie = "preTrans=true" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
        window.location.href = "https://www.vbl-s-mts.com/participant-tests/baseline-training.html"    
    }
}


//ALL COOKIE GETTER FUNCTIONS
function preTraining()
{
    var name = "preTraining=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
//gets preTraining Pass Value
function preSym()
{
    var name = "preSym=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
//gets preTraining Pass Value
function BL()
{
    var name = "BL=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
//gets preTraining Pass Value
function BLTest()
{
    var name = "BLTest=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
//gets preTraining Pass Value
function preTrans()
{
    var name = "preTrans=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
//gets preTraining Pass Value
function Symmetry()
{
    var name = "Symmetry=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
//gets preTraining Pass Value
function Trans()
{
    var name = "Trans=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
//gets number of passed baseline blocks
function BLBlocksTaken()
{
    var name = "BLBlocksTaken=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
//gets number of passed baseline blocks
function SymTaken()
{
    var name = "SymTaken=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
function TransTaken()
{
    var name = "TransTaken=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
//gets number of passed baseline blocks
function BLBlocksPassed()
{
    var name = "BLBlocksPassed=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
//gets number of passed baseline blocks
function BLTestsTaken()
{
    var name = "BLTestsTaken=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
//gets number of passed baseline blocks
function PreSymTaken()
{
    var name = "PreSymTaken=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
function PreTransTaken()
{
    var name = "PreSymTaken=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
//gets the number of passed transitivity test
function passedTrans()
{
    var name = "passedTransTests=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
//gets the number of passed symettry Test
function passedSym()
{
    var name = "passedSymTests=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
function SymmetryBlocksPassed()
{
    var name = "SymmetryBlocksPassed=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
function TransBlocksPassed()
{
    var name = "TransBlocksPassed=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
function previousScore()
{
    var name = "previousScore=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
function Trend()
{
    var name = "Trend=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
function completed()
{
    var name = "completed=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}

//takes in correct choices if it equals 24 move to test
function BLPass(correctChoices)
{
    if(Number(correctChoices) == 24)
    {
        var passedBlocks = Number(BLBlocksPassed());
        passedBlocks += 1;
        if(passedBlocks === 2)
        {
            document.cookie = "BLPass=true" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
            window.location.href = "https://www.vbl-s-mts.com/participant-tests/symmetry-test.html"
        }
        else
            document.cookie = "BLBlocksTaken=1" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
            window.location.href = "https://www.vbl-s-mts.com/participant-tests/baseline-training.html"
    }
    else
    {
        BLBlocksCompleted = BLBlocksTaken()
        BLBlocksCompleted++
        document.cookie = "BLBlocksTaken=" + BLBlocksCompleted + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
        window.location.href = "https://www.vbl-s-mts.com/participant-tests/baseline-training.html"
    }
    
}

//if they got 100 move them on
function BLTestPass(correctChoices, userID)
{
    if (Number(correctChoices) === 24)
    {
        document.cookie = "BLTest=true" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
        window.location.href = "https://www.vbl-s-mts.com/participant-tests/symmetry-test.html"
    }
    else
    {
        var testTaken = Number(BLTestsTaken())
        if(testTaken == 2)
        {
            dropUser(userID)
            window.location.href = "https://www.vbl-s-mts.com/participant.html"
        }
        else
        {
            testTaken++;
            document.cookie = "BLTestsTaken=" + testTaken + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
        }
    }
}

//passes in number of test scores over 92
function SymmetryPass(testOver92)
{
    var testPassed = Number(SymmetryBlocksPassed())
    if(Number(testOver92) >= .92)
    {
        if(testPassed == 1)
        {
            document.cookie = "Symmetry=true" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
            window.location.href = "https://www.vbl-s-mts.com/participant-tests/transitivity-test.html"
        }
        else
        {
            transScoreTrend(testOver92,Number(Trend()))
            document.cookie = "SymmetryBlocksPassed=1" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
            window.location.href = "https://www.vbl-s-mts.com/participant-tests/symmetry-test.html"
        }
    }
    else
    {
        transScoreTrend(testOver94,Number(Trend()))
        window.location.href = "https://www.vbl-s-mts.com/participant-tests/symmetry-test.html"
    }
}
//passes in number of test scores over 94
function TransitivityPass(testOver94)
{
    var testPassed = Number(TransBlocksPassed())
    if(Number(testOver94) >= .94)
    {
        if(testPassed == 1)
        {
            document.cookie = "Trans=true" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
            completeUser()
            window.location.href = "https://www.vbl-s-mts.com/participant.html"
        }
        else
        {
            transScoreTrend(testOver94,Number(Trend()))
            document.cookie = "TransBlocksPassed=1" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
            window.location.href = "https://www.vbl-s-mts.com/participant-tests/transitivity-test.html"
        }
    }
    else
    {
        transScoreTrend(testOver94,Number(Trend()))
        window.location.href = "https://www.vbl-s-mts.com/participant-tests/transitivity-test.html"
    }
}
//tracks number of baseline training blocks completed if over 24 drop
function blTestTracker(blocksCompleted, userID)
{
    if(Number(blocksCompleted) > 24)
    {
        dropUser(userID)
        window.location.href = "https://www.vbl-s-mts.com/participant.html"
    }
    else;
}

//subtracts testScore if thats greater than 1 continue, else pass 
function symScoreTrend(testScore, trend)
{
    var trend2 = Number(testScore) - Number(trend)
    if(Number(trend2) <= trend)
    {
        document.cookie = "Trend=0" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
        window.location.href = "https://www.vbl-s-mts.com/participant-tests/transitivity-test.html"
    }
    else
    {
        SymBlocksPassed = Number(SymmetryBlocksPassed())
        SymBlocksPassed++
        document.cookie = "Trend=" + trend2 + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
        document.cookie = "SymmetryBlocksPassed" + SymBlocksPassed + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
        window.location.href = "https://www.vbl-s-mts.com/participant-tests/symmetry-test.html"
    }
}
//subtrackts test3score-test2score-test1score if thats greater than 1 continue, else pass 
function transScoreTrend(testScore, trend)
{
    var trend2 = Number(testScore) - Number(trend)
    if(Number(trend2) <= 0)
    {
        document.cookie = "Trend=0" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
        window.location.href = "https://www.vbl-s-mts.com/participant-tests/transitivity-test.html"
        completeUser()
    }
    else
    {
        TBlocksPassed = Number(TransBlocksPassed())
        TBlocksPassed++
        document.cookie = "Trend=" + trend2 + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
        document.cookie = "TransBlocksPassed" + TBlocksPassed + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  // Expires far in the future
        window.location.href = "https://www.vbl-s-mts.com/participant-tests/transitivity-test.html"
    }
}

//fails the user at the end of the test
function dropUser(userID) {
    document.cookie = "dropped=true" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"; 
    // Send AJAX request to PHP script to update user in database
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("POST", "https://www.vbl-s-mts.com/dropUser.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("userId=" + userID);
}

//fails the user at the end of the test
function completeUser() {
    document.cookie = "completed=true" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  
}

//gets droppeds value
function getDroppedCookieValue() 
{
    var name = "dropped=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //else return blank string
    return "";
}
