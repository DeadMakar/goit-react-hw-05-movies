import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../api/api';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const params = useParams();
  const [error, setError] = useState(false);
  const [authors, setAuthors] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setLoader(true);
        setError(false);

        const result = await fetchMovieCredits(params.movieId);
        setAuthors(result);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    fetchMovieCast();
  }, [params.movieId]);

  return (
    <>
      {loader && <p>Loading...</p>}
      {error && <p>Error loading cast details</p>}
      {authors && (
        <ul>
          {authors.length < 1 ? (
            <p>Sorry, no description available</p>
          ) : (
            authors.map(
              ({ character, id, name, profile_path, original_name }) => (
                <li key={id}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w185/${profile_path}`
                        : defaultImg
                    }
                    alt={original_name}
                  />
                  <h3>Actor: {name}</h3>
                  <p>Role: {character}</p>
                </li>
              )
            )
          )}
        </ul>
      )}
    </>
  );
};

export default Cast;
