import { useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../api/api';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const BackLink = styled(Link)`
  display: block;
  margin-bottom: 20px;
  text-decoration: none;
  color: #3498db;
  font-size: 18px;
`;

const MovieImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const MovieTitle = styled.h2`
  margin: 10px 0;
`;

const Score = styled.p`
  margin: 5px 0;
`;

const Overview = styled.p`
  margin: 10px 0;
`;

const Genres = styled.p`
  margin: 10px 0;
`;

const AdditionalInfo = styled.div`
  margin-top: 20px;
`;

const InfoHeading = styled.h3`
  margin-bottom: 10px;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  margin-bottom: 5px;
`;

const MoviesDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [moviesDetails, setMoviesDetails] = useState({});
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

  const { poster_path, title, genres, overview, vote_average, release_date } =
    moviesDetails;

  return (
    <DetailsContainer>
      <BackLink to={buttonBack}>Go Back</BackLink>
      <div>
        <div>
          <MovieImage
            src={
              poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : ''
            }
            alt={title}
          />
        </div>
        <div>
          {title && (
            <MovieTitle>
              {title} {release_date?.substr(0, 4)}
            </MovieTitle>
          )}

          <Score>
            User Score: {vote_average && Math.floor(vote_average * 10)}%
          </Score>
          <Overview>
            <h2>Overview</h2>
            <p>{overview}</p>
          </Overview>
          <Genres>
            <h2>Genres</h2>
            {genres && <p>{genres.map(({ name }) => name).join(', ')}</p>}
          </Genres>
        </div>
      </div>

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
