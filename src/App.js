import logo from './logo.svg';
import './App.css';


const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");


getMovies(APIURL);

async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  
  console.log(respData);
  showMovies(respData.results);

}


function App() {
  return (
    <div className="App">
      
    </div>
  );
}


export default App;
