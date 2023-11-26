import { useEffect, useState } from 'react';
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
    <>
      <h2
        style={{
          textAlign: 'center',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
        aria-label="Trending today"
      >
        Trending today
      </h2>
      <MovieList movies={movies} />
      {loader && <Loader />}
    </>
  );
};

export default HomePage;
