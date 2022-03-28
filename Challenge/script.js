// you could also use change it will be the same!
document.getElementById("email").addEventListener("input", checkEmail);


function checkEmail(e) {
    e.preventDefault(); //this prevents the page from refreshing after submitting
    let email = document.getElementById("email").value; //saving the email value
    let params = `email=${email}`; //creating the parameters for the GET method
    const request = new XMLHttpRequest();
    //If you use GET Method you need to add ? + params, if you use POST you need to ad Header!
    request.open("GET", "users.php?" + params, true);
    request.onload = function() {
        if (this.status == 200) {
            document.getElementById("emailstatus").innerHTML = this.responseText;
            if (this.responseText == "E-Mail already exists!") {
                document.getElementById("button").disabled = true;
            } else {
                document.getElementById("button").disabled = false;
            }
        }
    }
    request.send(); //send parameters to be further processed by php
}