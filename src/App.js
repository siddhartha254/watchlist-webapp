import { useState, useEffect } from 'react';
import MovieHeading from './components/MovieHeading';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import AddWatch from './components/AddWatch';
import RemoveWatch from './components/RemoveWatch';
import './index.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("prestige");
  const [watchlist, setWatchlist] = useState([]);

  const APIMovieRequest = async (searchValue) => {

    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=5b76b546`;

    const respone = await fetch(url);
    const responeJson = await respone.json();

    if (responeJson.Search) {
      setMovies(responeJson.Search);
    }
  }

  useEffect(() => {
    APIMovieRequest(searchValue);
  }, [searchValue])

  const saveLocal=(items)=>{
    localStorage.setItem('my-watchlist', JSON.stringify(items));
  }

  useEffect(()=>{
    const loadWatchlist=JSON.parse(localStorage.getItem('my-watchlist'));
    setWatchlist(loadWatchlist);
  },[])

  const addWatchlistMovie = (movie) => {
    const newWatchlist = [...watchlist, movie];
    setWatchlist(newWatchlist);
    saveLocal(newWatchlist);
  }

  const remWatchlistMovie = (movie) => {
    const newWatchlist = watchlist.filter((running) => running.imdbID !== movie.imdbID);
    setWatchlist(newWatchlist);
    saveLocal(newWatchlist);
  }


  return (
    <div className="App">

      <div className="search-bar-row">
        <MovieHeading heading="Search for Movies or Shows!"></MovieHeading>
        <MovieSearch searchValue={searchValue} setSearchValue={setSearchValue}></MovieSearch>
      </div>

      <div className="movie-list">
        <MovieList movies={movies} handleClick={addWatchlistMovie} OverlayText={AddWatch}></MovieList>
      </div>

      <div className="search-bar-row">
        <MovieHeading heading="Your Watchlist"></MovieHeading>
      </div>

      <div className="movie-list">
        <MovieList movies={watchlist} handleClick={remWatchlistMovie} OverlayText={RemoveWatch}></MovieList>
      </div>

    </div>
  );
}


export default App;
