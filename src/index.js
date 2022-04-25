const baseURL = `https://musicbrainz.org/ws/2/release-group?fmt=json&limit=7&query=artist:`;
const menu = document.getElementById("playlist");
const musicButton = document.getElementById("music-button");
const likeBtn = document.getElementById("like-button");
const inputInit = document.getElementById("text-input");
const deleteAlbumsBtn = document.getElementById("delete-albums");

window.addEventListener("DOMContentLoaded", () => {
  getMusicButtonEvent();
  likeButton();
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
  console.log(data);
  //   const id = data["release-groups"][0].releases[0].id;
  //   let art = await fetch(`http://coverartarchive.org/release/${id}`);
  //   let artData = await art.json();
  //   data.img = artData.images[0].image;
  return data;
}

function getMusicButtonEvent() {
  musicButton.addEventListener("click", () => {
    getMusic();
  });
}

function likeButton() {
  likeBtn.addEventListener("click", () => {
    alert("You've liked this artist!");
    const ul = document.getElementById("likes");
    const list = `<li>${inputInit.value}</li>`;
    ul.innerHTML += list;
  });
}

async function renderAlbums(albums) {
  albums.forEach((album) => {
    const albumCard = `<div class="card">
        <h2>Name: ${album["artist-credit"][0].name}</h2>
        <p> Description: ${album["artist-credit"][0].artist.disambiguation}</p>
        <p>Album: ${album.title}</p>
        <button id="delete-btn"> ❤️ </button>
        </div>
      `;
    const albumBox = document.getElementById("artist-container");
    albumBox.innerHTML += albumCard;
  });
}
// function tryThis() {
//   const deleteBtn = document.getElementById("delete-btn");
//   deleteBtn.addEventListener("click", () => {
//     console.log("hi");
//   });
// }
// function handleRemoveBtn() {
//   const deleteX = document.getElementById("delete-btn");
//   deleteX.forEach((btn) => {
//     btn.addEventListener("click", removeMe);
//     function removeMe() {
//       this.closest("button").remove();
//     }
//   });
// }
