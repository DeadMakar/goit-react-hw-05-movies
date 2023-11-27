import { useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../../api/api';
import {
  AdditionalInfo,
  Button,
  DetailsContainer,
  Genres,
  InfoBox,
  InfoHeading,
  InfoItem,
  InfoList,
  MovieImage,
  MovieTitle,
  Overview,
  Score,
} from './MovieDetailsPage.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [moviesDetails, setMoviesDetails] = useState(null);
  const buttonBack = location.state?.from ?? '/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await fetchMovieDetails(movieId);
        setMoviesDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      }
    };

    fetchData();
  }, [movieId]);

  if (!moviesDetails) return;

  const { poster_path, title, genres, overview, vote_average, release_date } =
    moviesDetails;

  return (
    <DetailsContainer>
      <Button>
        <Link to={buttonBack}>Go Back</Link>
      </Button>
      <InfoBox>
        <div>
          <MovieImage
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : defaultImg
            }
            alt={title}
          />
        </div>
        <div>
          <MovieTitle>
            {title} {release_date?.substr(0, 4)}
          </MovieTitle>
          <Score>User Score: {Math.floor(vote_average * 10)}%</Score>
          <Overview>
            <h2>Overview</h2>
            <p>{overview}</p>
          </Overview>
          <Genres>
            <h2>Genres</h2>
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </Genres>
        </div>
      </InfoBox>

      <AdditionalInfo>
        <InfoHeading>Additional information</InfoHeading>
        <InfoList>
          <InfoItem>
            <Link to={`cast`}>Cast</Link>
          </InfoItem>
          <InfoItem>
            <Link to={`reviews`}>Reviews</Link>
          </InfoItem>
        </InfoList>
      </AdditionalInfo>
      <Outlet />
    </DetailsContainer>
  );
};

export default MoviesDetails;
