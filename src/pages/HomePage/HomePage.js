import { useEffect, useState } from 'react';
import { StyledHomePage, TitleStyled } from './HomePage.styled.js';
import { fetchTrendingMovies } from 'api/api';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';

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
      <TitleStyled aria-label="Trending today">Trending today</TitleStyled>
      <MovieList movies={movies} />
      {loader && <Loader />}
    </StyledHomePage>
  );
};

export default HomePage;
