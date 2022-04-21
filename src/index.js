const baseURL = `https://musicbrainz.org/ws/2/release-group?fmt=json&limit=20&query=artist:`;
const menu = document.getElementById("playlist");
const musicButton = document.getElementById("music-button");
const likeBtn = document.getElementById("like-button");
const inputInit = document.getElementById("text-input");
const removeBtn = document.getElementById("delete-btn");

window.addEventListener("DOMContentLoaded", () => {
   buttonEvent();
   likeButton();
   removeArtist();
});

function getMusic() {
    fetchMusic()
    .then(res => {  
        console.log(res)
        const albums = res['release-groups'];
        renderAlbums(albums);
    })
};

async function fetchMusic() {
    const artist = document.getElementById("text-input").value.split(" ").join("_");
    let res = await fetch(baseURL + `${artist}`);
    let data = await res.json();
    return data;
    
};

function buttonEvent () {
    musicButton.addEventListener("click", () => {
    getMusic();
})
};

function likeButton () {
    likeBtn.addEventListener("click", () => {
        alert("You've liked this artist!")
    })
};

function removeArtist () {
    removeBtn.addEventListener("click", () => {
        console.log("hi")
   })    
};

function renderAlbums (albums) {
    albums.forEach(album=> {
        // const id = album.id;

        // const coverArtURL = `coverartarchive.org/release-group/${id}/front`
         
        // console.log(album.title)
        // console.log(coverArtURL)

        const albumCard =  `<div class="card">
        <h2>Name: ${album['artist-credit'][0].name}</h2>
        <p> Description: ${album['artist-credit'][0].artist.disambiguation}</p>
        <p>Album: ${album.title}</p>
        <button class="delete-btn"> x </button>
      </div>
      `
      const albumBox= document.getElementById("artist-container");
      albumBox.innerHTML += albumCard
      
    })
};

// delete funcitonality = e.target.parentNode.remove
// coverartarchive.org/release-group/a9861c3c-de50-4b0c-bc32-cf2cd61a05ca/front
// https://ia601006.us.archive.org/1/items/mbid-90c07361-b204-461e-ab9b-55ffb10fd29d/mbid-90c07361-b204-461e-ab9b-55ffb10fd29d-20017120624.jpg