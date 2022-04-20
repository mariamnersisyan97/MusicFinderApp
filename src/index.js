const baseURL = `https://musicbrainz.org/ws/2/artist/?query=`;
const menu = document.getElementById("playlist");
const musicButton = document.getElementById("music-button");
const likeBtn = document.getElementById("like-button");
const inputInit = document.getElementById("text-input");
const artistContainer = document.getElementById("artist-container")

window.addEventListener("DOMContentLoaded", () => {
   buttonEvent();
   likeButton();
   removeArtist();
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
        artistContainer.append(card);
        // if(artist === undefined) {
        //      alert("Sorry, try a new artist!")
        // }
        // return data;
    })
};

async function fetchMusic() {
    const artist = document.getElementById("text-input").value.split(" ").join("_");
    let res = await fetch(baseURL + `${artist}&fmt=json`);
    let data = await res.json();
    return data;
};

function buttonEvent () {
    musicButton.addEventListener("click", () => {
    getMusic();
})
};

function likeButton () {
    likeBtn.addEventListener("click", () =>{
        alert("You've liked this artist!")
    })}

function removeArtist () {
    const removeBtn = getElementById("remove-btn");
    removeBtn.addEventListener("click", () => {
        console.log("hi")
        removeBtn.remove(artistOne)
   })    
};

// error handle of artist fetch 
// submit listener for artist search 
// listener to add to favorites in dropdown (playlist add)
// delete button

// submit form with artist name 
// upon click, it generates the artist with a card 
// add to playlist click adds it to My Playlist
// in My Playlist, you can use a delete button to remove it from list