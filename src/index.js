const baseURL = `https://musicbrainz.org/ws/2/artist/?query={artistname}&fmt=json`;
const menu = document.getElementById("playlist");
const musicButton = document.getElementById("music-button");
const likeBtn = document.getElementById("add-to-playlist-button");


window.addEventListener("DOMContentLoaded", () => {
   buttonEvent();
   playlistEvent();
   addToPlaylistEvent();
});

function buttonEvent () {
    musicButton.addEventListener("click", () => {
    getMusic();
})
};

function getMusic() {
    fetch(baseURL)
    .then((res) => 
    {
        return res.json();
    })
    .then((data) =>
    { 
        console.log(data.disambiguation);
        console.log(data.artists);
    })
};

function playlistEvent () {
  menu.addEventListener("click", () => {
    console.log("work")
  })
};

function addToPlaylistEvent () {
    likeBtn.addEventListener("click", () =>{
        console.log("yay")
    })
}
// .split("") then .join()
// the names of the artists 
// error handle of artist fetch 
// submit listener for artist search 
// listener to add to favorites in dropdown (playlist add)
// delete button