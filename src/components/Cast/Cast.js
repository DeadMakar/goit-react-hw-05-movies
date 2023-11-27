import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../api/api';
import {
  CastCharacter,
  CastImage,
  CastItem,
  CastList,
  CastName,
} from './Cast.styled';

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
      {error && !authors && <p>Error loading cast details</p>}
      {authors && authors.length > 0 && (
        <CastList>
          {authors.map(
            ({ character, id, name, profile_path, original_name }) => (
              <CastItem key={id}>
                <CastImage
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w185/${profile_path}`
                      : defaultImg
                  }
                  alt={original_name}
                />
                <CastName>Actor: {name}</CastName>
                <CastCharacter>Role: {character}</CastCharacter>
              </CastItem>
            )
          )}
        </CastList>
      )}
    </>
  );
};

export default Cast;
