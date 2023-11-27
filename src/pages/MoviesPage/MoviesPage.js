import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByKeyword } from 'api/api';
import { StyledMoviesPage } from './MoviesPage.styled';

const MoviesPage = () => {
  const [params, setParams] = useSearchParams({ query: '' });
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const moviesName = params.get('query');

  const handleSearch = query => {
    setParams({ query });
    setSubmitted(true);
  };

  useEffect(() => {
    if (!moviesName) return;

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await searchMoviesByKeyword(moviesName);
        setMovies(response.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [moviesName, submitted]);

  return (
    <StyledMoviesPage>
      <h1>Movies Search</h1>
      <SearchBar handleSearch={handleSearch} />
      {loading && <Loader />}
      {error && <p>Error: {error.message}</p>}
      {movies.length === 0 && submitted && !loading && <p>No movies found.</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </StyledMoviesPage>
  );
};

export default MoviesPage;
