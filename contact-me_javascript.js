function isValid() {
    var invalid = 0;

    // Email Verification
    var emailValue = document.getElementById("Email").value;
    var atpos = emailValue.indexOf("@");
    var dotpos = emailValue.lastIndexOf(".");

    if (emailValue === "null" || emailValue == "") {
        document.getElementById("invalidEmail").innerHTML = "Email address is required.";
        document.getElementById("Email").focus(); // set focus
        console.log("Email invalid — length");
        invalid += 1;
    } else if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=emailValue.length) {
        document.getElementById("invalidEmail").innerHTML = "Email address is invaild";
        document.getElementById("Email").focus(); // set focus
        console.log("Email invalid — does not contain @ or .");
        invalid += 1;
    } else {
        document.getElementById("invalidEmail").innerHTML = "";
        console.log("Email valid");
    }

    // Last Name Verification
    var lastNameValue = document.getElementById("LastName").value;

    if (lastNameValue === "null" || lastNameValue == "" || lastNameValue.length > 50) {
        document.getElementById("invalidLasttName").innerHTML = "Last name is required and cannot be greater than 50 characters";
        document.getElementById("LastName").focus(); // set focus
        console.log("Last name invalid — length");
        invalid += 1;
    } else if (lastNameValue.match("^[a-zA-Z ,.'-]+$") === null) {
        document.getElementById("invalidLasttName").innerHTML = "Last name contains invalid character (accepts only A-Z, a-z, and ,.'-)";
        document.getElementById("LastName").focus(); // set focus
        console.log("Last name invalid — bad characters");
        invalid += 1;
    } else {
        document.getElementById("invalidLasttName").innerHTML = "";
        console.log("Last name valid");
    }

    // First Name Verification
    var firstNameValue = document.getElementById("FirstName").value;

    if (firstNameValue === "null" || firstNameValue == "" || firstNameValue.length > 20) {
        document.getElementById("invalidFirstName").innerHTML = "First name is required and cannot be greater than 20 characters";
        document.getElementById("FirstName").focus(); // set focus
        console.log("First name invalid — length");
        invalid += 1;
    } else if (firstNameValue.match("^[a-zA-Z ,.'-]+$") === null) {
        document.getElementById("invalidFirstName").innerHTML = "First name contains invalid character (accepts only A-Z, a-z, and ,.'-)";
        document.getElementById("FirstName").focus(); // set focus
        console.log("First name invalid — bad characters");
        invalid += 1;
    } else {
        document.getElementById("invalidFirstName").innerHTML = "";
        console.log("First name valid")
    }

    // Genral Verification
    if (invalid != 0){
        document.getElementById("submitError").innerHTML = "<strong>Error Submitting — See Above</strong>";
        return false;
        
    } else {
        return true;
    }
}
