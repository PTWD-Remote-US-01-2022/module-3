// stateful component and will be using the useState() hook

import { useState } from "react";

import moviesData from "../movies-data.json";

import MovieCard from "./MovieCard";

function MoviesList(){

    const [movies, setMovies] = useState(moviesData);
    const [showMovies, setShowMovies] = useState(true);

    const deleteMovie = (movieId) => {

        // console.log("1: ", movies.length)

        const filteredMovies = movies.filter(movie => {
            return movie._id !== movieId;
        })

        // console.log("2: ", filteredMovies.length)
        setMovies(filteredMovies);
    }

    const toggleMovies = () => {
        setShowMovies(!showMovies);
    }

    return (
        <div>
            <h1> Movies List </h1>

            {/* {movies.map(movie => {
                return (
                    <div key={movie._id}>
                        <h3> { movie.title }</h3>
                        <p> Director: { movie.director }</p>
                        <p> Rating: { movie.IMDBRating }</p>
                        <button onClick={() => deleteMovie(movie._id)}> Delete </button>
                    </div>
                )
            })} */}

            <button onClick={toggleMovies}> {showMovies ? "Hide" : "Show"} </button>

            { showMovies && movies.map(movie => {
                return (
                    <div key={movie._id}>
                        <MovieCard movie={movie} clickToDelete={deleteMovie}/>
                    </div>
                )
            })}
        </div>
    )
}

export default MoviesList;