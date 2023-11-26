import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { List, Li, Card, Img } from './MovieList.styled';

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
                  {poster_path && (
                    <Img
                      src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                      alt={title ?? name}
                    />
                  )}
                  {title ?? name}
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
