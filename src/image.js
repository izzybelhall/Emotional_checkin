let clientId = "";

let query = "uplifting kids";
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientId}&query=${query}`;

let imageElement = document.querySelector("#unsplashImage");
let imageLink = document.querySelector("#imageLink");
let creator = document.querySelector("#creator");

fetch(endpoint)
  .then((response) => response.json())
  .then((jsonData) => {
    imageElement.src = jsonData.urls.regular;
    imageLink.setAttribute("href", jsonData.links.html);
    creator.innerText = jsonData.user.name;
    creator.setAttribute("href", jsonData.user.portfolio_url);
  })
  .catch((error) => {
    console.log("Error: " + error);
  });
