const newGiphy = document.querySelector("#newgiphy");
const giphContainer = document.querySelector("#container");
const $gifBox = $("#container");

function addGif(res) {
  let arrayLength = res.data.length;
  if (arrayLength) {
    let idx = Math.floor(Math.random() * arrayLength);
    let newEntry = document.createElement("div");
    let newGif = document.createElement("img");
    newGif.src = res.data[idx].images.original.url;
    newEntry.append(newGif);
    giphContainer.append(newEntry);
  }
}

addEventListener("submit", async function (e) {
  e.preventDefault();
  let searchWord = newGiphy.value;
  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q: searchWord, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
  });
  addGif(res.data);
});

$("#remove").on("click", function () {
  $gifBox.empty();
});
