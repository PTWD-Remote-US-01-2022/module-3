function MovieCard({ movie, clickToDelete }) {
  // how the data will come to MovieCard?
  // console.log(props.movie);

//   const { movie } = props;

  return (
    <div>
      <h3> {movie.title}</h3>
      <p> Director: {movie.director}</p>
      <p> Rating: {movie.IMDBRating}</p>
      
      { movie.hasOscars ? <p> Oscar Rewarded! </p> : <p> No Oscars for this movie! </p>}
      
      <button onClick={() => clickToDelete(movie._id)}> Delete </button>
    </div>
  );
}

export default MovieCard;
