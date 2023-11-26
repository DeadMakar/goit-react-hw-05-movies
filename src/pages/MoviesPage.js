import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import MovieList from '../components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByKeyword } from 'api/api';

const MoviesPage = () => {
  const [params, setParams] = useSearchParams({ query: '' });
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const moviesName = params.get('query');

  const handleSearch = query => {
    setParams({ query: query || '' });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await searchMoviesByKeyword(moviesName);
        if (!isMounted) return;

        setMovies(response.results);
      } catch (error) {
        if (!isMounted) return;

        setError(error);
      } finally {
        setLoading(false);
      }
    };

    let isMounted = true;

    if (moviesName) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [moviesName]);

  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        Movies Search
      </h1>
      <SearchBar handleSearch={handleSearch} />
      {loading && <Loader />}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {movies.length === 0 && <p>No movies found.</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
