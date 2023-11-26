import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api/api';
import Loader from 'components/Loader/Loader';
import {
  AuthorHeading,
  ErrorMessage,
  ReviewItem,
  ReviewList,
  ReviewsContainer,
} from './Reviews.styled';

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
    <ReviewsContainer>
      {loader}
      {error && <ErrorMessage>Error loading details</ErrorMessage>}
      {reviews && (
        <ReviewList>
          {reviews.length < 1 ? (
            <ErrorMessage>Sorry, no description available</ErrorMessage>
          ) : (
            reviews.map(({ author, id, content }) => (
              <ReviewItem key={id}>
                <AuthorHeading>{author}</AuthorHeading>
                <p>{content}</p>
              </ReviewItem>
            ))
          )}
        </ReviewList>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
