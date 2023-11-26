import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api/api';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieInfo = async movieId => {
      try {
        setLoader(true);
        setError(false);

        const result = await fetchMovieReviews(movieId);
        setReviews(result);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    fetchMovieInfo(movieId);
  }, [movieId]);

  if (!reviews) {
    return <Loader />;
  }

  return (
    <>
      {loader && <p>Loading...</p>}
      {error && <p>Error loading details</p>}
      {reviews && (
        <ul>
          {reviews.length < 1 ? (
            <p>Sorry, no description available</p>
          ) : (
            reviews.map(({ author, id, content }) => (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            ))
          )}
        </ul>
      )}
    </>
  );
};

export default Reviews;
