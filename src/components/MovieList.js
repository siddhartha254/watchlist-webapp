const MovieList = (props) => {

    const movies=props.movies;
    const addmovie=props.handleClick;
    const OverlayText=props.OverlayText;

    return (
        <div className="movie-list">
        {movies?.map((movie) => (
            <div className="movie-poster" key={movie.imdbID}>
                <img src={movie.Poster} alt="movie-poster"></img>
                <div className="overlay" onClick={() => addmovie(movie)}>
                    <OverlayText></OverlayText>
                </div>
            </div>
        ))}
        </div>
    );
}
 
export default MovieList;