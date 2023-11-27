import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { List, Li, Card, Img, PosterTitle } from './MovieList.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {movies.map(({ id, title, name, poster_path }) => {
          return (
            <Li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <Card>
                  {poster_path ? (
                    <Img
                      src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                      alt={title ?? name}
                    />
                  ) : (
                    <Img src={defaultImg} alt={title ?? name} />
                  )}
                  <PosterTitle>{title ?? name}</PosterTitle>
                </Card>
              </Link>
            </Li>
          );
        })}
      </List>
    </>
  );
};

export default MovieList;
