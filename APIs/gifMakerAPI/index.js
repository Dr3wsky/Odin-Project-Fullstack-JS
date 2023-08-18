// DOM handling
const img = document.querySelector('img');
const searchBtn = document.getElementById('search-btn')
const imgSearch = 'zebra'
const searchError = document.getElementById("search-error");
const apiBase = 'https://api.giphy.com/v1/gifs/translate?api_key=5USKJ6tsZp7la5EBedWxG0Z9vjybhKFY&s=';

// Event handler
searchBtn.onclick = searchGif;

// Functions to search and return gifs
function searchGif(img) {
const gifInput = document.getElementById("gif-search").value;
img.src = fetchGif(apiBase, gifInput);
}

function fetchGif(apiBase, gifInput){
fetch(apiBase.concat(gifInput), {mode: 'cors'})
  .then(function(response) {
    console.log(response.json);
    return response.json();
  })
  .then(function(response) {
    searchError.textContent = "";
    img.src =  response.data.images.original.url;
  })
  .catch(e => {
    searchError.textContent = "Invalid search, no gifs found. Try again."
  });
}
