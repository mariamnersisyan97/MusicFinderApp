// const baseURL = `https://musicbrainz.org/ws/2/artist?fmt=json&query=`;
const baseURL = `https://musicbrainz.org/ws/2/release-group?fmt=json&limit=10&query=artist:`;
const menu = document.getElementById("playlist");
const musicButton = document.getElementById("music-button");
const likeBtn = document.getElementById("like-button");
const inputInit = document.getElementById("text-input");
const artistContainer = document.getElementById("artist-container");

window.addEventListener("DOMContentLoaded", () => {
   buttonEvent();
   likeButton();
//    removeArtist();
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
    likeBtn.addEventListener("click", () =>{
        alert("You've liked this artist!")
    })}

// function removeArtist () {
//     const removeBtn = getElementById("remove-btn");
//     removeBtn.addEventListener("click", () => {
//         console.log("hi")
//         removeBtn.remove(artistOne)
//    })    
// };
function renderAlbums (albums) {
    albums.forEach(album=> {
        const id = album.id;

        const coverArtURL = `coverartarchive.org/release-group/${id}/front`
         
        // console.log(album.title)
        // console.log(coverArtURL)


        const card = document.createElement("div");
        const name = document.createElement("h2")
        const description = document.createElement("p");
        const works = document.createElement("p");
        name.innerText = `Name: ${albums[0]['artist-credit'][0].name} `
        description.innerText = `Description: ${albums[0]['artist-credit'][0].artist.disambiguation} `
        works.innerText = `Albums: ${albums[0].title}`
        
        card.append(name, description, works);
        artistContainer.append(card);
        //async await to grab id for cover art?
    })
    // const albums = res['release-groups'][0].title
};

// delete funcitonality = e.target.parentNode.remove
// coverartarchive.org/release-group/a9861c3c-de50-4b0c-bc32-cf2cd61a05ca/front
// https://ia601006.us.archive.org/1/items/mbid-90c07361-b204-461e-ab9b-55ffb10fd29d/mbid-90c07361-b204-461e-ab9b-55ffb10fd29d-20017120624.jpg