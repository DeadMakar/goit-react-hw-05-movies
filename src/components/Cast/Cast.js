import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../api/api';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetchMovieCredits(id)
      .then(({ cast }) => {
        if (isMounted) {
          setAuthors(cast);
          setError(false);
        }
      })
      .catch(error => {
        if (isMounted) {
          console.log(error);
          setAuthors(null);
          setError('Something went wrong, please try again.');
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <>
      {error && <p>{error}</p>}
      {authors && (
        <ul>
          {authors.length < 1 ? (
            <p>Sorry, no description available</p>
          ) : (
            authors.map(({ character, id, name, profile_path }) => (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : defaultImg
                  }
                  width={250}
                  alt="poster"
                />
                <h3>Actor: {name}</h3>
                <p>Role: {character}</p>
              </li>
            ))
          )}
        </ul>
      )}
    </>
  );
};

export default Cast;
