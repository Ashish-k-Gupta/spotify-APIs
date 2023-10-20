var redirect_uri = "http://192.168.1.74:5500/Spotify-project/views/index.html"


var client_id = "ce8657a4fa23469faa9af123bb940670"
var client_secret = "e9bf2acb40bc4b71bb07505ea10d399e"
// var client_secret = "";
// var client_id = "";

const AUTHORIZE = "https://accounts.spotify.com/authorize";

function onPageLoad(){
  
}


function requestAuthorization(){
    client_id = document.getElementById("clientId").value;
    client_secret = document.getElementById("clientSecret").value;
    localStorage.setItem("client_id", client_id);
    localStorage.setItem("client_secret", client_secret)


 
    

    let url = AUTHORIZE;
    url += '?client_id' + client_id;
    url += "&response_type=code"
    url += "&redirect_uri=" + encodeURI(redirect_uri);
    url += "&show_dialog=true";
    url += "&scope=user-read-private user-read email user-read-playback-state user-top-read user-read-playback-position user-library-read user-read-recently-played";
    window.location.href = url;
}

