function isValid() {
    var invalid = 0;

    // Country Verification
    var countryValue = document.getElementById("Country").value;

    if (countryValue == "0") {
        document.getElementById("invalidCountry").innerHTML = "Country is required";
        document.getElementById("Country").focus(); // set focus
        console.log("Country invalid — null")
        invalid += 1;
    } else {
        document.getElementById("invalidCountry").innerHTML = "";
        console.log("Country valid")
    }

    // ZIP Code Verification
    var zipCodeValue = document.getElementById("ZipCode").value;

    if (countryValue === "United States") {
        if (zipCodeValue === "null" || zipCodeValue == "" || zipCodeValue.length > 5) {
            document.getElementById("invalidZipCode").innerHTML = "ZIP code is required and cannot be greater than 5 characters";
            document.getElementById("ZipCode").focus(); // set focus
            console.log("ZIP Code invalid — length");
            invalid += 1;
        } else if (zipCodeValue.match("[0-9]") === null) {
            document.getElementById("invalidZipCode").innerHTML = "ZIP Code contains invalid character (accepts only 0-9)";
            document.getElementById("ZipCode").focus(); // set focus
            console.log("ZIP Code invalid — bad characters")
            invalid += 1;
        } else {
            document.getElementById("invalidZipCode").innerHTML = "";
            console.log("ZIP Code valid")
        }
    } else {
        document.getElementById("invalidZipCode").innerHTML = "";
        console.log("ZIP Code valid")
    }

    // State Verification
    var stateValue = document.getElementById("State").value;

    if (stateValue == "0") {
        document.getElementById("invalidState").innerHTML = "State is required";
        document.getElementById("State").focus(); // set focus
        console.log("State invalid — null")
        invalid += 1;
    } else {
        document.getElementById("invalidState").innerHTML = "";
        console.log("State valid")
    }

    // City Verification
    var cityValue = document.getElementById("City").value;

    if (cityValue === "null" || cityValue == "") {
        document.getElementById("invalidCity").innerHTML = "City is required";
        document.getElementById("City").focus(); // set focus
        console.log("City invalid — null")
        invalid += 1;
    } else {
        document.getElementById("invalidCity").innerHTML = "";
        console.log("City valid")
    }

    // Address Verification
    var addressValue = document.getElementById("Address").value;

    if (addressValue === "null" || addressValue == "") {
        document.getElementById("invalidAddress").innerHTML = "Address is required";
        document.getElementById("Address").focus(); // set focus
        console.log("Address invalid — null")
        invalid += 1;
    } else {
        document.getElementById("invalidAddress").innerHTML = "";
        console.log("Address valid")
    }

    // Password Verification
    var passwordValue = document.getElementById("Password").value;
    
    if (passwordValue === "null" || passwordValue == "" || passwordValue.length > 7) {
        document.getElementById("invalidPassword").innerHTML = "Password is required and cannot be greater than 7 characters";
        document.getElementById("Password").focus(); // set focus
        console.log("Password invalid — length")
        invalid += 1;
    } else {
        if (passwordValue.match("[a-z]")) {
            document.getElementById("invalidPassword").innerHTML = "";
            console.log("Password valid")
        } else {
            document.getElementById("invalidPassword").innerHTML += "Password requires 1 lower-case. ";
            document.getElementById("Password").focus(); // set focus
            console.log("Password invalid - missing character")
            invalid += 1;
        }

        if (passwordValue.match("[A-Z]")) {
            document.getElementById("invalidPassword").innerHTML = "";
            console.log("Password valid")
        } else {
            document.getElementById("invalidPassword").innerHTML += "Password requires 1 upper-case. ";
            document.getElementById("Password").focus(); // set focus
            console.log("Password invalid - missing character")
            invalid += 1;
        }
        if (passwordValue.match("[0-9]")) {
            document.getElementById("invalidPassword").innerHTML = "";
            console.log("Password valid")
        } else {
            document.getElementById("invalidPassword").innerHTML += "Password requires 1 numeric. ";
            document.getElementById("Password").focus(); // set focus
            console.log("Password invalid - missing character")
            invalid += 1;
        }
        if (passwordValue.match("[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]")) {
            document.getElementById("invalidPassword").innerHTML = "";
            console.log("Password valid")
        } else {
            document.getElementById("invalidPassword").innerHTML += "Password requires 1 special character. ";
            document.getElementById("Password").focus(); // set focus
            console.log("Password invalid - missing character")
            invalid += 1;
        }
    }

    // User Name Verification
    var userNameValue = document.getElementById("UserName").value;

    if (userNameValue === "null" || userNameValue == "" || userNameValue.length > 12) {
        document.getElementById("invalidUserName").innerHTML = "User name is required and cannot be greater than 12 characters";
        document.getElementById("UserName").focus(); // set focus
        console.log("User Name invalid — length")
        invalid += 1;
    } else {
        document.getElementById("invalidUserName").innerHTML = "";
        console.log("User Name valid")
    }

    // Phone Number Verification
    var phoneValue = document.getElementById("Phone").value;
    
    if (phoneValue === "null" || phoneValue == "" || phoneValue.length > 15) {
        document.getElementById("invalidPhone").innerHTML = "Phone Number is required and cannot be greater than 15 characters";
        document.getElementById("Phone").focus(); // set focus
        console.log("Phone Number invalid — length")
        invalid += 1;
    } else if (phoneValue.match("^[0-9,-]+$") === null) {
        document.getElementById("invalidPhone").innerHTML = "Phone number contains invalid character (accepts only 0-9 and -)";
        document.getElementById("Phone").focus(); // set focus
        console.log("Phone Number invalid — bad characters")
        invalid += 1;
    } else {
        document.getElementById("invalidPhone").innerHTML = "";
        console.log("Phone Number valid")  
    }

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
