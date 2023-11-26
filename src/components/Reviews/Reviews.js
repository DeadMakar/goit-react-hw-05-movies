import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api/api';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieReviews = await fetchMovieReviews(movieId);
        setReviews(movieReviews.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error.message);
      }
    };

    fetchData();
  }, [movieId]);

  if (!reviews) {
    return <Loader />;
  }

  return (
    <div>
      <h2>Reviews</h2>
    </div>
  );
};

export default Reviews;
