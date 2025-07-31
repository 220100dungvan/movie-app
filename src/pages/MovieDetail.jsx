import { useParams } from "react-router-dom";
import { PlayButton } from "../components/icons/PlayButton";
import { Fragment, useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import {
  formatCurrency,
  formatDate,
  formatDuration,
  formatNumberShort,
} from "../utils/format";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState(null);

  const params = useParams();

  const fetchVideo = async (id) => {
    try {
      const url = `${API_BASE_URL}/movie/${id}/videos`;
      const response = await fetch(url, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setVideo(data.results[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMovieDetail = async (id) => {
    try {
      setLoading(true);
      const url = `${API_BASE_URL}/movie/${id}`;
      const response = await fetch(url, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Movie Detail:", data);
      setMovie(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchMovieDetail(params.id);
      fetchVideo(params.id);
    }
  }, [params.id]);

  return (
    <div className="movie-detail">
      <div className="content">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <section className="movie-detail__header">
              <div className="movie-overview">
                <p className="movie-title">{movie.title}</p>
                <div className="movie-meta">
                  <span className="movie-year">
                    {movie.release_date.split("-")[0]}
                  </span>
                  <span>•</span>
                  <span className="movie-rating">
                    {movie.adult ? "R" : "PG-13"}
                  </span>
                  <span>•</span>
                  <span className="movie-duration">
                    {formatDuration(movie.runtime)}
                  </span>
                </div>
              </div>
              <div className="rating-bar">
                <button className="rating-bar__votes">
                  <img src="/star.svg" alt="" />
                  <span className="rating-score">
                    <span>
                      <strong className="score-value">
                        {movie.vote_average
                          ? movie.vote_average.toFixed(1)
                          : "N/A"}
                      </strong>
                      /10
                    </span>
                    <span
                      className="total-votes"
                      data-movie-count={movie.vote_count}
                    >
                      (
                      {movie.vote_count
                        ? formatNumberShort(movie.vote_count)
                        : "0"}
                      )
                    </span>
                  </span>
                </button>
                <button className="rating-bar__popularity">
                  <img src="/popularity.svg" alt="" />
                  <span className="popularity-value">
                    {Math.round(movie.popularity)}1
                  </span>
                </button>
              </div>
            </section>
            <section className="movie-detail__media">
              <div className="movie-poster">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : "/no-poster.png"
                  }
                  alt="Poster Squid Game 2"
                />
              </div>
              <div className="movie-trailer">
                {/* <img
                  src={
                    movie.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                      : "/no-backdrop.png"
                  }
                  alt="Squid Game Trailer"
                /> */}
                  <iframe src={`https://www.youtube.com/embed/${video.key}`}></iframe>
                <button className="trailer-button">
                  <PlayButton size={24} fill="#AB8BFF"></PlayButton>
                  <span>Trailer</span>
                  <span className="dot">•</span>
                  <span>00:31</span>
                </button>
              </div>
            </section>
            <section className="movie-detail__information">
              <div className="movie-detail__content">
                <div className="detail-item">
                  <div className="detail-item__label">Generes</div>
                  <div className="detail-item__value">
                    {movie.genres.map((genre) => (
                      <span key={genre.id} className="genre">
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-item__label">Overview</div>
                  <div className="detail-item__value overview">
                    {movie.overview || "No overview available."}
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-item__label">Release date</div>
                  <div className="detail-item__value">
                    {formatDate(movie.release_date)}
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-item__label">Countries</div>
                  <div className="detail-item__value">
                    {movie.production_countries.map((country, index) => (
                      <Fragment key={country.iso_3166_1}>
                        <span className="country">{country.name}</span>
                        {index < movie.production_countries.length - 1 && (
                          <span className="dot">•</span>
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-item__label">Status</div>
                  <div className="detail-item__value">{movie.status}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-item__label">Language</div>
                  <div className="detail-item__value">
                    {movie.spoken_languages.map((language, index) => (
                      <Fragment key={language.iso_639_1}>
                        <span className="language">{language.name}</span>
                        {index < movie.spoken_languages.length - 1 && (
                          <span className="dot">•</span>
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-item__label">Budget</div>
                  <div className="detail-item__value">
                    {formatCurrency(movie.budget)}
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-item__label">Revenue</div>
                  <div className="detail-item__value">
                    {formatCurrency(movie.revenue)}
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-item__label">Tagline</div>
                  <div className="detail-item__value">{movie.tagline}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-item__label">Production Companies</div>
                  <div className="detail-item__value">
                    {movie.production_companies.map((company, index) => (
                      <Fragment key={company.id}>
                        <span className="company">{company.name}</span>
                        {index < movie.production_companies.length - 1 && (
                          <span className="dot">•</span>
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <a href="#" className="homepage-button">
                Visit Homepage
                <img src="/arrow-right-tiny.svg" alt="" />
              </a>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
