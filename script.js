// function to reduce the Fontsize when Jokes over 85 chars
function addLongJokeClass() {
  if (chuckJokes.innerHTML.length > 85) {
    chuckJokes.classList.add("long-joke");
  } else {
    chuckJokes.classList.remove("long-joke");
  }
}

let apiJokes = [];
// Get Jokes From Api
async function getJokes() {
  const apiUrl = "https://api.chucknorris.io/jokes/random";
  try {
    const response = await fetch(apiUrl);
    apiJokes = await response.json();
    document.getElementById("joke").innerHTML = apiJokes.value;
    addLongJokeClass();
  } catch (error) {
    alert(error);
  }
}
// On Load
getJokes();

// Variables
const chuckJokes = document.getElementById("joke");
const button = document.getElementById("new-joke");
const tweetButton = document.getElementById("twitter");
// on Button click fill in the Joke
button.addEventListener("click", () => {
  getJokes();
  chuckJokes.innerHTML = apiJokes.value;
});
// on tweetButton click share joke on Twitter
tweetButton.addEventListener("click", () => {
  window.open(
    "http://www.twitter.com/intent/tweet?text=" + chuckJokes.innerHTML + "'"
  );
});
