// DOM handling
const img = document.querySelector('img');
const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('gif-search')
const imgDefault = 'start';
const searchError = document.getElementById("search-error");
const apiBase = 'https://api.giphy.com/v1/gifs/translate?api_key=5USKJ6tsZp7la5EBedWxG0Z9vjybhKFY&s=';

// Event handlers
searchBtn.onclick = searchGif;
searchInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    // e.preventDefault();
    searchBtn.click();
  };
}); 

// Functions to search and return gifs
function searchGif(img) {
const gifInput = document.getElementById("gif-search").value;
img.src = fetchGif(apiBase, gifInput);
}

async function fetchGif(apiBase, gifInput) {
  try {
    const response =  await fetch(apiBase.concat(gifInput), {mode: 'cors'});
    const catData = await response.json();
    searchError.textContent = "";
    img.src =  catData.data.images.original.url;
  } catch (e) {
    searchError.textContent = "Invalid search, no gifs found. Try again."
    img.src = '#';
  };
}
