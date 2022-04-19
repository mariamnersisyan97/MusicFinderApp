const artist = document.getElementById("text-input").value;
const baseURL = `https://musicbrainz.org/ws/2/artist/?query=${artist}&fmt=json`;
const menu = document.getElementById("playlist");
const musicButton = document.getElementById("music-button");
const likeBtn = document.getElementById("add-to-playlist-button");
const inputInit = document.getElementById("text-input");


window.addEventListener("DOMContentLoaded", () => {
   buttonEvent();
   playlistEvent();
   getMusic();
//    addToPlaylistEvent();
});


function getMusic() {
    // const ul = document.getElementById("artist-ul");
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
};

function buttonEvent () {
    musicButton.addEventListener("click", () => {
    getMusic();
})
};

function renderArtist(artist) {
    const cardTitle = document.getElementById("card-title");
    const cardText = document.getElementById("card-text");
    cardTitle = artist.name
    cardText = artist.disambiguation
    // const artistCard = 
    // `<div class ="card">
    // <h2> ${artist.name}<h2/>
    // <p>${artist.disambiguation}</p>
    // <p> Genre: ${artist} </p>
    // `
    // const card = document.getElementsByClassName("artist-card");
    // card.innerHTML += artistCard;
}

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