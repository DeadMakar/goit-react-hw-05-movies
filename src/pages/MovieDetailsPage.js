import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../api/api';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [moviesDetails, setMoviesDetails] = useState({});
  const buttonBack = location.state?.from ?? '/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await fetchMovieDetails(movieId);
        setMoviesDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      }
    };

    fetchData();
  }, [movieId]);

  const { poster_path, title, genres, overview, vote_average, release_date } =
    moviesDetails;

  return (
    <>
      <Link to={buttonBack}>Go Back</Link>
      <div>
        <div>
          <img
            src={
              poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : ''
            }
            alt={title}
          />
        </div>
        <div>
          {title && (
            <h2>
              {title} {release_date?.substr(0, 4)}
            </h2>
          )}

          <p>User Score: {vote_average && Math.floor(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          {genres && <p>{genres.map(({ name }) => name).join(', ')}</p>}
        </div>
      </div>

      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={`${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MoviesDetails;
