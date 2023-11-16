const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

button.addEventListener("click", addNewJoke);


// Practise:
const funckyfunc=async ()=>{
  const res=await axios.get("https://icanhazdadjoke.com/",{ headers: { Accept: "application/json" }});
  return res.data.joke;
};

const dummyfunc=async ()=>{
const joke=await funckyfunc();
const neLi=document.createElement("li");
neLi.append(joke);

};
