// Get Jokes From Api

function addLongJokeClass() {
  if (chuckJokes.innerHTML.length > 85) {
    chuckJokes.classList.add("long-joke");
  } else {
    chuckJokes.classList.remove("long-joke");
  }
}

let apiJokes = [];
async function getJokes() {
  const apiUrl = "https://api.chucknorris.io/jokes/random";
  try {
    const response = await fetch(apiUrl);
    apiJokes = await response.json();
    document.getElementById("joke").innerHTML = apiJokes.value;
   addLongJokeClass()
  
    console.log(chuckJokes.innerHTML.length);
    console.log(apiJokes.value);
  } catch (error) {
    alert(error);
  }
}
//On Load
getJokes();

// Variables
const chuckJokes = document.getElementById("joke");
const button = document.getElementById("new-joke");
const tweetButton = document.getElementById("twitter");

button.addEventListener("click", () => {
  getJokes();
  chuckJokes.innerHTML = apiJokes.value;
});
