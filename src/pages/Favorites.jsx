import "../css/Favorites.css"; 
import { useMovieContext } from "../contexts/Moviecontexts";
import MovieCard from "../components/MovieCard";

function Favorites(){
    const { favorites } = useMovieContext();
    if (favorites){
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movie-gird">
                    {favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        );
    }

    return<div className="favorites-empty">
        <h2>NO favorite movie yet</h2>
        <p>Tsrta addnig movies to your favorites and they will appear here</p>
    </div>
}

export default Favorites;