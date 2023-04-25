"use strict";

let httpRequest = new XMLHttpRequest();

let el = document.getElementById("button");
el.onclick = function() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let country = document.getElementById("country").value;


// let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = postAjaxFunction;
httpRequest.open('POST', 'ajax.php');
httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
httpRequest.send("name="+name+"&email="+email+"&password="+password+"&country="+country)
}

function postAjaxFunction() {
if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
        // var response = JSON.parse(httpRequest.responseText);
        // alert(response.name + " - " + response.message);
        document.getElementById("xx").innerHTML = " The regestration is Successfully";
        document
    } else {
        alert('Something went wrong.');
    }
}
}

