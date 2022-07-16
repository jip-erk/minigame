var x = document.getElementById("text");


let n = 0;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

//create interval to call getLocation function every 5 seconds


function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude + " (" + n++ + ")";
}

//if button is pressed call getLocation function