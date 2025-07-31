import { useNavigate } from "react-router-dom";

function MovieCard({
  movie: {
    id,
    title,
    vote_average,
    poster_path,
    release_date,
    original_language,
  },
}) {
  const navigate = useNavigate();
  function handleClickedMovieCard(event) {
    const dataId = event.currentTarget.getAttribute("data-id");
    navigate(`/movie/${dataId}`);
  }

  return (
    <div
      className="movie-card"
      key={id}
      data-id={id}
      onClick={handleClickedMovieCard}
    >
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-poster.png"
        }
        alt={title}
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="/star.svg" alt="Star Icon" />
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
export default MovieCard;
