// const baseURL = `"https://musicbrainz.org/ws/2/artist/?query=" + ${artist} + "&fmt=json"`;
const baseURL = "https://musicbrainz.org/ws/2/artist/?query=Madonna&fmt=json";
const menu = document.getElementById("playlist");
const musicButton = document.getElementById("music-button");
const likeBtn = document.getElementById("add-to-playlist-button");

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