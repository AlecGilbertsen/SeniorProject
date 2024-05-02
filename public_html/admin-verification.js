function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check against hardcoded values
    if (username === "testeradmin1" && sha256(password) === "c4368609bb151dadbbeac4913c57f264482a94a013487ea207b931e87423223f") {
        window.location.href = "thisIsWhereAdminsGo.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}