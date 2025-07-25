import React from "react";

function MovieCard({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) {
  // console.log(poster_path);
  return (
    <div className="movie-card">
      <img
        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: 'no-poster.png'}
        alt={title}
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span>•</span>
          <p className="lang">{original_language}</p>
          <span>•</span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
//https://media.themoviedb.org/t/p/w440_and_h660_face/psASSoFLAGFoXwyfRg4hDZHgshN.jpg
//https://media.themoviedb.org/t/p/w440_and_h660_face/n0bqzWiKGJsmnvOlkTiYykhhM4E.jpg
export default MovieCard;
