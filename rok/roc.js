fetch("https://rockapi.apiworks.tech/rock/random")
  .then(response => response.json())
  .then(data => {
    document.getElementById("title").textContent = data.title;
    document.getElementById("name").textContent = data.name;
    document.getElementById("image").src = data.image;
  })
  .catch(error => console.error(error));