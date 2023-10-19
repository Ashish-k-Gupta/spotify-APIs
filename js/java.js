var redirect = 'http://localhost:8080/logged'

var client_id = "ce8657a4fa23469faa9af123bb940670"
var client_secret = "e9bf2acb40bc4b71bb07505ea10d399e"

const AUTHORIZE = "https://accounts.spotify.com/authorize";

const TOKEN = "https://accounts.spotify.com/api/token";
const ARTISTS = "https://api.spotify.com/v1/me/shows?offset=0&limit=20";
const TRACKS = "https://api.spotify.com/v1/me/shows?offset=0&limit=20";


const list = document.getElementById('list')
const cover = document.getElementById('cover')
cover.classList.add("hide");

function authorize(){
    let url = AUTHORIZE;
    url += '?client_id' + client_id;
    url += "&response_type=code"
    url += "&redirect_uri=" + encodeURI(redirect);
    url += "&show_dialog=true";
    url += "&scope=user-read-private user-read email user-read-playback0state user-top-read";
    window.location.href = url;
}

function onPageLoad(){
    if(window.location.search.length > 0){
        handleRedirect();
    }else{
        getSongs();
    }
}

function handleRedirect(){
    let code = getCode();
    fetchAccessToken(code);
    window.history.pushState("", "", redirect)
}

en