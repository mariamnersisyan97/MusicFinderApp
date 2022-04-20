const baseURL = `https://musicbrainz.org/ws/2/artist/?query=`;
const menu = document.getElementById("playlist");
const musicButton = document.getElementById("music-button");
const likeBtn = document.getElementById("add-to-playlist-button");
const inputInit = document.getElementById("text-input");
const artistContainer = document.getElementById("artist-container")


window.addEventListener("DOMContentLoaded", () => {
   buttonEvent();
   playlistEvent();
//    getMusic();
//    addToPlaylistEvent();
});


function getMusic() {
    fetchMusic()
    .then(res => { 
        const artistOne = res.artists[0];
        console.log(artistOne);
            
        const card = document.createElement("div");
        const name = document.createElement("h2")
        const description = document.createElement("p");
        name.innerText = `Name: ${artistOne.name} `
        description.innerText = `Description: ${artistOne.disambiguation} `
        
        card.append(name, description);
        artistContainer.append(card)
    })
};

async function fetchMusic() {
    const artist = document.getElementById("text-input").value.split(" ").join("_");
    console.log(artist)
    let res = await fetch(baseURL + `${artist}&fmt=json`);
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