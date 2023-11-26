import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchTrendingMovies } from 'api/api';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';

const StyledHomePage = styled.div`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetchTrendingMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <StyledHomePage>
      <h2 aria-label="Trending today">Trending today</h2>
      <MovieList movies={movies} />
      {loader && <Loader />}
    </StyledHomePage>
  );
};

export default HomePage;
