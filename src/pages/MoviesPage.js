import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar/SearchBar';
import MovieList from '../components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByKeyword } from 'api/api';

const StyledMoviesPage = styled.div`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;

  h1 {
    margin-bottom: 20px;
  }

  p {
    color: red;
  }
`;

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
      } catch (err) {
        if (!isMounted) return;

        setError(err);
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
    <StyledMoviesPage>
      <h1>Movies Search</h1>
      <SearchBar handleSearch={handleSearch} />
      {loading && <Loader />}
      {error && <p>Error: {error.message}</p>}
      {movies.length === 0 && <p>No movies found.</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </StyledMoviesPage>
  );
};

export default MoviesPage;
