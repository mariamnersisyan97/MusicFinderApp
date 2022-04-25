const baseURL = `https://musicbrainz.org/ws/2/release-group?fmt=json&limit=20&query=artist:`;
const menu = document.getElementById("playlist");
const musicButton = document.getElementById("music-button");
const likeBtn = document.getElementById("like-button");
const inputInit = document.getElementById("text-input");

window.addEventListener("DOMContentLoaded", () => {
  buttonEvent();
  likeButton();
  handleRemoveBtn();
});

function getMusic() {
  fetchMusic().then((res) => {
    console.log(res);
    const albums = res["release-groups"];
    renderAlbums(albums);
  });
}

async function fetchMusic() {
  const artist = document
    .getElementById("text-input")
    .value.split(" ")
    .join("_");
  let res = await fetch(baseURL + `${artist}`);
  let data = await res.json();
  const id = data["release-groups"][0].releases[0].id;

  //   let art = await fetch(`http://coverartarchive.org/release/${id}`);
  //   let artData = await art.json();
  //   data.img = artData.images[0].image;
  return data;
}

function buttonEvent() {
  musicButton.addEventListener("click", () => {
    getMusic();
  });
}

function likeButton() {
  likeBtn.addEventListener("click", () => {
    alert("You've liked this artist!");
  });
}

async function renderAlbums(albums) {
  albums.forEach((album) => {
    const albumCard = `<div class="card">
        <h2>Name: ${album["artist-credit"][0].name}</h2>
        <p> Description: ${album["artist-credit"][0].artist.disambiguation}</p>
        <p>Album: ${album.title}</p>
        
        <button id="delete-btn"> x </button>
        </div>
      `;
    const albumBox = document.getElementById("artist-container");
    albumBox.innerHTML += albumCard;
  });
}

function handleRemoveBtn(albumCard) {
  const removeBtn = document.getElementById("delete-btn");
  if (removeBtn) {
    console.log("deleted");
    removeBtn.addEventListener("click", (e) => {
      e.target.albumBox(albumCard);
    });
  }
}

// delete funcitonality = e.target.parentNode.remove
// coverartarchive.org/release-group/a9861c3c-de50-4b0c-bc32-cf2cd61a05ca/front
// https://ia601006.us.archive.org/1/items/mbid-90c07361-b204-461e-ab9b-55ffb10fd29d/mbid-90c07361-b204-461e-ab9b-55ffb10fd29d-20017120624.jpg"
