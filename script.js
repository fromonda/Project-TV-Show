//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = "";

  const header = document.createElement("h1");
  header.textContent = "Game of Thrones Episodes";

  const source = document.createElement("p");
  source.innerHTML = `
    Data originally provided by
    <a href="https://www.tvmaze.com/" target="_blank">TVMaze.com</a>
  `;

  rootElem.appendChild(header);
  rootElem.appendChild(source);

  const episodesContainer = document.createElement("div");

  episodeList.forEach((episode) => {
    const episodeCard = document.createElement("article");

    const episodeCode = `S${String(episode.season).padStart(2, "0")}E${String(
      episode.number
    ).padStart(2, "0")}`;

    episodeCard.innerHTML = `
      <h2>${episode.name}</h2>
      <p><strong>Episode code:</strong> ${episodeCode}</p>
      <img src="${episode.image?.medium || ""}" alt="${episode.name}">
      <p>${episode.summary || ""}</p>
    `;

    episodesContainer.appendChild(episodeCard);
  });

  rootElem.appendChild(episodesContainer);
} // Only close the function here

window.onload = setup;
