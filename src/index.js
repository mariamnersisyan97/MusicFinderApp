// const baseURL = `"https://musicbrainz.org/ws/2/artist/?query=" + ${artist} + "&fmt=json"`;
// const artist = 
const baseURL = "https://musicbrainz.org/ws/2/artist/?query=Madonna&fmt=json";
const menu = document.getElementById("playlist");
const musicButton = document.getElementById("music-button");
const likeBtn = document.getElementById("add-to-playlist-button");
const inputInit = input = document.getElementById("text-input");
var input = document.getElementById("text-input").value;

window.addEventListener("DOMContentLoaded", () => {
   buttonEvent();
   playlistEvent();
   getMusic();
//    addToPlaylistEvent();
});


function getMusic() {
    const ul = document.getElementById("artists-ul");
    fetchMusic()
    .then(data => { 
        // data.map(artist => {
        //     ul.innerHTML +=   
        //     `<li>${artist.name}</li>` 
        // })
        console.log(data)
    })
};

async function fetchMusic() {
    let res = await fetch(baseURL);
    let data = await res.json();
    return data;
}

function renderArtist(artist) {
    const artistCard = 
    `<div class ="card">
    <h2> ${artist.name}<h2/>
    <p>${artist.disambiguation}</p>
    <p> Genre: ${artist} </p>
    `
    const card = document.getElementsByClassName("artist-card");
    card.innerHTML += artistCard;
}
function buttonEvent () {
    musicButton.addEventListener("click", () => {
    getMusic();
})
};

function playlistEvent () {
  menu.addEventListener("click", () => {
    console.log("work")
  })
};

// function addToPlaylistEvent () {
//     likeBtn.addEventListener("click", () =>{

//     })}



// .split("") then .join()
//  + ${artist}.split(" ").join("_")
// the names of the artists 
// error handle of artist fetch 
// submit listener for artist search 
// listener to add to favorites in dropdown (playlist add)
// delete button

// submit form with artist name 
// upon click, it generates the artist with a card 
// add to playlist click adds it to My Playlist
// in My Playlist, you can use a delete button to remove it from list