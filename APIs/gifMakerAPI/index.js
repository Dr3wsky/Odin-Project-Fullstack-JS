const img = document.querySelector('img');
const imgSearch = 'zebra'
const apiBase = 'https://api.giphy.com/v1/gifs/translate?api_key=5USKJ6tsZp7la5EBedWxG0Z9vjybhKFY&s=';
fetch(apiBase.concat(imgSearch), {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src =  response.data.images.original.url;
      });